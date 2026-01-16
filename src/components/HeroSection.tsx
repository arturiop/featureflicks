import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import HeroVisuals from "./HeroVisuals";

export const HeroSection = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center">
      <div className="container mx-auto max-w-5xl text-center">
        {/* Headline */}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 text-balance animate-fade-up"
          style={{ opacity: 0 }}
        >
          Turn feature documentation<br />
          into engaging videos
        </h1>

        {/* Subheadline */}
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up"
          style={{ animationDelay: "100ms", opacity: 0 }}
        >
          Turn 10–30 pages of docs into 3 short videos anyone in your company can understand.
        </p>

        {/* CTAs */}
        <div 
          className="flex items-center justify-center gap-6 mb-20 animate-fade-up"
          style={{ animationDelay: "150ms", opacity: 0 }}
        >
          <Button className="btn-primary h-12 px-6 text-base">
            Create videos from docs
            <ArrowRight className="w-4 h-4" />
          </Button>
          <a href="#" className="btn-ghost group">
            <Play className="w-4 h-4" />
            <span>Watch example</span>
          </a>
        </div>

        {/* Hero Visuals */}
        <HeroVisuals />
      </div>
    </section>
  );
};