import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import BrifDescription from "./components/BrifDescription";
import dynamic from "next/dynamic";

const WorksSection = dynamic(() => import("@/app/components/Works"))
const ContantSection = dynamic(() => import("@/app/components/SendMessage"))
const Footer = dynamic(() => import("@/app/components/Footer"))
export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <BrifDescription />
      <WorksSection />
      <ContantSection />
      <Footer />
    </>
  );
}
