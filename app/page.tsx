import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import BrifDescription from "./components/BrifDescription";
import Works from "./components/Works";
import SendMessage from "./components/SendMessage";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <BrifDescription />
      <Works />
      <SendMessage />
      <Footer />
    </>
  );
}
