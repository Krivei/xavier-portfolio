'use client';

interface NavProps {
  sections: { id: string; label: string }[];
  activeIndex: number;
  scrollTo: (index: number) => void;
}

export default function NavBar({ sections, activeIndex, scrollTo }: NavProps) {
  return (
    <nav className="fixed left-12 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-12 hidden sm:flex">
      <div className="absolute w-[1px] bg-white/20 h-full -z-10" />
      {sections.map((section, index) => {
        const isActive = activeIndex === index;
        
        return (
          <button
            key={section.id}
            onClick={() => scrollTo(index)}
            className="group relative flex items-center justify-center"
            aria-label={`Go to ${section.label}`}
          >
            <div className={`w-4 h-4 rounded-full transition-all duration-500 ${
              isActive ? 'bg-white scale-150 shadow-[0_0_10px_white]' : 'bg-white hover:shadow-[0_0_10px_white]'
            }`} />

            <span className={`absolute left-8 transition-all duration-300 whitespace-nowrap px-2 py-1 rounded text-[10px] uppercase tracking-[0.2em] font-handwriting
              ${isActive 
                ? 'opacity-100 translate-x-0 text-white' 
                : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-gray-400'
              }`}
            >
              {section.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}