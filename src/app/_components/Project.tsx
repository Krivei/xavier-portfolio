"use client"
import Card from "../components/Card"
import { richText } from "@/lib/models/model"
import {Button} from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function Projects(){
    const [projects, setProjects] = useState<richText[]>([])
    const [length, setLength] = useState(0)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        fetch(`https://stable-melody-e536e34213.strapiapp.com/api/articles?populate=*&sort=publishedAt:desc&pagination[start]=0&pagination[limit]=${counter*3}`)
        .then(response => response.json())
        .then(data => setProjects(data.data))
        .catch(error => console.error("Failed to fetch articles:", error));

        fetch(`https://stable-melody-e536e34213.strapiapp.com/api/articles?populate=*&sort=publishedAt:desc`)
        .then(response => response.json())
        .then(data => setLength(data.data.length))
        .catch(error => console.error("Failed to fetch articles:", error));
    },[counter])
    
    function loadMore(){
        setCounter(counter + 1)
    }

    function loadLess(){
        setCounter(1)
        const projectPage = document.getElementById("projects");
        projectPage?.scrollIntoView({behavior: "smooth"});
    }

    return <div id="projects" className="w-full sm:w-[80%] min-h-dvh bg-[#a6a6a6] pt-[25%] sm:pt-[10%] text-center sm:text-start">
        <h1 className="font-handwriting text-4xl sm:text-7xl text-white font-bold">Projects</h1>
        <div className="border-1 border-black w-[80%] justify-self-center lg:w-full"></div>
        <div className="w-full flex lg:justify-between p-10 flex-col lg:grid lg:grid-cols-3 gap-10 items-center">
            {projects.map((content:richText, index:number) => (
                <Card key={index} Content={content}/>
            ))}
        </div>
        <div className="w-full flex justify-center gap-2">
            {(counter*3<length) && <Button className="w-35 p-2 bg-neutral-600 shadow-2xl transition duration-300" onClick={loadMore}>View more</Button>}
            {counter > 1 && <Button className="w-35 p-2 bg-neutral-600 shadow-2xl" onClick={loadLess}>View less</Button>}
        </div>
    </div>
}