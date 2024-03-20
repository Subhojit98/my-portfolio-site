import Image from "next/image"
import Patterns from "./Patterns"
import MyImage from '@/app/assets/Images&Icons/portfolio image.jpg'
const Hero = () => {
    return (
        <>
            <main className="w-full h-[95vh]">
                {/* Svg pattrens -> */}
                <Patterns />
                {/* Hero Text and backgrounds -> */}

                <div className="min-w-full h-full relative">
                    <div className="flex h-full w-full">
                        {/* Background 1 -> Left */}

                        <div className="w-[65%] bg-background-left h-full flex flex-col justify-center relative">

                            <div className=" flex flex-col gap-6 ml-32">
                                <h1 className="text-6xl text-[#c4f36e] font-bold">Frontend <br /> Developer <span className="text-white">.</span></h1>
                                <p className="text-lg text-white">I like to craft solid and scalable frontend products <br /> with great user experiences.</p>
                            </div>

                            <div className=" flex gap-20 ml-32 absolute bottom-20 text-white">
                                <p className="text-sm w-[25%]">Highly skilled at progressive enhancement, design systems & UI Engineering.</p>

                                <p className="text-sm w-[28%]">Proven experience building successful products for clients across several countries.</p>
                            </div>

                        </div>

                        {/* Floating div with image and designs -> */}
                        <div className="absolute w-[23%] h-[50%] top-[26%] left-[52%]">
                            <div className="w-full z-20 absolute left-10">
                                <Image src={MyImage} alt="Portfolio image" className="w-full object-cover" />
                            </div>
                            <div className="w-full h-full border-[2.5px] top-7 border-white absolute left-[72px]"></div>

                        </div>
                        {/* Box border design -> */}

                        {/* Background 2 -> Right */}
                        <div className="w-[35%] h-full overflow-hidden bg-[#c4f36e]">

                        </div>
                    </div>
                </div>
            </main>



            {/* for testing nedd to change -> */}
            <div className="h-screen"></div>
        </>
    )
}

export default Hero
