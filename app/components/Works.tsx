"use client"

import Svgdesign from "@/components/Svgdesign"
import Svgdesign2 from "@/components/ui/Svgdesign2"
import { motion, useInView } from "framer-motion"
import { useRouter } from "next/navigation"
import { useRef } from "react"
import { Raleway, Rubik } from "next/font/google"

const raleway = Raleway({ weight: "400", subsets: ["latin"] })
const rubik = Rubik({ weight: "400", subsets: ["latin"] })
const Works = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const router = useRouter()
    return (
        <>

            <div className="w-full h-[50vh]  mt-20 relative xl:h-[90vh] ">
                <Svgdesign />
                <motion.div
                    ref={ref}
                    className="flex justify-center items-center h-full backdrop-blur-sm bg-white/5 sm:bg-white sm:backdrop-filter-none sm:w-[75%] m-auto">

                    <section className="w-[80%] h-[80%] sm:w-[75%] text-xs p-5  xl:ml-14  z-50 ">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            transition={isInView ? { type: 'spring', stiffness: 200, damping: 10, duration: 0.4, delay: 0.5 } : {}}
                            animate={isInView && { opacity: 1, y: 0 }}
                        >
                            <h3 className="text-3xl font-bold text-headtext mb-3 xl:text-5xl" style={raleway.style}>I build & <br /> design stuff</h3>
                            <p className="w-[85%] lg:w-[60%] xl:w-[55%] my-7 text-neutral-600 text-base xl:text-xl" style={rubik.style}>Open source
                                projects, web apps
                                and experimentals.</p>
                        </motion.div>

                        <button className="relative inline-flex items-center justify-center p-[2px] py-5 xl:py-6 xl:px-32 px-24 lg:px-28 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border border-blue-700 group xl:text-sm tracking-widest uppercase"
                            onClick={() => router.push("/work")}>
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-600 group-hover:translate-x-0 ease-out">
                                <svg width="40" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" ><path fill="none" stroke="#ffff" strokeWidth="2" strokeMiterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path></svg>
                                <span className="text-white ml-3 font-light">Let&apos;s go</span>

                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-blue-700 transition-all duration-300 transform group-hover:translate-x-full ease font-normal">See my work</span>
                            <span className="relative invisible"></span>
                        </button>
                    </section>



                    <section className="w-[85%] text-xs  xl:ml-14 h-full relative hidden md:block">
                        <Svgdesign2 />
                    </section>
                </motion.div>
            </div>
        </>
    )
}

export default Works
