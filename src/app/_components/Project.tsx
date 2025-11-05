"use client"
// import Card from "../components/Card"
import dynamic from "next/dynamic"
import { richText } from "@/lib/models/model"
import {Button} from "@/components/ui/button"
import { useEffect, useState } from "react"

// lazy-load Card on the client with a loading placeholder
const Card = dynamic(() => import("../components/Card"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 rounded bg-gray-200/60 animate-pulse" />
  ),
})

export default function Projects(){
    const [projects, setProjects] = useState<richText[]>([])
    const [length, setLength] = useState(0)
    const [counter, setCounter] = useState(1)
    const projectlist:richText[]= [
        {
        title:"Grow at PPIJ",
        text:'"Grow at PPI Jerman" is a Website Project by PPI Jerman that I volunteered in. We developed this website in order to aid Indonesian students in Germany navigate their career path. The website shows past and upcoming career development event and a job portal. The team, consisting of 1 project leader, 6 developers including me, 1 UI/UX designer, 2 content managers, and 2 illustrators, are currently active students in Germany. In the development of this website, a sprint meeting happens between the developers and the project leader to discuss potential flaws in the development, problems that we found between each meetings, and how we can further improve.\n\n The website was made with NextJs (A ReactJs framework), TailwindCSS, Strapi CMS, and GitHub as a developer collaboration platform. It is available through the following link: [https://growat.ppijerman.org/](https://growat.ppijerman.org/)  ',
        image:[{
            url:"/projects/GATPPIJ.png",
            name:"GATPPIJ3",
            width:1200,
            height:800
             },{
            url:"/projects/GATPPIJ3.png",
            name:"GATPPIJ3",
            width:1200,
            height:800
             }
            ]
        },
        {
         title:"Desa Segaran",
         text:'"Desa Segaran" was a website project that I volunteered on as a web developer back in 2022. It was a part of the Indonesian government program called "Pengabdian Kepada Masyarakat" (PKM), in which a team of 10 or more students spent a month in a village and contributed to its development in various fields. The website itself was created to help the village with digitalization. It served as a media to promote local business potentials, tourism spots, and traditions that had been kept by the locals for hundreds of years. In this project, 7 students—consisting of 3 designers, 3 developers, and a project manager—collaborated and communicated on a daily basis to ensure we finished before the deadline while producing the highest quality website possible. The design was made in Figma and the website was made with the Laravel framework, Bootstrap, and GitHub as a collaboration platform.\n\nAlthough the website is currently down due to discontinued funding, the code is still available with the following link:[link](https://github.com/victorimannuel/segaran-cantik.git )',
         image:[{
            url:"/projects/desasegaran.jpg",
            name:"DesaSegaran",
            width:1200,
            height:800
         },{
            url:"/projects/desaumkm.png",
            name:"DesaSegaran2",
            width:1200,
            height:800
         },{
            url:"/projects/desapotensi.png",
            name:"DesaSegaran3",
            width:1200,
            height:800
         }]
        },
        {
            title:"BACAYuk",
            text:'"BACAYuk" is an Indonesian language that translates to "Lets read". It is an application idea that we made while learning how to make a profitable business in a course called "Applications and Game Product Design". The goal is to help provide summarized content of books for people who dont have much time to read books, as time management is one of the core issues according to the Head of the National Agency for Language Development and Cultivation at Ministry of Education and Culture, as to why Indonesians dont read books. The application has 2 types of users: readers and the provider. \n\n The readers may access non-premium summarized contents of various books, rate the summarized contents, donate to the provider, and buy the book if they want to. The more they read, they more points are accumulated. To optimize user experience, there is a quick survey for new users. This survey will affect the recommendation section so we can show only the books that may interest the user. These points can be redeemed to remove ads for a limited time or an access to premium contents. Readers are able to buy a monthly subscription to access all premium contents, go ad-free, and get discounts when buying a book. The providers on the other hand, are the users that summarize books. They earn profits from donations made by the readers.\n\n This project is purely a prototype made in Figma, accessible with this [link](https://www.figma.com/proto/aIbcqeZ5XUWZMZgvY1ZCM9/Prototype-BACAYuk---DPAG?node-id=10-22&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2), the business plan is in Indonesian language and is accessible with this [link](https://docs.google.com/document/d/1cRkOqOoz47ZSlKSb6DGtdvNug6wcGZVpHBqxVBzkFjU/edit?usp=sharing)',
            image:[{
                url:"/projects/bacalogo.jpg",
                name:"BACAYuk",
                width:1200,
                height:800,
            },{
                url:"/projects/bacaintro.jpg",
                name:"BACAYuk2",
                width:1200,
                height:800,
            },{
                url:"/projects/bacasurvey.jpg",
                name:"BACAYuk3",
                width:1200,
                height:800,
            }]
        },
        {
            title:"Personal Record",
            text:'"Personal Record" is an android mobile application that I personally made as a product of my thesis research. The app provides a weight tracker, a tutorial menu containing information on weightlifting, bodyweight management, and muscle growth, an exercise planner, and a repetition counter that uses the mobile camera to track the body movements. I developed this application with the MVVM architecture and the waterfall software development lifecycle, starting from the requirement analysis all the way to the user testing. The app was scored 7 out of 10 based on the System Usability Scale. \n\n I made this app with Kotlin, Firebase Firestore, and Google ML Kit landmark tracker. The journal can be accessed [here](https://j-ptiik.ub.ac.id/index.php/j-ptiik/article/view/13791) and the source code can be accessed with this [link](https://github.com/Krivei/Skripsi.git)',
            image:[{
                url:"/projects/PersonalRecord.jpg",
                name:"Personal Record",
                width:1200,
                height:800,
            },{
                url:"/projects/PersonalRecord2.jpg",
                name:"Personal Record 2",
                width:1200,
                height:800,
            }]
        },
        {
            title: "SIDE : Smartphone IDE",
            text:'"SIDE" was an idea that was created back in 2021. As Informatics students, we proposed this idea in an Indonesian universities competition. The idea was to make programming more accessible by creating an IDE (Integrated Development Environment) for smartphones. Users can code, access various programming tutorials, and access discussion forums to ask or answer questions made by other users. The project itself is purely a Figma prototype made to learn how to use Figma while also expressing our vision where programming is easier to access. The prototype can be accessed with this [link](figma.com/proto/AE1zqgLQm1MX0Qam5e4ReT/Untitled?node-id=1-141&p=f&t=IuEji234kmp3ueat-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A141)',
            image:[{
                url:"/projects/Logo.png",
                name:"SIDE",
                width:1200,
                height:800,
            },{
                url:"/projects/forumdiskusi.png",
                name:"SIDE 2",
                width:1200,
                height:800,
            },{
                url:"/projects/Homepage.png",
                name:"SIDE 3",
                width:1200,
                height:800,
            }]
        }
        

    ]

    useEffect(() => {
        setProjects(projectlist.slice(0, counter * 3));
        setLength(projectlist.length);
        }, [counter]);
    function loadMore(){
        setCounter(counter + 1)
    }

    function loadLess(){
        setCounter(1)
        const projectPage = document.getElementById("projects");
        projectPage?.scrollIntoView({behavior: "smooth"});
    }

    return <div id="projects" className="w-full sm:w-[80%] min-h-[70vh] bg-[#a6a6a6] pt-[25%] sm:pt-[10%] text-center sm:text-start">
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