import Image from "next/image"
import projectsList from "@/app/data/projectsData"
import { Raleway, Chakra_Petch } from "next/font/google"

const chakra = Chakra_Petch({ weight: "400", subsets: ["latin"] })
const raleway = Raleway({ weight: "400", subsets: ["latin"] })
const MobileView = () => {
    return (
        <>
            <div className="w-full sm:hidden ">
                <div className=" h-full flex flex-col gap-10 w-[80%] m-auto mt-10">

                    {
                        projectsList.map((project, i) => {
                            const { id, description, image, title, url } = project
                            return <div key={i}>
                                <div className="sm:flex w-full">
                                    <span className="mb-5 text-lg">0{id}</span>
                                    <h3 className={`mb-5 text-4xl ${i % 2 == 0 ? "text-indigo-700" : "text-orange-500"}`} style={raleway.style}>{title}</h3>
                                    <p className="text-sm leading-relaxed tracking-wider" style={chakra.style}>{description}</p>

                                </div>

                                <div className="w-52 h-[30vh] rounded-lg border mt-10 sm:mt-0">
                                    <a href={url} >
                                        <Image src={image} alt="project image" className="w-full h-full object-cover rounded-lg" />
                                    </a>
                                </div>
                            </div>
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default MobileView
