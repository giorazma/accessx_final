import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import aiUxImage from "@/assets/ai-ux-research.jpg";

interface Insight {
  id: string;
  title: string;
  featured_image: string | null;
  description: string;
  author_name: string;
  published_date: string;
  slug: string;
}

// Static insights data
const staticInsights: Insight[] = [
  {
    id: "1",
    title: "The Power of Inclusive Design Thinking",
    featured_image: null,
    description: "Discover how inclusive design principles can transform your product strategy and create experiences that work for everyone, not just the average user.",
    author_name: "Sarah Chen",
    published_date: "2025-01-15",
    slug: "inclusive-design-thinking"
  },
  {
    id: "2",
    title: "WCAG 2.2: What's New and Why It Matters",
    featured_image: null,
    description: "A comprehensive guide to the latest Web Content Accessibility Guidelines updates and how they impact your digital products in 2025.",
    author_name: "AccessX Team",
    published_date: "2025-01-10",
    slug: "wcag-2-2-updates"
  },
  {
    id: "3",
    title: "Color Contrast: Beyond the Basics",
    featured_image: null,
    description: "Learn advanced techniques for ensuring your color palette works for users with various types of color vision deficiencies.",
    author_name: "Maria Rodriguez",
    published_date: "2025-01-05",
    slug: "color-contrast-advanced"
  },
  {
    id: "4",
    title: "Screen Reader Testing for Designers",
    featured_image: null,
    description: "A practical guide for designers to understand and test their work with screen readers, ensuring truly accessible experiences.",
    author_name: "James Wilson",
    published_date: "2024-12-28",
    slug: "screen-reader-testing"
  }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const insights = staticInsights;
  const loading = false;

  const categories = ["All"];
  const featuredInsights = insights.slice(0, 2);
  const recentInsights = insights.slice(2);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="px-6 lg:px-12 mb-20">
          <div className="container mx-auto">
            <div className="max-w-4xl animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-balance">
                Insights & Ideas.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Thoughts on UX design, accessibility, research, and everything in between.
              </p>
            </div>
          </div>
        </section>

        {loading ? (
          <section className="px-6 lg:px-12 mb-20">
            <div className="container mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {[1, 2].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-[16/9] rounded-2xl bg-secondary mb-6"></div>
                    <div className="h-6 bg-secondary rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-secondary rounded w-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : insights.length === 0 ? (
          <section className="px-6 lg:px-12 mb-20">
            <div className="container mx-auto text-center">
              <p className="text-xl text-muted-foreground">No insights available yet. Check back soon!</p>
            </div>
          </section>
        ) : (
          <>
          {/* Static Featured Post with Accordion */}
          <section className="px-6 lg:px-12 mb-20">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8">Featured Article</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="ai-article" className="border-none">
                  <article className="animate-fade-in">
                    <AccordionTrigger className="hover:no-underline [&[data-state=open]>div]:scale-[0.98] group">
                      <div className="w-full transition-smooth">
                        <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-6 group-hover:scale-[1.02] transition-smooth">
                          <img 
                            src={aiUxImage} 
                            alt="How AI Is Transforming UX Research"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="space-y-4 text-left">
                          <h3 className="text-3xl font-bold group-hover:text-accent transition-smooth">
                            How AI Is Transforming UX Research
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            AI is changing how UX researchers collect, analyze, and interpret insights — not by replacing them, but by amplifying their power.
                          </p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="font-semibold">AccessX Team</span>
                            <span>•</span>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {new Date().toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-accent font-semibold pt-2">
                            Click to read article <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-8">
                      <div className="prose prose-lg max-w-none">
                        <h2 className="text-2xl font-bold mb-4">The Shift in How We Understand Users</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          User experience (UX) research has always been about one thing — understanding people. Traditionally, this meant conducting interviews, usability tests, and surveys to uncover insights about users' behaviors and motivations. But as digital products become more complex and data-rich, researchers are increasingly turning to artificial intelligence (AI) to process, interpret, and even predict user needs faster than ever before.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-8 font-semibold">
                          AI is not replacing UX researchers — it's amplifying their capabilities.
                        </p>

                        <h3 className="text-xl font-bold mb-3">1. AI for Data Analysis: From Hours to Minutes</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Researchers spend countless hours reviewing recordings, transcribing interviews, and tagging insights. AI tools can now automate much of that work.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Platforms like Dovetail AI, Notably, and Grain can summarize interviews, identify emotional tones, and cluster themes automatically. Instead of manually reading through hundreds of user comments, researchers can now focus on interpreting why those insights matter and how to apply them strategically.
                        </p>
                        <p className="bg-accent/10 p-4 rounded-lg mb-8">
                          💡 <strong>Example:</strong> AI can detect recurring frustration around "payment errors" across 50 usability test videos — saving days of manual analysis.
                        </p>

                        <h3 className="text-xl font-bold mb-3">2. Predictive Insights and Behavioral Modeling</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Machine learning allows UX teams to go beyond describing user behavior to predicting it. By analyzing behavioral data (clicks, dwell time, navigation paths), AI can identify which users are likely to churn, abandon carts, or struggle with certain flows.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                          For UX researchers, this means being proactive. Instead of waiting for issues to appear in usability testing, AI-driven analytics highlight potential friction points in real time.
                        </p>

                        <h3 className="text-xl font-bold mb-3">3. AI-Powered Testing and Optimization</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          AI can simulate and even conduct unmoderated tests at scale.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          For example, Eye-tracking AI tools can predict where users' attention will go on a page before it's live, while AI-generated usability tests can automatically adjust questions based on user responses.
                        </p>
                        <p className="bg-accent/10 p-4 rounded-lg mb-8">
                          🧠 <strong>Imagine</strong> testing 10 variations of a checkout flow overnight and receiving a ranked summary of usability scores the next morning.
                        </p>

                        <h3 className="text-xl font-bold mb-3">4. Generative AI in Research Synthesis and Reporting</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          One of the most time-consuming phases of UX research is creating reports and communicating findings. Generative AI can help draft summaries, create visual dashboards, and even suggest key quotes or visuals to include.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                          Tools like ChatGPT, Gemini, or Claude can synthesize interview transcripts and survey data into structured reports — leaving more room for human storytelling, empathy, and stakeholder alignment.
                        </p>

                        <h3 className="text-xl font-bold mb-3">5. Ethical Considerations: AI Needs Human Oversight</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          AI is powerful, but it lacks empathy, cultural context, and ethical judgment — qualities that are fundamental to UX research.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                          Researchers must ensure data privacy, avoid biased datasets, and validate AI-driven insights through real human interaction.
                        </p>
                        <p className="bg-accent/10 p-4 rounded-lg mb-8">
                          👩‍💻 <strong>Human researchers remain essential</strong> — not only for ensuring inclusivity and accessibility but for interpreting the why behind the what.
                        </p>

                        <h3 className="text-xl font-bold mb-3">The Future: AI as a Research Partner</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          AI in UX research is not about replacing human insight — it's about accelerating discovery, broadening reach, and freeing time for creativity and empathy.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                          The most effective UX teams will be those that combine AI's analytical power with the emotional intelligence and critical thinking that only humans bring.
                        </p>

                        <div className="bg-primary/10 p-6 rounded-lg mt-8">
                          <p className="font-bold mb-2">💬 Final Thought:</p>
                          <p className="text-muted-foreground leading-relaxed mb-3">
                            The question for UX researchers today isn't whether to use AI — it's how.
                          </p>
                          <p className="text-muted-foreground leading-relaxed">
                            Those who learn to integrate AI responsibly and strategically will redefine what user understanding looks like in the next decade.
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </article>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          {/* Featured Posts from Database */}
          {featuredInsights.length > 0 && (
            <section className="px-6 lg:px-12 mb-20">
              <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8">More Featured Articles</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {featuredInsights.map((insight, index) => (
                    <Link
                      key={insight.id}
                      to={`/insights/${insight.slug}`}
                      className="group cursor-pointer animate-fade-in block"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <article>
                        {insight.featured_image ? (
                          <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-6 group-hover:scale-[1.02] transition-smooth">
                            <img 
                              src={insight.featured_image} 
                              alt={insight.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 mb-6 flex items-center justify-center group-hover:scale-[1.02] transition-smooth">
                            <span className="text-6xl font-black text-accent/30">
                              {insight.title.substring(0, 2)}
                            </span>
                          </div>
                        )}

                        <div className="space-y-4">
                          <h3 className="text-3xl font-bold group-hover:text-accent transition-smooth">
                            {insight.title}
                          </h3>

                          <p className="text-muted-foreground leading-relaxed">
                            {insight.description}
                          </p>

                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="font-semibold">{insight.author_name}</span>
                            <span>•</span>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {new Date(insight.published_date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-accent font-semibold pt-2 group-hover:gap-4 transition-smooth">
                            Read article <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* All Posts */}
          {recentInsights.length > 0 && (
            <section className="px-6 lg:px-12">
              <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8">Recent Articles</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {recentInsights.map((insight, index) => (
                    <Link
                      key={insight.id}
                      to={`/insights/${insight.slug}`}
                      className="group cursor-pointer animate-fade-in block"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <article>
                        {insight.featured_image ? (
                          <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-6 group-hover:scale-[1.02] transition-smooth">
                            <img 
                              src={insight.featured_image} 
                              alt={insight.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 mb-6 flex items-center justify-center group-hover:scale-[1.02] transition-smooth">
                            <span className="text-5xl font-black text-accent/30">
                              {insight.title.substring(0, 2)}
                            </span>
                          </div>
                        )}

                        <div className="space-y-3">
                          <h3 className="text-xl font-bold group-hover:text-accent transition-smooth">
                            {insight.title}
                          </h3>

                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                            {insight.description}
                          </p>

                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span>{insight.author_name}</span>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(insight.published_date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                              })}
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
        )}

        {/* Newsletter CTA */}
        <section className="px-6 lg:px-12 mt-32">
          <div className="container mx-auto">
            <div className="bg-accent/10 rounded-3xl p-12 lg:p-20 text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Never miss an update
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest articles on UX, accessibility, and design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-6 py-4 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-4 font-semibold transition-smooth hover:scale-105 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
