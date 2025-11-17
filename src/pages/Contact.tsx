import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="px-6 lg:px-12 mb-20">
          <div className="container mx-auto">
            <div className="max-w-4xl animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-balance">
                Let's talk about your project
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Have a question or want to work together? Get in touch and let's create something amazing.
              </p>
            </div>
          </div>
        </section>

        <div className="px-6 lg:px-12">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full min-h-[150px]"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full rounded-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Calendly Embed */}
              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <h2 className="text-3xl font-bold mb-6">Schedule a call</h2>
                <div className="bg-card border border-border rounded-2xl p-8 h-[600px] flex flex-col items-center justify-center">
                  <p className="text-lg text-muted-foreground mb-6 text-center">
                    Book a time that works best for you
                  </p>
                  <a
                    href="https://calendly.com/mazanashvilisalome/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button size="lg" className="w-full rounded-full">
                      Open Calendly
                    </Button>
                  </a>
                  <div className="mt-8 w-full">
                    <iframe
                      src="https://calendly.com/mazanashvilisalome/30min"
                      width="100%"
                      height="400"
                      frameBorder="0"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
