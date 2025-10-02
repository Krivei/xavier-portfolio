import Image from "next/image";
export default function LandingPage() {
    return (
        <div id="home" className="w-full h-dvh bg-[url(/assets/landing.png)] flex flex-row justify-center items-center bg-center bg-cover p-3">
            <div>
            <p className="hidden sm:block text-4xl font-bold lg:-ml-14 text-shadow-lg">Hi! my name is</p>
            <p className="sm:hidden text-xl font-bold lg:-ml-14 text-white text-shadow-lg">Hi! I'm</p>
            <p className="text-white text-6xl font-bold text-shadow-lg">Xavier Julian Theodosius</p>
            <p className="sm:text-right text-white text-md lg:text-xl text-shadow-lg">UI/UX Designer | Frontend Developer</p>
            </div>
        </div>
    )
}