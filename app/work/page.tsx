import Footer from "@/app/components/Footer"
import dynamic from "next/dynamic"

const NavBar = dynamic(() => import("@/app/components/Navbar"))
const Projects = dynamic(() => import("@/app/work/components/Projects"))
const page = () => {
    return (
        <>
            <NavBar />
            <Projects />
            <Footer />
        </>
    )
}

export default page
