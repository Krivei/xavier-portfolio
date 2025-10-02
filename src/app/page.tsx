"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import NavBar from './_components/NavBar';
import LandingPage from './_components/LandingPage';
import AboutMe from './_components/AboutMe';
import Projects from './_components/Project';
import Tech from './_components/Tech';
import Footer from './_components/Footer';

export default function HomePage() {
  const landingRef = useRef<HTMLDivElement>(null);
  const [showUp, setShowUp] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setShowUp(!entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (landingRef.current) observer.observe(landingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center overflow-hidden bg-[#a6a6a6]">
      <NavBar />
      <div ref={landingRef}>
        <LandingPage />
      </div>
      {
        <a href="#home"className={`fixed bottom-5 right-5 transition-all duration-300 ease-in-out hover:scale-110
    ${showUp ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
          <Image src="/assets/up.png" height={40} width={40} alt="Up" />
        </a>
      }
      <AboutMe />
      <Projects />
      <Tech />
      <Footer />
    </main>
  );
}