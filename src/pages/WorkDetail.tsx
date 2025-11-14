import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Work {
  id: string;
  title: string;
  thumbnail_image: string | null;
  category: string;
  description: string;
  case_study_body: string;
  external_link: string | null;
  tags: string[] | null;
}

const WorkDetail = () => {
  const { slug } = useParams();
  const [work, setWork] = useState<Work | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWork = async () => {
      const { data, error } = await supabase
        .from("works")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      if (error) {
        console.error("Error fetching work:", error);
      } else {
        setWork(data);
      }
      setLoading(false);
    };

    fetchWork();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-secondary rounded w-3/4"></div>
              <div className="h-4 bg-secondary rounded w-1/2"></div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!work) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="text-4xl font-black mb-4">Case study not found</h1>
            <Link to="/works">
              <Button variant="outline" className="rounded-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Works
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <article className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <Link to="/works" className="inline-flex items-center gap-2 text-accent font-semibold mb-8 hover:gap-3 transition-smooth">
            <ArrowLeft className="w-5 h-5" />
            Back to Works
          </Link>

          {work.thumbnail_image && (
            <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-8">
              <img 
                src={work.thumbnail_image} 
                alt={work.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <span className="px-3 py-1 bg-accent/10 rounded-full font-medium text-accent">
                {work.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-balance">
              {work.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {work.description}
            </p>

            {work.tags && work.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-secondary rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {work.external_link && (
              <a 
                href={work.external_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-smooth"
              >
                View Live Project <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </header>

          <div 
            className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-accent prose-img:rounded-2xl"
            dangerouslySetInnerHTML={{ __html: work.case_study_body }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default WorkDetail;