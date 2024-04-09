"use client";
import Image from "next/image"
import svgDesign from '@/app/assets/Images&Icons/Mediamodifier-Design-final.svg'
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef } from "react";
import { useInView as useInViewFramer } from "framer-motion"
import { Chakra_Petch, Poppins, Raleway } from "next/font/google"
const popins = Poppins({ weight: "400", subsets: ["latin"] })

const chakra = Chakra_Petch({ weight: "400", subsets: ["latin"] })
const raleway = Raleway({ weight: "400", subsets: ["latin"] })
const BrifDescription = () => {

    const [ref, inView] = useInView()
    const ref2 = useRef(null)
    const isInView = useInViewFramer(ref2, { once: true })

    const control = useAnimation()


    useEffect(() => {
        if (inView) {
            control.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2, ease: 'easeInOut' }
            })
        }

    }, [control, inView])
    return (
        <>

            <div
                className="w-full h-full">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 250 }}
                    animate={control}
                    transition={{ duration: 1 }}

                    className="w-full h-[68vh] xl:h-screen bg-[#f9f9f9] flex flex-col items-center justify-center gap-20 md:gap-10 xl:">

                    <section className="w-[75%] sm:w-[80%] md:w-[75%] xl:w-[83%] md:flex xl:gap-16">
                        <motion.div

                            className="md:w-[60%] lg:w-1/2">
                            <h3 className="text-4xl font-bold mb-5 text-headtext xl:text-5xl" style={chakra.style}>Design</h3>
                            <p className="text-xs text-smalltext xl:text-base xl:w-[86%]" style={popins.style}>I&apos;m probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you&apos;ll find me (~_^). I&apos;m committed to creating fluent user experiences while staying fashionable.</p>
                        </motion.div>


                        <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:block" width="300" height="200" viewBox="0 0 523 214" data-shape="true" aria-hidden="true" id="cs-pattern-right"><path fill="#4831d4" d="M313.651 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 20.388a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM351.587 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM370.555 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM389.522 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM465.394 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM522.298 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM313.651 39.611a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM332.62 39.611a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001.001zM351.587 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM370.555 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM389.522 39.611a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 39.611a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 39.611a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM465.394 39.611a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM484.362 39.611a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM503.33 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM522.298 39.611a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM313.651 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM351.587 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM370.555 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM389.522 58.834a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM408.49 58.834a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM427.458 58.834a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM446.427 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM465.394 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM522.298 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM313.651 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 78.057a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM351.587 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM370.555 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM389.522 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM465.394 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 78.057a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM522.298 78.057a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM313.651 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM351.587 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM370.555 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM389.522 97.28a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM408.49 97.28a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM427.458 97.28a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM446.427 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM465.394 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM522.298 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM313.651 116.504a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM332.62 116.504a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM351.587 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM370.555 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM389.522 116.504a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 116.504a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 116.504a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM465.394 116.504a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM484.362 116.504a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM503.33 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM522.298 116.504a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM313.651 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 135.726a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM351.587 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM370.555 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM389.522 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM465.394 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM522.298 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM313.651 154.95a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM332.62 154.95a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM351.587 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM370.555 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM389.522 154.95a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 154.95a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 154.95a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM465.394 154.95a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM484.362 154.95a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM503.33 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM522.298 154.95a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM313.651 174.173a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .002zM332.62 174.173a1.5 1.5 0 11-3.002-.002 1.5 1.5 0 013.001.002zM351.587 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM370.555 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM389.522 174.173a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 174.173a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 174.173a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM465.394 174.173a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .002zM484.362 174.173a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .002zM503.33 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013.001.002zM522.298 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM313.651 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM351.587 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM370.555 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM389.522 193.395a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM408.49 193.395a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM427.458 193.395a1.5 1.5 0 11-2.999.002 1.5 1.5 0 012.999-.002zM446.427 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM465.394 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM522.298 193.395a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM313.651 212.619a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM332.62 212.619a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM351.587 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM370.555 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM389.522 212.619a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 212.619a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 212.619a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM465.394 212.619a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM484.362 212.619a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM503.33 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM522.298 212.619a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0z"></path><path fill="none" stroke="#4831d4" strokeMiterlimit="50" strokeWidth="2" d="M16.753 9.614a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM44.822 9.614a7.892 7.892 0 11-15.784-.002 7.892 7.892 0 0115.784.002zM72.89 9.614a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.783 0zM100.96 9.614a7.892 7.892 0 11-15.783-.002 7.892 7.892 0 0115.783.002zM129.028 9.614a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0z"></path></svg>
                    </section>

                    <section


                        className="w-[75%] sm:w-[80%] md:w-[75%] md:flex md:gap-7 md:flex-row-reverse xl:gap-52 xl:ml-64">
                        <div className="md:w-[60%] lg:w-1/2">
                            <h3 className="text-4xl font-bold mb-5 text-headtext xl:text-5xl" style={chakra.style}>Engineering</h3>
                            <p className="text-xs text-smalltext xl:text-base xl:w-[86%]" style={popins.style}>I&apos;m armed with a suite of powerful tools, including React for building dynamic user interfaces, animations to enhance user engagement, and Next.js for efficient server-side rendering and routing. However, I&apos;m not reliant on these tools alone—I possess the versatility to operate independently of them, ensuring that I can deliver swift, robust solutions optimized for scale.</p>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:block" width="200" height="200" viewBox="0 0 325 193" data-shape="true" aria-hidden="true" id="cs-pattern-left"><path fill="none" stroke="#4831d4" strokeMiterlimit="50" strokeWidth="2" d="M17.053 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM45.122 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM73.19 9.57a7.891 7.891 0 11-15.781 0 7.891 7.891 0 0115.782 0zM101.26 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM129.329 9.57a7.891 7.891 0 11-15.783 0 7.891 7.891 0 0115.783 0zM238.083 103.963v0l-.561 22.259v0l22.259-.561v0l-.561 22.258v0l22.259-.56v0l-.561 22.258v0l22.259-.56v0l-.559 22.26v0l22.26-.56v0"></path></svg>
                    </section>
                </motion.div>

                <div className="w-full h-full bg-[#043cec] flex justify-center items-center flex-col">
                    <motion.div
                        ref={ref2}
                        style={{
                            transform: isInView ? "translatey(0px)" : "translatey(200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                        className="md:w-[80%] md:flex">
                        <div className="w-[65%] mx-auto sm:w-[80%] xl:w-1/2 h-full md:py-20 flex flex-col items-start sm:gap-5 text-xs xl:text-base text-slate-100 mt-20 gap-3 tracking-wide" style={raleway.style}>
                            <h3 className="text-4xl font-bold text-[#c4f36e] xl:text-5xl" style={popins.style}>Over the <br /> years,</h3>
                            <p>Using Frontend technologies and cutting-edge tools and libraries, I bring a fresh perspective to web development. These empower me to craft responsive, visually appealing and modern web experiences.</p>
                            <p>I Created Modern and user-friendly websites, ensuring accessibility for everyone.</p>

                            <p>Currently, I am seeking an internship to gain practical exposure, contribute to real-world projects, and learn from experienced professionals.</p>

                            <p>My goal is to build accessible and modern websites that generate more profit and value for organizations, as well as for users.</p>

                            <p>I&apos;am enthusiastic about opportunities that allow me to harness fronted engineering skills,as well as new technologies. </p>

                        </div>
                        <div className="w-full flex justify-center items-center sm:w-[80%] md:w-[95%] xl:w-[70%]">
                            <Image src={svgDesign} alt="svg design of a man" className="w-full h-full" />
                        </div>

                    </motion.div>
                </div>

            </div>
        </>
    )
}

export default BrifDescription
