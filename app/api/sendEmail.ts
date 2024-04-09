"use server"

import { Resend } from "resend"

type email = {
    name: string
    email: string
    message: string
}
const resend = new Resend(process.env.RESEND_KEY)
export const sendEmail = async (senderDetails: email) => {

    const { name, email, message } = senderDetails

    await resend.emails.send({
        from: "✨ Hireing Alert From Portfolio..!! <onboarding@resend.dev>",
        to: "subhajit.chowhan.contact@gmail.com",
        subject: "♨️ New message from your portfolio site..!",
        html: `Hey subhajit, <br> You have a new message from your portfolio site. <br> <br> <b>Name:</b> Sender: ${name} <br> <b>Sender Email:</b> ${email} <br> <b>Message:</b> ${message} <br> <br> <b>Regards, <br> Your Portfolio Site</b>`,
        reply_to: email,
    }).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })

}