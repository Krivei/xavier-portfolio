"use client"
import {useRouter , usePathname, useParams} from 'next/navigation'
import { use } from "react"
import Image from 'next/image';
import { richText, mapImageMedia } from "@/lib/models/model";
import { EffectCoverflow, Pagination, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Markdown from 'react-markdown';
import Link from 'next/link';

interface ProjectProps {
      project: richText
    }

const projectlist:richText[]= [
        {
        title:"GATE x MKP GmbH",
        text:'A data pipeline website made by a team of 6 interdisciplinary students collaborating with MKP GmbH. The website was made by utilizing with Vue.Js, VueFlow, UIKit, Docker, and SCRUM agile development lifecycle. The source code can be accessed through the following [link](https://github.com/MarxKrontalPartner/gate-weimar-group-1) ',
        image:[{
            url:"/projects/gate1.jpeg",
            name:"GATE",
            width:1200,
            height:800
             },{
            url:"/projects/gate2.jpeg",
            name:"GATE2",
            width:1200,
            height:800
             }
            ]
        },
        {
        title:"Grow at PPIJ",
        text:'A career development website that I developed while volunteering at The Indonesian Students Association in Germany, featuring a job portal and information regarding various career development events happening in Germany. The website was made by utilizing Next.Js, React.Js, Strapi CMS, TailwindCSS, Typescript, and an agile development lifecycle. The repository is accessible through the following [link](https://github.com/ppijerman/growat.ppij)  ',
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
         text:'A website me and my friends made voluntarily for the government to show various information of their village, featured with a content management system. The project was made with Laravel, Bootstrap, HTML, CSS, and PHP. The source code is accessible through the following [link](https://github.com/victorimannuel/segaran-cantik.git )',
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
            text:'A prototype of an online book reading platform with a personalized recommendation system. The prototype was made in Figma and is accessible with this [link](https://www.figma.com/proto/aIbcqeZ5XUWZMZgvY1ZCM9/Prototype-BACAYuk---DPAG?node-id=10-22&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2), the business plan is in Indonesian language and is accessible with this [link](https://docs.google.com/document/d/1cRkOqOoz47ZSlKSb6DGtdvNug6wcGZVpHBqxVBzkFjU/edit?usp=sharing).',
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
            text:'An android mobile application made to assist users in their weight management journey, featured with a weight tracker, exercise routine builder, and an exercise repetition counter made by tracking joint movements with the camera. The app was made with Kotlin, Firebase Firestore (NoSQL database), and Google ML Kit. The journal can be accessed [here](https://j-ptiik.ub.ac.id/index.php/j-ptiik/article/view/13791) and the source code can be accessed with this [link](https://github.com/Krivei/Skripsi.git)',
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
            text:'A Figma prototype of a smartphone IDE, made with the idea of making programming more accessible. The prototype can be accessed with this [link](figma.com/proto/AE1zqgLQm1MX0Qam5e4ReT/Untitled?node-id=1-141&p=f&t=IuEji234kmp3ueat-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A141)',
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

export default function ProjectPage() {
    // useParams returns string | string[] | undefined
    const params = useParams();
    const projectParam = params.slugs;
    const rawName = Array.isArray(projectParam) ? projectParam[0] : projectParam;
    const name = rawName ? decodeURIComponent(rawName) : "Unknown Project";
    const projectContent = projectlist.find(project => project.title === name);
    const imageUrl = projectContent?.image ? mapImageMedia(projectContent.image[0]).url : "";

    return <div className="w-screen overflow-hidden h-screen flex flex-col items-center bg-black">
        <div className="h-[8%] w-full flex items-center justify-center mt-5"><h1 className="text-3xl lg:text-5xl font-handwriting text-white">{projectContent?.title}</h1></div>
        <div className=" w-full lg:w-[90%] h-fit lg:h-[80%] lg:grid lg:grid-cols-2">
            <div id="gambar" className=" h-[50vh] lg:h-full overflow-hidden p-5">
                <div className='w-full h-full flex items-center justify-center'>
                    <div className="w-8/10 h-8/10 bg-cover bg-center rounded-2xl" style={{backgroundImage: `url(${imageUrl})`}}></div>
                </div>
            </div>
            <div id="artikel" className=" lg:h-full px-5 lg:pt-17 font-handwriting text-justify lg:text-lg text-white grid grid-rows-2">
                <Markdown
                    components={{
                    a: ({ node, ...props }) => (
                    <a {...props} className="underline text-blue-700 hover:text-blue-400 transition duration-300 scrollbar-hide" />
                     ),
                    }}
                    >
                   {projectContent?.text}
               </Markdown>
               <div className='flex justify-end lg:items-end lg:mb-15 mt-3'>
                <Link href="/?section=projects" className="text-2xl font-handwriting hover:font-bold hover:text-3xl">&lt;&lt; back</Link>
               </div>
            </div>
        </div>
    </div>
}