import DocumentCard from "./DocumentCard";
import ReelCard from "./ReelCard";
import { ArrowRight } from "lucide-react";

const HeroVisuals = () => {
  const reels = [
    { title: "Why we built it", duration: "0:45" },
    { title: "What changed", duration: "1:12" },
    { title: "How it works", duration: "0:58" },
  ];

  return (
    <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
      {/* Before - Document */}
      <div className="animate-fade-up" style={{ animationDelay: "200ms", opacity: 0 }}>
        <DocumentCard />
      </div>

      {/* Arrow */}
      <div 
        className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 animate-fade-up"
        style={{ animationDelay: "400ms", opacity: 0 }}
      >
        <ArrowRight className="w-5 h-5 text-slate-500" />
      </div>

      {/* After - Reels */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-end gap-3">
          {reels.map((reel, index) => (
            <div
              key={reel.title}
              className="animate-fade-up"
              style={{ 
                animationDelay: `${500 + index * 100}ms`,
                opacity: 0,
                transform: index === 1 ? 'translateY(-8px)' : 'translateY(0)'
              }}
            >
              <ReelCard
                title={reel.title}
                duration={reel.duration}
              />
            </div>
          ))}
        </div>
        
        <p 
          className="text-sm text-muted-foreground text-center animate-fade-up"
          style={{ animationDelay: "800ms", opacity: 0 }}
        >
          3 short explainer videos<br />
          <span className="text-slate-400">(under 2 min each)</span>
        </p>
      </div>
    </div>
  );
};

export default HeroVisuals;
