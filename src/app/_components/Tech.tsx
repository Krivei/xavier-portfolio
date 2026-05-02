import { Icon } from '@iconify/react';

export default function Tech(){
    return <div id="tech" className="w-screen h-screen bg-black px-3 flex flex-col items-center">
        <div className="w-full h-[8%] flex items-center justify-center lg:mt-5">
            <h1 className="font-handwriting lg:text-5xl text-3xl">Tech Stacks</h1>
        </div>
            <div className="w-full lg:w-[80%] lg:h-[90%] flex flex-col gap-1 border-white">
                <div className="w-full flex flex-col lg:h-[70%] lg:grid lg:grid-cols-2 gap-1 lg:px-10 lg:py-5">
                <div id="frontend" className="border-solid border-2 border-white p-1 lg:p-3 rounded-xl flex flex-col gap-1">
                    <p className="font-handwriting text-center">Frontend Development</p>
                    <div className='grid grid-cols-3 h-full'>
                        <div  className='flex flex-col justify-center items-center'>
                            <Icon className='text-white' icon="flowbite:html-solid" width="35" height="35"></Icon>
                            <p className='font-handwriting text-center'>HTML</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <Icon className='text-white' icon="flowbite:css-solid" width="35" height="35"></Icon>
                            <p className='font-handwriting text-center'>CSS</p>
                        </div>
                        <div  className='flex flex-col justify-center items-center'>
                            <Icon className='text-white' icon="mdi:react" width="35" height="35"></Icon>
                            <p className='font-handwriting text-center'>React.Js</p>
                        </div>
                        <div  className='flex flex-col justify-center items-center'>
                            <Icon className='text-white' icon="mdi:vuejs" width="35" height="35"></Icon>
                            <p className='font-handwriting text-center'>Vue.Js</p>
                        </div>
                        <div  className='flex flex-col justify-center items-center'>
                            <Icon className='text-white' icon="ri:nextjs-fill" width="35" height="35"></Icon>
                            <p className='font-handwriting text-center'>Next.Js</p>
                        </div>
                        <div  className='flex flex-col justify-center items-center'>
                            <Icon className='text-white' icon="simple-icons:uikit" width="35" height="35"></Icon>
                            <p className='font-handwriting text-center'>UIKit</p>
                        </div>
                        <div  className='flex flex-col justify-center items-center'>
                            <Icon className='text-white' icon="akar-icons:typescript-fill" width="35" height="35"></Icon>
                            <p className='font-handwriting text-center'>Typescript</p>
                        </div>
                        <div  className='flex flex-col justify-center items-center'>
                            <Icon className='text-white' icon="akar-icons:javascript-fill" width="35" height="35"></Icon>
                            <p className='font-handwriting text-center'>Javascript</p>
                        </div>
                        <div  className='flex flex-col justify-center items-center'>
                            <Icon className='text-white' icon="teenyicons:tailwind-solid" width="35" height="35"></Icon>
                            <p className='font-handwriting text-center'>TailwindCSS</p>
                        </div>
                    </div>
                </div>
                
                <div id="backend" className="border-solid border-2 border-white p-1 lg:p-3 rounded-xl flex flex-col gap-1">
                    <p className="font-handwriting text-center">Backend and Data Management</p>
                    <div className="w-full grid grid-cols-3 lg:h-full">
                        <div  className='flex flex-col justify-center items-center'>
                            <Icon className='text-white' icon="simple-icons:strapi" width="35" height="35"></Icon>
                            <p className='font-handwriting text-center'>Strapi</p>
                        </div>
                        <div  className='flex flex-col justify-center items-center'>
                            <Icon className='text-white' icon="lineicons:laravel" width="35" height="35"></Icon>
                            <p className='font-handwriting text-center'>Laravel</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <Icon className='text-white' icon="streamline-logos:firebase-logo-solid" width="35" height="35"></Icon>
                            <p className='font-handwriting'>Firebase</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <Icon className='text-white' icon="material-symbols:sql" width="35" height="35"></Icon>
                            <p className='font-handwriting'>SQL</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <Icon className='text-white' icon="devicon-plain:php" width="35" height="35"></Icon>
                            <p className='font-handwriting'>PHP</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <Icon className='text-white' icon="bxl:c-sharp" width="35" height="35"></Icon>
                            <p className='font-handwriting'>C#</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <Icon className='text-white' icon="codicon:python" width="35" height="35"></Icon>
                            <p className='font-handwriting'>Python</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <Icon className='text-white' icon="simple-icons:kotlin" width="35" height="30"></Icon>
                            <p className='font-handwriting'>Kotlin</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <Icon className='text-white' icon="ri:java-fill" width="35" height="35"></Icon>
                            <p className='font-handwriting'>Java</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full gap-1 flex flex-col lg:px-10">
                <div id="tools" className="w-full border-solid border-2 border-white lg:p-3 p-1 rounded-xl">
                    <p className="font-handwriting text-center">Design and Developer Tools</p>
                    <div className="w-full grid grid-cols-3 lg:grid-cols-6 p-2">
                        <div className='flex flex-col justify-center items-center'>
                            <Icon className='text-white' icon="mdi:github" width="36" height="36"></Icon>
                            <p className='font-handwriting text-center'>GitHub</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <Icon className='text-white' icon="cib:figma" width="35" height="34"></Icon>
                            <p className='font-handwriting text-center'>Figma</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <Icon className='text-white' icon="cib:canva" width="35" height="35"></Icon>
                            <p className='font-handwriting text-center'>Canva</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <Icon className='text-white' icon="cib:visual-studio-code" width="35" height="35"></Icon>
                            <p className='font-handwriting text-center'>VSC</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <Icon className='text-white' icon="simple-icons:androidstudio" width="35" height="35"></Icon>
                            <p className='font-handwriting text-center'>Android Studio</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <Icon className='text-white' icon="bi:unity" width="35" height="35"></Icon>
                            <p className='font-handwriting text-center'>Unity</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}