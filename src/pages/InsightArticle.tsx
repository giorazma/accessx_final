import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase, isSupabaseConfigured } from "@/integrations/supabase/client";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import designImpactImage from "@/assets/3550f424-9762-4568-ab38-52186b47b995.jpeg";

interface Insight {
  id: string;
  title: string;
  featured_image: string | null;
  description: string;
  body: string;
  author_name: string;
  published_date: string;
  slug?: string;
}

// Static insights with full content as fallback
const staticInsightsWithBody: Insight[] = [
  {
    id: "1",
    title: "Design Creates Impact by Translating User Needs into Business Success",
    featured_image: designImpactImage,
    description: "In today's digital-first world, design is not just about how things look — it's about how well they work, for users and for business. Discover how user needs drive meaningful experiences and business results.",
    author_name: "AccessX Team",
    published_date: "2025-01-17",
    slug: "design-creates-impact",
    body: `
      <p class="text-muted-foreground leading-relaxed mb-6">
        In today's digital-first world, design is not just about how things look — it's about how well they work, for users and for business. When we truly listen to what users need, and embed those insights deeply into our design, the result is meaningful user experiences that also drive business results.
      </p>

      <h2 class="text-2xl font-bold mb-4">Understanding user needs</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        At the heart of design lies: what are user needs? According to the <a href="https://www.interaction-design.org/" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">Interaction Design Foundation</a>, user needs are "users' desires, goals, preferences and expectations when they interact with a product or service." In short: the "why" behind what users are trying to accomplish.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-6">
        For example, as the <a href="https://www.nngroup.com/" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">Nielsen Norman Group</a> explains in its "Define" stage of design thinking:
      </p>
      <blockquote class="border-l-4 border-accent pl-6 mb-6 italic text-muted-foreground">
        "A user need statement … captures what we want to achieve with our design, not how."
      </blockquote>
      <p class="text-muted-foreground leading-relaxed mb-6">
        By framing needs as verbs (e.g., "to quickly compare options") rather than nouns ("we need a dropdown"), we avoid locking in onto solutions too early.
      </p>

      <h2 class="text-2xl font-bold mb-4">Linking user needs to business impact</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Great design treats user needs and business goals as two sides of the same coin. From the <a href="https://uxdesign.cc/" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">UX Collective</a> article:
      </p>
      <blockquote class="border-l-4 border-accent pl-6 mb-6 italic text-muted-foreground">
        "A successful user experience is not about meeting the exact needs of the users, the end goal is always business outcomes."
      </blockquote>
      <p class="text-muted-foreground leading-relaxed mb-6">
        And in practice: investing in UX delivers real business value — as shown by the Design Management Institute's Design Value Index and at-scale case studies. Moreover, one recent article found that a well-designed UX could boost a site's conversion rate by up to 200%.
      </p>

      <h2 class="text-2xl font-bold mb-4">How design makes this happen</h2>
      <ol class="list-decimal list-inside space-y-4 mb-6">
        <li class="text-muted-foreground leading-relaxed">
          <strong>Empathy & research</strong> — understand users deeply: their context, problems, goals. Without this, designers risk solving the wrong problem.
        </li>
        <li class="text-muted-foreground leading-relaxed">
          <strong>Define the need & goal</strong> — craft a clear need statement: "[Persona] needs to … in order to …" This guides the team and aligns stakeholders.
        </li>
        <li class="text-muted-foreground leading-relaxed">
          <strong>Align with business strategy</strong> — map user needs to business metrics (e.g., retention, conversion, cost reduction). As one article puts it: "Business-driven UX connects business strategy with user needs."
        </li>
        <li class="text-muted-foreground leading-relaxed">
          <strong>Design & test</strong> — iterate with prototypes, test with real users, measure impact (SUS, UMUX-Lite, NPS, etc.). Without measurement, you can't prove impact.
        </li>
        <li class="text-muted-foreground leading-relaxed">
          <strong>Deliver & scale</strong> — once validated, scale the solution, embed the design practice, track KPIs over time.
        </li>
      </ol>

      <h2 class="text-2xl font-bold mb-4">Why this matters for your organisation</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        When you build experiences grounded in real user needs — rather than internal assumptions — you reduce friction, delight users, and increase loyalty. That in turn translates into business success: higher conversions, stronger brand reputation, lower support costs. According to a UX blog:
      </p>
      <blockquote class="border-l-4 border-accent pl-6 mb-6 italic text-muted-foreground">
        "A well-designed UX design ensures that users can navigate products or services effortlessly … they are more likely to return and recommend the business to others."
      </blockquote>
      <p class="text-muted-foreground leading-relaxed mb-6">
        In other words: meeting user needs and aligning to business goals = impact.
      </p>

      <h2 class="text-2xl font-bold mb-4">Final thought</h2>
      <p class="text-muted-foreground leading-relaxed mb-6">
        Design is the bridge between what users need and what businesses aspire to achieve. When we centre design around the user need, align it with business strategy, and measure what matters — we create meaningful impact. As a UX research and design team, this is your superpower: translating insight into design into business success.
      </p>
    `
  }
];

const InsightArticle = () => {
  const { slug } = useParams();
  const [insight, setInsight] = useState<Insight | null>(null);
  const [loading, setLoading] = useState(isSupabaseConfigured);

  useEffect(() => {
    if (!supabase) {
      console.warn("Supabase is not configured. Using static data.");
      // Use static data as fallback
      const staticInsight = staticInsightsWithBody.find(i => i.slug === slug);
      setInsight(staticInsight || null);
      setLoading(false);
      return;
    }

    const fetchInsight = async () => {
      const { data, error } = await supabase
        .from("insights")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      if (error) {
        console.error("Error fetching insight:", error);
      }

      // Use Supabase data if available, otherwise fall back to static data
      if (data) {
        setInsight(data);
      } else {
        const staticInsight = staticInsightsWithBody.find(i => i.slug === slug);
        setInsight(staticInsight || null);
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