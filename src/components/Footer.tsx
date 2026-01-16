const Footer = () => {
    return (
      <footer className="w-full py-8 px-6 md:px-12 border-t border-border/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="font-display font-bold">
              <span className="text-foreground">Grand</span>
              <span className="text-primary">Greet</span>
            </span>
            <span className="text-sm ml-2">
              © 2025 Spreading joy one greeting at a time.
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;