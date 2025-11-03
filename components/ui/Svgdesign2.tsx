"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import project from '@/app/assets/Images&Icons/project article.gif'
import project2 from '@/app/assets/Images&Icons/project shortyfy.gif'
import project3 from '@/app/assets/Images&Icons/project imart.gif'
import project4 from '@/app/assets/Images&Icons/project amea.gif'
import { AnimatePresence, motion } from 'framer-motion'
const images = [project, project2, project3, project4];

const Svgdesign2 = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute w-full h-full flex justify-end right-7">
            <div className="relative w-full h-[75%] overflow-hidden shadow-[5px_5px_rgba(4,_60,_236,_0.4),_10px_10px_rgba(4,_60,_236,_0.3),_15px_15px_rgba(4,_60,_236,_0.2),_20px_20px_rgba(4,_60,_236,_0.1),_25px_25px_rgba(4,_60,_236,_0.05)]">

                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={images[index]}
                            alt={`Design Image ${index + 1}`}
                            className="object-cover w-full h-full blur-md"
                        />
                    </motion.div>
                </AnimatePresence>

            </div>
        </div>
    )
}

export default Svgdesign2
