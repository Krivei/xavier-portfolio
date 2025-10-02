"use client"
import { Sheet, SheetTrigger, SheetTitle, SheetContent } from "@/components/ui/sheet"
import { useState } from "react"
import { Menu } from "lucide-react"

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    return (
        <div className="fixed flex bg-[#bdbdbd] w-[105%] h-[10vh] shadow-lg sm:justify-center justify-end items-center gap-3 text-lg z-20">
            <div className="hidden sm:flex flex-row text-lg">
                <a href="#home" className="hover:text-white transition duration-400 px-5">Home</a>
                {/* <p>|</p> */}
                <a href="#aboutme" className="hover:text-white transition duration-400 px-5">About Me</a>
                {/* <p>|</p> */}
                <a href="#projects" className="hover:text-white transition duration-400 px-5">Projects</a>
                {/* <p>|</p> */}
                <a href="#tech" className="hover:text-white transition duration-400 px-5">Tech</a>
                {/* <p>|</p> */}
                <a href="#contact" className="hover:text-white transition duration-400 px-5">Contact</a>
            </div>
            <div className="p-5 sm:hidden">
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild className="h-10 w-10 p-1 shadow-2xl rounded-md border-2 border-gray-600 shadow-black"><Menu></Menu></SheetTrigger>
                    <SheetTitle className="hidden">Navigation Bar</SheetTitle>
                    <SheetContent side="right" className="bg-[#bdbdbd] font-semibold border-[#a6a6a6] pt-10 pl-5 flex flex-col gap-5 text-lg">
                        <a href="#home" onClick={handleClose} className="">Home</a>
                        <a href="#aboutme" onClick={handleClose}>About Me</a>
                        <a href="#projects"onClick={handleClose}>Projects</a>
                        <a href="#tech"onClick={handleClose}>Tech</a>
                        <a href="#contact" onClick={handleClose}>Contact</a>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}