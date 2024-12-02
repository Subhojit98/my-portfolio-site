"use client"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Poppins } from "next/font/google"
import { sendEmail } from "../api/sendEmail"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
const popins = Poppins({ weight: "400", subsets: ["latin"] })
type email = {
    name: string
    email: string
    message: string
}
const SendMessage = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [isSubmited, setIsSubmited] = useState(false)

    const messageShema = z.object({
        name: z.string().min(5).max(20),
        email: z.string().email(),
        message: z.string().min(10).max(200)
    })

    const { register, handleSubmit, formState: { errors, isLoading, isSubmitSuccessful }, reset } = useForm(
        {
            resolver: zodResolver(messageShema),
            mode: "onSubmit"
        }
    )

    const onSubmit = (data: any) => {
        sendEmail(data)
        reset()
    }

    useEffect(() => {
        let timer: any;
        if (isSubmitSuccessful) {
            timer = setIsSubmited(true)
            setTimeout(() => {
                setIsSubmited(false)
            }, 4000)
        }
        return () => clearTimeout(timer)


    }, [isSubmitSuccessful])


    return (
        <>

            <div className="w-full h-full my-14 mb-20 flex justify-center" style={popins.style}>
                <div
                    ref={ref}
                    className="w-[85%] sm:w-[75%] lg:w-2/3 xl:w-1/2 px-4 flex flex-col gap-8 sm:gap-10 sm:text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        transition={isInView ? { type: "keyframes", duration: 0.4, delay: 0.5, ease: "easeInOut" } : {}}
                        animate={isInView && { opacity: 1, y: 0 }}
                    >
                        <h2 className="text-4xl font-bold text-headtext sm:text-3xl lg:text-4xl xl:text-5xl">
                            Send me a message!
                            <p className="text-sm text-smalltext font-medium sm:font-normal my-8 sm:my-4 sm:w-3/4 sm:mx-auto lg:text-base xl:text-lg lg:w-1/2">Got a question or proposal, or just want to say hello? Go ahead.</p>
                        </h2>
                    </motion.div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}

                        className="w-full flex flex-col gap-10 xl:mt-10">

                        <div className="w-full h-full flex-col flex gap-14 sm:flex sm:flex-row sm:justify-between ">
                            <div className="relative h-11 sm:w-full">
                                <input placeholder="Enter your name" type="text"
                                    {...register("name")}
                                    className="peer text-smalltext placeholder:text-smalltext xl:text-lg font-light h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                                <label
                                    className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-headtext peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Your Name
                                </label>
                                {errors.name && <span className=" text-red-500 text-xs">{errors.name.message as string}</span>}
                            </div>
                            <div className="relative h-11 sm:w-full">
                                <input placeholder="Enter your email address" type="text"
                                    {...register("email")}
                                    className="peer h-full text-smalltext placeholder:text-smalltext  xl:text-lg w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-light text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                                <label
                                    className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-headtext peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Email Address
                                </label>
                                {errors.email && <span className=" text-red-500 text-xs">{errors.email.message as string}</span>}

                            </div>

                        </div>
                        <div className="flex flex-col items-end gap-6 w-full sm:mt-5">
                            <div className="relative w-full">
                                <textarea
                                    placeholder="Hi, I think we need a Frontend dveloper for products at our Company X. How soon can you hop on to discuss this ?"
                                    {...register("message")}

                                    className="peer text-smalltext placeholder:text-smalltext h-full min-h-[110px] w-full resize-none border-b border-gray-300 focus:border-white bg-transparent pt-4 text-sm f text-blue-gray-700 outline outline-0 transition-all disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50  xl:text-lg font-light"></textarea>
                                <label
                                    className="after:content[' '] text-gray-500 pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-900 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-headtext peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Your Message
                                </label>
                                {errors.message && <span className=" text-red-500 text-xs ">{errors.message.message as string}</span>}
                            </div>
                        </div>
                        <button type="submit" className="relative inline-flex items-center px-5 mt-5 sm:mt-0 lg:px-8 py-4 xl:py-6 lg:py-5 overflow-hidden text-lg font-medium text-indigo-600 border border-indigo-600 hover:text-white group hover:bg-gray-50 w-52 xl:w-72 sm:mx-auto">
                            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:-translate-x-5 ease">
                                <svg width="40" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" ><path fill="none" stroke="#ffff" strokeWidth="2" strokeMiterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path></svg>
                            </span>
                            {isLoading ? <span className="relative text-sm font-light tracking-widest uppercase">Shoot </span>
                                :

                                <div className="flex justify-center w-full items-center gap-4">
                                    <span className="relative text-sm font-light tracking-widest uppercase">Shoot </span>
                                    <svg width="40" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" ><path fill="none" stroke="#4831d4" strokeWidth="2" strokeMiterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path></svg>
                                </div>
                            }


                        </button>
                        {isSubmited && <span className="text-2xl text-green-600 duration-300 ease-linear">Message Resived I will Connect With You Soon.!</span>}

                    </form>
                </div>
            </div>

        </>
    )
}

export default SendMessage
