"use client"
import { Audiowide } from "next/font/google"
import { useEffect, useState } from "react"
const logoText = Audiowide({ weight: '400', subsets: ["latin"] })
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

const NavBar = () => {

    const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false)
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [scrollPercentage, setScrollPercentage] = useState<number>(0)

    const handleMenu = () => {
        setIsMenuClicked(!isMenuClicked)
        setIsMenuOpen(true)
        console.log("clicked")
    }


    useEffect(() => {
        const calculateScrollPercentage = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.clientHeight;

            let scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
            scrollPercent = Math.round(scrollPercent);

            setScrollPercentage(scrollPercent + (scrollPercent * 2));
        }

        window.addEventListener("scroll", calculateScrollPercentage);

        return () => {
            window.removeEventListener("scroll", calculateScrollPercentage);
        }

    }, [scrollPercentage])

    return (
        <>
            <nav className="w-full absolute top-10 xl:top-14 z-40">
                <ul className="flex justify-between mx-10 md:mx-24 items-center">
                    <li style={logoText.style}>
                        <div className="flex gap-10 justify-center">

                            <svg width="40" height="40" viewBox="0 0 24 24" fill={scrollPercentage > 90 ? "#ffffff" : "none"} xmlns="http://www.w3.org/2000/svg"
                                style={{ rotate: `${scrollPercentage}deg` }}

                                className="fixed top-10 xl:top-14 left-6 duration-300 ease-linear hidden md:block">
                                <path d="M12.92 2.25997L19.43 5.76997C20.19 6.17997 20.19 7.34997 19.43 7.75997L12.92 11.27C12.34 11.58 11.66 11.58 11.08 11.27L4.57 7.75997C3.81 7.34997 3.81 6.17997 4.57 5.76997L11.08 2.25997C11.66 1.94997 12.34 1.94997 12.92 2.25997Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3.61 10.13L9.66 13.16C10.41 13.54 10.89 14.31 10.89 15.15V20.8701C10.89 21.7001 10.02 22.2301 9.28 21.8601L3.23 18.83C2.48 18.45 2 17.68 2 16.84V11.12C2 10.29 2.87 9.76005 3.61 10.13Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20.39 10.13L14.34 13.16C13.59 13.54 13.11 14.31 13.11 15.15V20.8701C13.11 21.7001 13.98 22.2301 14.72 21.8601L20.77 18.83C21.52 18.45 22 17.68 22 16.84V11.12C22 10.29 21.13 9.76005 20.39 10.13Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-[#c4f36e] font-extrabold leading-8 text-[1.65rem] xl:text-3xl">すbhjiト</span>

                        </div>
                    </li>
                    <li>
                        <div
                            className="flex relative items-center justify-center" onClick={handleMenu}>
                            <div className="gap-y-3 lg:flex hidden flex-col items-end z-50 cursor-pointer group" >

                                <span className={`block h-[2px] w-10 origin-center  transition-transform bg-indigo-700 ${isMenuClicked && " translate-y-[8px] rotate-[46deg] w-10"}`}></span>
                                <span className={`block h-[2px] w-8 origin-center bg-orange-500 transition-transform ${isMenuClicked && "w-10 -translate-y-1 -rotate-45"}`}></span>
                            </div>
                        </div>
                        {/* desktop nav menu ->  */}
                        <div className="hidden lg:block z-50" >
                            <div className={`bg-white absolute -top-2 right-14  w-full lg:w-[23vw] h-full lg:h-[73vh] ${isMenuClicked ? "scale-up-tr" : isMenuOpen ? " scale-up-bl" : "hidden"} items-center justify-center flex shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`}>
                                <div className={`flex flex-col w-[70%] h-[70%] ${isMenuClicked && "scale-up-ver-bottom"}`}>
                                    <span className="uppercase text-[#FF8400] font-semibold opacity-60 tracking-widest">explore &nbsp; me</span>

                                    <ul className="flex flex-col gap-y-3 text-indigo-600 mt-7">
                                        <li className="hover:scale-110 duration-200 ease-in-out cursor-pointer hover:ml-4">My Work</li>
                                        <hr />
                                        <li className="hover:scale-110 duration-200 ease-in-out cursor-pointer hover:ml-4">My Self</li>
                                        <hr />
                                        <li className="hover:scale-110 duration-200 ease-in-out cursor-pointer hover:ml-4">My Résumé</li>
                                        <hr />
                                    </ul>
                                    <span className="uppercase text-[#FF8400] font-semibold opacity-60 mt-10 tracking-widest">Bid me hello</span>


                                    <ul className="flex flex-col gap-y-4 text-indigo-600 mt-7">
                                        <li className="hover:scale-110 duration-200 ease-in-out cursor-pointer hover:ml-4">hello@subhajit.dev</li>
                                        <li className="hover:scale-110 duration-200 ease-in-out cursor-pointer hover:ml-4">t.me/Subhojit_98</li>
                                    </ul>

                                    <ul className="flex gap-10 w-full mt-10 ml-0.5">
                                        {/* Linkedin icon -> */}
                                        <a href="https://www.linkedin.com/in/chowhansubhajit" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" className="cursor-pointer hover:opacity-80 duration-200 ease-out" /></svg>
                                        </a>
                                        {/* Github icon -> */}

                                        <a href="https://github.com/Subhojit98" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" className="cursor-pointer hover:opacity-80 duration-200 ease-out" /></svg>
                                        </a>
                                        {/* X icon -> */}

                                        <a href="https://twitter.com/ChowhanSubhojit" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="cursor-pointer hover:opacity-80 duration-200 ease-out" fill="" viewBox="0 0 512 512" id="twitter"><g clipPath="url(#clip0_84_15698)"><rect width="512" height="512" fill="#fff" rx="60"></rect><path fill="#000" d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"></path></g><defs><clipPath id="clip0_84_15698"><rect width="512" height="512" fill="#fff"></rect></clipPath></defs></svg>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Mobile navbar-> */}
                        <div className="lg:hidden">
                            <Sheet>
                                <SheetTrigger className="gap-y-3 flex flex-col items-end z-50 cursor-pointer group ">
                                    <div
                                        className="group flex cursor-pointer items-center justify-center">

                                        <div className="space-y-2">
                                            <span className="block  h-[2px] w-8 origin-center bg-white transition-transform ease-in-out group-hover:translate-y-1 group-hover:rotate-45"></span>
                                            <span className="block h-[2px] w-6 origin-center bg-orange-500 transition-transform ease-in-out group-hover:w-8 group-hover:-translate-y-1.5 group-hover:-rotate-45 ml-2 group-hover:ml-0"></span>
                                        </div>
                                    </div>

                                </SheetTrigger>

                                <SheetContent className="w-full flex items-center justify-center lg:hidden">
                                    <div className="flex flex-col w-[70%] h-[70%] scale-up-ver-bottom">
                                        <span className="uppercase text-[#FF8400] font-semibold opacity-60 tracking-widest">explore &nbsp; me</span>

                                        <ul className="flex flex-col gap-y-3 text-indigo-600 mt-7">
                                            <li className="hover:scale-110 duration-200 ease-in-out cursor-pointer hover:ml-4">My Work</li>
                                            <hr />
                                            <li className="hover:scale-110 duration-200 ease-in-out cursor-pointer hover:ml-4">My Self</li>
                                            <hr />
                                            <li className="hover:scale-110 duration-200 ease-in-out cursor-pointer hover:ml-4">My Résumé</li>
                                            <hr />
                                        </ul>
                                        <span className="uppercase text-[#FF8400] font-semibold opacity-60 mt-10 tracking-widest">Bid me hello</span>


                                        <ul className="flex flex-col gap-y-4 text-indigo-600 mt-7">
                                            <a target="_blank" href="" className="hover:scale-110 duration-200 ease-in-out cursor-pointer hover:ml-4">hello@subhajit.dev</a>
                                            <hr />
                                            <a target="_blank" href="https://t.me/Subhojit_98" className="hover:scale-110 duration-200 ease-in-out cursor-pointer hover:ml-4">t.me/Subhojit_98</a>
                                            <hr />
                                        </ul>

                                        <ul className="flex gap-10 w-full mt-10 ml-0.5">
                                            {/* Linkedin icon -> */}
                                            <a href="in/chowhansubhajit" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" className="cursor-pointer hover:opacity-80 duration-200 ease-out" /></svg>
                                            </a>
                                            {/* Github icon -> */}

                                            <a href="https://github.com/Subhojit98" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" className="cursor-pointer hover:opacity-80 duration-200 ease-out" /></svg>
                                            </a>
                                            {/* X icon -> */}

                                            <a href="https://twitter.com/ChowhanSubhojit" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="cursor-pointer hover:opacity-80 duration-200 ease-out" fill="" viewBox="0 0 512 512" id="twitter"><g clipPath="url(#clip0_84_15698)"><rect width="512" height="512" fill="#fff" rx="60"></rect><path fill="#000" d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"></path></g><defs><clipPath id="clip0_84_15698"><rect width="512" height="512" fill="#fff"></rect></clipPath></defs></svg>
                                            </a>
                                        </ul>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>


                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar


