"use client"

import Image from "next/image"

interface IconProps {
    name: string;
    url: string;
}

export default function Icon({name, url} : IconProps) {
    return <div className="relative group flex flex-col items-center">
        <Image className="aspect-square" src={url} width={30} height={30} alt={name}></Image>
        <span className="bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            {name}
        </span>
    </div>
}