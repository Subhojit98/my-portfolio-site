"use client"
import projectsList from "@/app/data/projectsData"
import MobileView from "./MobileView"
import Image from "next/image"
import { motion } from "framer-motion"
const Projects = () => {
    return (
        <div className="w-full h-full mb-32 relative mt-40">

            <div className=" text-center flex flex-col gap-y-4 items-center">
                <h1 className="text-3xl text-center text-gray-700 sm:text-4xl"> <span className="text-neutral-500">/</span>Work <span className="text-neutral-500">.</span></h1>
                <span className="text-sm sm:text-base w-11/12 text-neutral-700">Selected work I&apos;ve taken on in the past. </span>
            </div>


            <main className="mt-20 w-full h-full flex">
                {/* Mobile view -> */}
                <MobileView />

                {/* Desktop view -> */}
                <div className="w-[85%] sm:w-[90%] xl:w-[85%] mx-auto justify-between hidden sm:flex flex-col gap-32">

                    {
                        projectsList.map((project, i) => {
                            const { title, id, image, description } = project
                            return <>
                                <div key={i} className={`flex justify-between ${id % 2 == 0 && "flex-row-reverse"}`}>
                                    <div className=" flex-col  w-[60%]">

                                        <div className="sm:flex w-full">

                                            <div className="flex flex-row-reverse w-full">

                                                <div className=" border-b md:w-full h-32 md:h-36 border-black flex items-center flex-row-reverse justify-between">
                                                    <div className="w-24 md:w-32 border-l h-full flex items-center justify-center border-black">
                                                        <span className="text-lg md:text-xl m-auto">0{id}</span>
                                                    </div>
                                                    <h3 className="text-4xl md:text-5xl w-3/4">{title}</h3>
                                                </div>

                                            </div>

                                        </div>
                                        <p className="text-sm md:text-base leading-relaxed tracking-wider mt-5">{description}</p>
                                    </div>
                                    <motion.div
                                        whileHover={{ scale: [null, 1.3, 1.2] }}
                                        transition={{ duration: 0.3 }}
                                        className="w-52 md:w-60 lg:w-72 xl:w-96 h-[35vh] xl:h-[40vh]  rounded-lg  mt-10 sm:mt-0 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] cursor-pointer">

                                        <Image src={image} alt="project image" className="w-full h-full object-contain rounded-lg" />

                                    </motion.div>

                                </div>
                            </>
                        })
                    }
                </div>

            </main>

        </div>
    )
}

export default Projects
