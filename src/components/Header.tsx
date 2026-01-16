import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-slate-100">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-primary-foreground"
            >
              <path 
                d="M8 5.14v14l11-7-11-7z" 
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="text-lg font-semibold text-foreground">FeatureFlicks</span>
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <a href="#" className="nav-link text-sm">
            Log in
          </a>
          <Button className="btn-primary text-sm h-9 px-4">
            Get started
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;