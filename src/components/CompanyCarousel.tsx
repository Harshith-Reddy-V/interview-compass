import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { companies } from "@/data/mockData";

const CompanyCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -280 : 280, behavior: "smooth" });
    }
  };

  return (
    <section className="py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">Popular Companies</h2>
        <div className="flex gap-2">
          <button onClick={() => scroll("left")} className="h-9 w-9 rounded-lg border border-border bg-secondary flex items-center justify-center hover:bg-muted transition-colors">
            <ChevronLeft className="h-4 w-4 text-foreground" />
          </button>
          <button onClick={() => scroll("right")} className="h-9 w-9 rounded-lg border border-border bg-secondary flex items-center justify-center hover:bg-muted transition-colors">
            <ChevronRight className="h-4 w-4 text-foreground" />
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {companies.map((c) => (
          <div
            key={c.name}
            className="flex-shrink-0 w-52 rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-all duration-200 cursor-pointer group"
          >
            <img
              src={c.logo}
              alt={c.name}
              className="h-10 w-10 rounded-lg object-contain bg-secondary p-1 mb-3"
              onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
            />
            <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{c.name}</h3>
            <span className="inline-block mt-1.5 text-xs rounded-md bg-primary/10 text-primary px-2 py-0.5">{c.type}</span>
            <p className="text-xs text-muted-foreground mt-2">{c.experienceCount} experiences</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyCarousel;
