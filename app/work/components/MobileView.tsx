import Image from "next/image"
import projectsList from "@/app/data/projectsData"
const MobileView = () => {
    return (
        <>
            <div className="w-full sm:hidden ">
                <div className=" h-full flex flex-col gap-10 w-[80%] m-auto mt-10">

                    {
                        projectsList.map((project, i) => {
                            const { id, description, image, title } = project
                            return <>
                                <div key={i} className="sm:flex w-full">
                                    <span className="mb-5 text-lg">0{id}</span>
                                    <h3 className="mb-5 text-4xl">{title}</h3>
                                    <p className="text-sm leading-relaxed tracking-wider">{description}</p>

                                </div>

                                <div className="w-52 h-[30vh] rounded-lg border mt-10 sm:mt-0">
                                    <Image src={image} alt="project image" className="w-full h-full object-cover rounded-lg" />
                                </div>
                            </>
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default MobileView
