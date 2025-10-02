import { richText, mapImageMedia } from "@/lib/models/model"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Markdown from "react-markdown"

export default function Card({Content} : {Content : richText}){
    const imageUrl = Content.image ? mapImageMedia(Content.image[0]).url : "";
    return <Dialog>
            <DialogTrigger className="w-full flex justify-center">
                <div className="hover:scale-110 transition-transform duration-300 aspect-square w-65 h-80 bg-white shadow-2xl p-3 flex flex-col items-center justify-center gap-2 ">
                <div className="w-full h-8/10 bg-cover bg-center" style={{backgroundImage: `url(${imageUrl})`}}>
                </div>
                <p className="text center font-handwriting text-xl">{Content.title}</p>
            </div>
            </DialogTrigger>
            <DialogContent className="h-5/6 sm:w-3/4 bg-white border-0">
                <DialogTitle className="text-center text-3xl font-handwriting">{Content.title}</DialogTitle>
                <div className="min-h-full w-full overflow-y-auto text-justify p-1 lg:flex lg:flex-row">
                    <div className="lg:w-1/2 p-1 overflow-x-hidden scrollbar-hidden font-sans">
                        <Markdown
                            components={{
                                a: ({ node, ...props }) => (
                                <a {...props} className="underline text-blue-700 hover:text-blue-400 transition duration-300 scrollbar-hide" />
                                ),
                            }}
                            >
                            {Content.text}
                        </Markdown>
                    </div>
                    <div className="lg:w-1/2 lg:h-full flex items-center justify-center p-0">
                            <div className="w-4/5 h-full">
                                <Carousel className="h-full" plugins={[Autoplay({ delay: 3000 })]} // 3 seconds per slide
                                            opts={{ loop: true }}>
                                <CarouselContent className="h-full lg:p-4">
                                    {Content.image && Content.image.map((img, index)=>(
                                        <CarouselItem key={index} className="w-full aspect-square m-1" style={{backgroundImage: `url(${mapImageMedia(img).url})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                                            {/* <Image src={mapImageMedia(img).url} alt={"Image"} width={mapImageMedia(img).width} height={mapImageMedia(img).height} className="object-contain h-full w-full"/> */}
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                {Content.image && Content.image.length > 1 && <CarouselPrevious className="md:flex hidden  shadow-2xl"/>}
                                {Content.image && Content.image.length > 1 && <CarouselNext className="md:flex hidden shadow-2xl"/>}
                                </Carousel>
                            </div>
                    </div>
                </div>
            </DialogContent>
            </Dialog>
}