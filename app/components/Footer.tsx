
"use client"
import { motion, useInView } from "framer-motion"
import { Audiowide } from "next/font/google"
import { useRef } from "react"
const logoText = Audiowide({ weight: '400', subsets: ["latin"] })

const Footer = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <>
            <motion.footer
                initial={{ opacity: 0, y: 250 }}
                transition={isInView ? { ease: "easeIn" } : {}}
                animate={isInView && { opacity: 1, y: 0 }}
                ref={ref}
                className="relative py-20 flex flex-col items-center bg-cyan-900 overflow-hidden xl:h-screen">
                <div className="relative z-[1] container m-auto px-6 md:px-12">
                    <div className="w-full">
                        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">


                            <div className="lg:flex lg:items-end lg:justify-between mb-10 xl:mb-20">
                                <div>
                                    <div className="flex gap-10 justify-center xl:justify-start" style={logoText.style}>
                                        <span className="text-[#c4f36e] font-extrabold leading-8 text-3xl">すbhjiト</span>
                                    </div>
                                    <div>
                                        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-400 lg:text-left ">
                                            If you always do what you always did , you will always get what you always got!.
                                        </p>
                                    </div>
                                </div>


                                <ul
                                    className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
                                >
                                    <li className="hover:scale-110 duration-200 ease-in-out cursor-pointer text-slate-200"> Work</li>
                                    <li className="hover:scale-110 duration-200 ease-in-out cursor-pointer text-slate-200"> Self</li>
                                    <li className="hover:scale-110 duration-200 ease-in-out cursor-pointer text-slate-200"> Résumé</li>
                                    <li className="hover:scale-110 duration-200 ease-in-out cursor-pointer text-slate-200">t.me/Subhojit_98</li>
                                </ul>
                            </div>
                            <br />
                            <hr />

                            <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
                                Copyright &copy; 2024. All rights reserved.
                            </p>
                        </div>

                    </div>
                </div>
                <div aria-hidden="true" className="absolute h-full inset-0 flex items-center">
                    <div aria-hidden="true" className="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"></div>
                </div>
                <div aria-hidden="true" className="absolute inset-0 w-full h-full bg-[#020314] opacity-80"></div>
            </motion.footer>



        </>
    )
}

export default Footer
