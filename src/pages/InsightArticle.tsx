import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Insight {
  id: string;
  title: string;
  featured_image: string | null;
  description: string;
  body: string;
  author_name: string;
  published_date: string;
}

const InsightArticle = () => {
  const { slug } = useParams();
  const [insight, setInsight] = useState<Insight | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsight = async () => {
      const { data, error } = await supabase
        .from("insights")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      if (error) {
        console.error("Error fetching insight:", error);
      } else {
        setInsight(data);
      }
      setLoading(false);
    };

    fetchInsight();
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

  if (!insight) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="text-4xl font-black mb-4">Article not found</h1>
            <Link to="/insights">
              <Button variant="outline" className="rounded-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Insights
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
        <article className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <Link to="/insights" className="inline-flex items-center gap-2 text-accent font-semibold mb-8 hover:gap-3 transition-smooth">
            <ArrowLeft className="w-5 h-5" />
            Back to Insights
          </Link>

          {insight.featured_image && (
            <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-8">
              <img 
                src={insight.featured_image} 
                alt={insight.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-balance">
              {insight.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {insight.description}
            </p>

            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="font-semibold">{insight.author_name}</span>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(insight.published_date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>
          </header>

          <div 
            className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-accent prose-img:rounded-2xl"
            dangerouslySetInnerHTML={{ __html: insight.body }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default InsightArticle;