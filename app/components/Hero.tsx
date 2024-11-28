"use client"
import Image from "next/image"
import Patterns from "./Patterns"
import MyImage from '@/app/assets/Images&Icons/IMG_20241128_174707.webp
import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Lenis from '@studio-freight/lenis'

import { Poppins, Raleway } from "next/font/google"
const popins = Poppins({ weight: "400", subsets: ["latin"] })

const raleway = Raleway({ weight: "400", subsets: ["latin"] })
const Hero = () => {


    const container = useRef(null)

    const { scrollXProgress } = useScroll({
        target: container,
        offset: ['start', 'end start']
    })

    const y = useTransform(scrollXProgress, [0, 1], [0, 0])

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])




    return (
        <>

            <motion.main ref={container}
                style={{ y }}
                className="w-full h-full sm:h-[80vh] lg:h-[85vh] xl:h-[95vh] sm:flex justify-center items-center relative overflow-hidden">

                <div className="w-full h-[68vh] sm:h-full bg-background-left object-cover object-center">

                    <motion.section
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col justify-center items-center w-full h-full gap-y-10">

                        <div className="w-[80%] sm:w-[75%] text-[#c0f164] mt-20" style={raleway.style}>
                            <h1 className="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold ">Frontend <br /> Developer<span className="text-white">.</span></h1>
                            <p className="text-xl sm:text-sm xl:text-lg text-white mt-5 w-[95%] sm:w-[80%] text-start leading-snug sm:leading-tight mb-14 sm:mb-1">I like to craft solid and  scalable frontend products <br className="hidden xl:block" />with great user experiences</p>
                        </div>

                        <div className="w-[80%] sm:w-[75%] flex text-white gap-x-5 sm:gap-x-10 text-[0.70rem] xl:text-sm sm:text-xs leading-snug xl:relative xl:top-20"
                            style={popins.style}>
                            <p className="xl:w-[30%]">Skilled in crafting robust web applications using cutting-edge tools, libraries, and frameworks.</p>
                            <p className="xl:w-[30%]">These empower me to craft responsive, visually appealing and modern web experiences.</p>
                        </div>
                    </motion.section>
                </div>

                <div className="w-full sm:w-[50%] h-[38vh] sm:h-full bg-[#9ced5a] flex justify-center sm:justify-normal sm:items-start items-center  relative">

                    {/* Mobile view -> */}
                    <motion.section
                        initial={{ scale: 0.2, opacity: 0, rotate: 90 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
                        className="flex w-full justify-center items-center h-full sm:hidden">
                        <div className="w-full h-full">
                            <Patterns />
                        </div>
                        <figure className="absolute z-50">
                            <Image src={MyImage} alt="Subhajit's portfolio image" className="w-56 h-56 " placeholder="blur" priority blurDataURL="data:image/jpeg;base64,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" />
                        </figure>
                        <div className="w-56 h-56 border-white border absolute ml-12 mt-10"></div>
                    </motion.section>
                </div>

                {/* Desktop view -> */}
                <motion.section
                    initial={{ scale: 0.2, opacity: 0, rotate: 90 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                    className="flex w-full justify-center items-center h-full absolute left-40 lg:left-64">
                    <div className="w-full h-full sm:w-[45%] sm:h-[45%] xl:h-[60%] absolute">
                        <Patterns />
                    </div>
                    <figure className="absolute z-30">
                        <Image src={MyImage} alt="Subhajit's portfolio image" className="w-56 h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80" placeholder="blur" blurDataURL="data:image/jpeg;base64,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" />
                    </figure>
                    <div className="w-56 h-56 border-white border-[1.5px] absolute ml-12 mt-10 lg:w-72 lg:h-72 xl:w-80 xl:h-80"></div>
                </motion.section>

            </motion.main>
        </>
    )
}

export default Hero
