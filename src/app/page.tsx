"use client";

import { useRef, useState, Suspense } from "react";
import { useSearchParams } from 'next/navigation';
import NavBar from './_components/NavBar';
import LandingPage from './_components/LandingPage';
import Projects from './_components/Project';
import Tech from './_components/Tech';
import {Analytics} from '@vercel/analytics/next';

function HomeContent() {
  const SECTIONS = [
    { id: 'landing', label: 'Home', Component: LandingPage },
    { id: 'projects', label: 'Projects', Component: Projects },
    { id: 'tech', label: 'Skills', Component: Tech },
  ];

  const searchParams = useSearchParams();
  

  const [activeIndex, setActiveIndex] = useState(() => {
    const section = searchParams.get('section');
    if (section === 'projects') return 1;
    if (section === 'tech') return 2;
    return 0; 
  });

  const isAnimating = useRef(false);
  const touchStart = useRef<number | null>(null);

  const changeSection = (index: number) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setActiveIndex(index);
    setTimeout(() => { isAnimating.current = false; }, 1000); 
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 30 && activeIndex < SECTIONS.length - 1) changeSection(activeIndex + 1);
    else if (e.deltaY < -30 && activeIndex > 0) changeSection(activeIndex - 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const touchEnd = e.changedTouches[0].clientY;
    const distance = touchStart.current - touchEnd;
    const threshold = 50; 

    if (distance > threshold) {
      changeSection((activeIndex + 1) % SECTIONS.length);
    } else if (distance < -threshold) {
      changeSection((activeIndex - 1 + SECTIONS.length) % SECTIONS.length);
    }
    touchStart.current = null;
  };

  return (
    <main 
      onWheel={handleWheel} 
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd} 
      className="h-screen w-screen overflow-hidden overscroll-none touch-none bg-black text-white relative"
    >
      <NavBar
        sections={SECTIONS} 
        activeIndex={activeIndex} 
        scrollTo={changeSection} 
      />

      <div className="relative w-full h-full">
        {SECTIONS.map(({ Component, id }, index) => (
          <div
            key={id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <Component />
          </div>
        ))}
      </div>
    </main>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="h-screen w-screen bg-black" />}>
      <HomeContent />
      <Analytics />
    </Suspense>
    
  );
}