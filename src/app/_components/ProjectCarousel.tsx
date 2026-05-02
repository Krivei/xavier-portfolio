'use client'

import Link from 'next/link';
import Image from 'next/image';
import { richText, mapImageMedia } from "@/lib/models/model";
import { EffectCoverflow, Pagination, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

interface ProjectCarouselProps {
  projects: richText[]
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const stopPropagation = (e: React.TouchEvent | React.WheelEvent) => {
    e.stopPropagation();
  };
    return <div className=' w-full' onTouchStart={stopPropagation}
      onTouchEnd={stopPropagation}
      onWheel={stopPropagation}>
          <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          mousewheel={true}
          direction={'horizontal'}
          style={{ height: '350px'}}
          coverflowEffect={{
            rotate: 0,
            // Negative stretch pulls the side cards IN towards the center
            stretch: typeof window !== 'undefined' && window.innerWidth < 768 ? -20 : 0,
            depth: 400, // How much the side cards "sink" into the background
            modifier: 1,
            slideShadows: false,
          }}
          watchSlidesProgress={true}
          // 3. Modules
          modules={[EffectCoverflow, Pagination, Mousewheel]}
        >
        {projects.map((project) => {
          const coverImage = project.image?.[0] ? mapImageMedia(project.image[0]) : null;

          return (
            <SwiperSlide 
              key={project.title} 
              className="!w-[80%] !h-full md:!w-[500px] md:!h-[350px]"
            >
              {({ isActive }) => (
                <Link href={`/projects/${project.title}`} className="w-full h-full">
                <div className={`
                  relative w-full h-full rounded-lg overflow-hidden transition-all duration-500
                  ${isActive ? "shadow-[0_20px_50px_rgba(255,255,255,0.1)]" : "opacity-60"}
                `}>
                  {coverImage && (
                    <Image
                      src={coverImage.url}
                      alt={project.title || ""}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className={`
                    absolute bottom-8 left-0 right-0 px-6 transition-all duration-700
                    ${isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
                  `}>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                </Link>
              )}
            </SwiperSlide>
          );
        })}
    </Swiper>
        
    </div>
}