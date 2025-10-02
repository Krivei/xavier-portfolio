"use client";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";
import { richText } from "@/lib/models/model";
// import { getAboutMe } from "@/lib/models/model";

export default function AboutMe(){
    // const articles = await getAboutMe();
    const [aboutMe, setAboutMe] = useState<richText>({text: "Loading..."});

    useEffect(() => {
        fetch(`https://stable-melody-e536e34213.strapiapp.com/api/about-me?populate=*`)
        .then(response => response.json())
        .then(data => setAboutMe(data.data))
        .catch(error => console.error("Failed to fetch articles:", error));
    }, []);

    return <div id="aboutme" className="w-full sm:w-[80%] h-dvh bg-[#a6a6a6] pt-[25%] sm:pt-[10%] text-center sm:text-start">
        <h1 className="font-handwriting text-4xl sm:text-7xl text-white font-bold">About Me</h1>
        <div className="border-1 border-black w-[80%] justify-self-center lg:w-full"></div>
        <div className="prose prose-invert text-white text-lg sm:text-2xl md:text-3xl font-sans text-justify py-5 sm:py-10 px-5 sm:px-0 space-y-8">
            <Markdown>
                {aboutMe.text}
            </Markdown>
        </div>
        </div>
}