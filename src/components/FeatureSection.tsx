import { FileText, Video, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Upload your docs",
    description: "Drop in PRDs, specs, or Notion pages. We extract the key points automatically.",
    gradient: "from-violet-500/10 to-purple-500/10",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    icon: Sparkles,
    title: "AI generates videos",
    description: "Our AI creates concise, engaging explainer videos with clear visuals and narration.",
    gradient: "from-sky-500/10 to-blue-500/10",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    icon: Users,
    title: "Share with your team",
    description: "Everyone from sales to engineering understands new features in minutes, not hours.",
    gradient: "from-emerald-500/10 to-teal-500/10",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-28 px-6 bg-white relative">
      {/* Subtle top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 tracking-tight">
            What FeatureFlicks Does
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Convert long specs and tickets into short explainer videos for internal alignment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`relative p-8 rounded-3xl bg-gradient-to-br ${feature.gradient} border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:shadow-lg hover:shadow-slate-100/50 group`}
            >
              <div className={`w-12 h-12 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
