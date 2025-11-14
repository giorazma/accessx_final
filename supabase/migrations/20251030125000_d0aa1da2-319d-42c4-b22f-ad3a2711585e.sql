-- Create insights table for blog posts
CREATE TABLE public.insights (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  featured_image TEXT,
  description TEXT NOT NULL,
  body TEXT NOT NULL,
  author_name TEXT NOT NULL,
  published_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create works table for case studies/portfolio
CREATE TABLE public.works (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  thumbnail_image TEXT,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  case_study_body TEXT NOT NULL,
  external_link TEXT,
  tags TEXT[],
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.insights ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.works ENABLE ROW LEVEL SECURITY;

-- Create policies for insights (public read access)
CREATE POLICY "Anyone can view published insights" 
ON public.insights 
FOR SELECT 
USING (true);

-- Create policies for works (public read access)
CREATE POLICY "Anyone can view works" 
ON public.works 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_insights_updated_at
BEFORE UPDATE ON public.insights
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_works_updated_at
BEFORE UPDATE ON public.works
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_insights_slug ON public.insights(slug);
CREATE INDEX idx_insights_published_date ON public.insights(published_date DESC);
CREATE INDEX idx_works_slug ON public.works(slug);
CREATE INDEX idx_works_category ON public.works(category);