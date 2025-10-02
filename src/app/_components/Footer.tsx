import Image from "next/image"
export default function Footer(){
    return (
        <div id="contact" className="w-[85%] min-h-[10vh] border-t-3 border-black pt-3 pb-5 flex flex-col items-center gap-7 lg:flex-row lg:justify-between ">
            <p className="text-sm text-center lg:text-start lg:text-sm text-white">Copyright © 2025, Xavier Julian Theodosius</p>
                <div className="flex flex-row gap-5">
                    <a href="https://www.linkedin.com/in/xavier-theodosius/">
                        <Image src={"/assets/linkedin.png"} width={30} height={30} alt="linkedIn"></Image>
                    </a>
                    <a href="https://github.com/Krivei">
                         <Image src={"/assets/github.png"} width={30} height={30} alt="github"></Image>
                    </a>
                </div>
        </div>
    )
}