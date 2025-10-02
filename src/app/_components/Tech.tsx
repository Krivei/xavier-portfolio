import Icon from "../components/TechLogo"
export default function Tech(){
    return <div id="tech" className="w-full sm:w-[80%] min-h-[80vh] bg-[#a6a6a6] pt-[25%] sm:pt-[10%] text-center sm:text-start">
        <h1 className="font-handwriting text-4xl sm:text-7xl text-white font-bold">My Tech Stack</h1>
        <div className="border-1 border-black w-[80%] justify-self-center lg:w-full"></div>
        <div className=" w-full grid lg:grid-cols-3 p-3 text-white">
            <div className=" w-full h-35 flex flex-col text-center p-3 items-center">
                <p className="text-xl font-sans">Frontend Development</p>
                {/* <div className="border-1 border-white w-[80%] grid grid-cols-5"/> */}
                <div className="grid grid-cols-5 py-3">
                    <Icon name= "HTML" url="/assets/html.png"></Icon>
                    <Icon name= "CSS" url="/assets/css.png"></Icon>
                    <Icon name= "ReactJs" url="/assets/react.png"></Icon>
                    <Icon name= "NextJs" url="/assets/next.png"></Icon>
                    <Icon name="Typescript" url="/assets/typescript.png"></Icon>
                </div>
            </div>
            <div className=" w-full h-35 flex flex-col text-center p-3 items-center">
                <p className="text-xl font-sans">Backend & Data Management</p>
                {/* <div className="border-1 border-white w-[80%] grid grid-cols-5"/> */}
                <div className="grid grid-cols-2 py-3">
                    <Icon name= "Laravel" url="/assets/laravel.png"></Icon>
                    <Icon name= "Firebase Firestore" url="/assets/firebase.png"></Icon>
                </div>
            </div>
            <div className=" w-full h-35 flex flex-col text-center p-3 items-center">
                <p className="text-xl font-sans">Design & Developer Tools</p>
                {/* <div className="border-1 border-white w-[80%] grid grid-cols-5"/> */}
                <div className="grid grid-cols-5 py-3">
                    <Icon name= "Figma"     url="/assets/figma.png"></Icon>
                    <Icon name= "Canva"     url="/assets/canva.png"></Icon>
                    <Icon name= "Github"    url="/assets/github.png"></Icon>
                    <Icon name= "Android Studio"     url="/assets/androidstudio.png"></Icon>
                    <Icon name= "Visual Studio Code"    url="/assets/vsc.png"></Icon>
                </div>
            </div>
        </div>
    </div>
}