const DocumentCard = () => {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          {/* Shadow layer */}
          <div className="absolute inset-0 bg-slate-200/50 rounded-2xl blur-xl transform translate-y-4 scale-95" />
          
          {/* Main card */}
          <div className="relative w-52 h-72 p-6 bg-white border-2 border-dashed border-slate-200 rounded-2xl">
            {/* Header decoration */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-slate-200" />
              <div className="h-2 w-20 bg-slate-200 rounded-full" />
            </div>
            
            {/* Document title line */}
            <div className="h-2.5 bg-slate-300 rounded-full w-3/4 mb-5" />
            
            {/* Text content simulation - paragraph 1 */}
            <div className="space-y-2 mb-4 opacity-60">
              <div className="h-1.5 bg-slate-200 rounded-full w-full" />
              <div className="h-1.5 bg-slate-200 rounded-full w-11/12" />
              <div className="h-1.5 bg-slate-200 rounded-full w-full" />
              <div className="h-1.5 bg-slate-200 rounded-full w-4/5" />
            </div>
  
            {/* Text content - paragraph 2 */}
            <div className="space-y-2 mb-4 opacity-50">
              <div className="h-1.5 bg-slate-200 rounded-full w-full" />
              <div className="h-1.5 bg-slate-200 rounded-full w-10/12" />
              <div className="h-1.5 bg-slate-200 rounded-full w-full" />
              <div className="h-1.5 bg-slate-200 rounded-full w-2/3" />
            </div>
  
            {/* Text content - paragraph 3 */}
            <div className="space-y-2 opacity-40">
              <div className="h-1.5 bg-slate-200 rounded-full w-full" />
              <div className="h-1.5 bg-slate-200 rounded-full w-5/6" />
              <div className="h-1.5 bg-slate-200 rounded-full w-11/12" />
            </div>
  
            {/* "Boring" overlay effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent via-transparent to-white/60" />
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground text-center font-medium">
          Feature documentation<br />
          <span className="text-slate-400 font-normal">(10–30 pages)</span>
        </p>
      </div>
    );
  };
  
  export default DocumentCard;
  