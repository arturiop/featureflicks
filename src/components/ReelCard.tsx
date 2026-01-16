import { Play } from "lucide-react";

interface ReelCardProps {
  title: string;
  duration: string;
  variant?: "purple" | "blue" | "teal";
  floating?: boolean;
  floatDelay?: number;
}

const variants = {
  purple: "from-violet-100 via-purple-50 to-pink-50",
  blue: "from-sky-100 via-blue-50 to-indigo-50", 
  teal: "from-emerald-100 via-teal-50 to-cyan-50",
};

const ReelCard = ({ title, duration, variant = "purple", floating = false, floatDelay = 0 }: ReelCardProps) => {
  return (
    <div 
      className={`reel-card group cursor-pointer ${floating ? 'animate-float' : ''}`}
      style={{ 
        animationDelay: `${floatDelay}s`,
      }}
    >
      {/* Colorful gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${variants[variant]} opacity-80`} />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.8) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255,255,255,0.6) 0%, transparent 40%)`
        }}
      />
      
      {/* Bottom gradient for text readability */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/40 via-slate-900/20 to-transparent" />
      
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 ease-out">
          <Play className="w-6 h-6 text-slate-800 ml-1" fill="currentColor" />
        </div>
      </div>

      {/* Duration badge */}
      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10">
        <span className="text-xs font-semibold text-white tracking-wide">{duration}</span>
      </div>

      {/* Subtitle bars simulation */}
      <div className="absolute bottom-12 left-4 right-4 space-y-1.5">
        <div className="h-1 bg-white/70 rounded-full w-4/5" />
        <div className="h-1 bg-white/50 rounded-full w-3/5" />
      </div>

      {/* Title at bottom */}
      <div className="absolute bottom-3 left-4 right-4">
        <p className="text-xs font-semibold text-white/90 truncate drop-shadow-sm">{title}</p>
      </div>
    </div>
  );
};

export default ReelCard;
