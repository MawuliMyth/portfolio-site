"use client"
import { useSectionInView } from '@/lib/hooks';
import React from 'react';
import SectionHeading from './SectionHeading';
import { FaPaperPlane } from 'react-icons/fa';
import { useScroll, useTransform, motion } from 'framer-motion';
import { handleForm } from '@/actions/sendMail';
// import {useForm}
import { info } from '@/lib/data'
import { useFormStatus } from 'react-dom';
import toast, { useToaster } from 'react-hot-toast';

const inputStyle = `px-4 py-4 w-full border border-black/10 bg-white rounded-lg outline-none `
const { email } = info;



const FormInputs = () => {

	const { pending } = useFormStatus()
	const toast = useToaster()
	return (
		<>
			<input required maxLength={500} type="email" className={`${inputStyle} ${pending && "animate-pulse"}`} name="email" placeholder='Your email' id="" disabled={pending} />
			<textarea required name="message" placeholder='Your message' id='message' className={`${inputStyle} ${pending && "animate-pulse"} h-[12rem]`} disabled={pending}></textarea>
			<button
				type='submit'
				className=' self-end btn-pri rounded-full py-3 px-7 flex-center gap-2 outline-none focus:scale-110 hover:scale-110 active:scale-95 transition group overflow-clip disabled:bg-opacity-70'
				disabled={pending}
			>
				{!pending ? "Submit" : "Sending"}
				<FaPaperPlane
					className={`opacity-70 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 transition ${pending && "animate-bounce "}`}
				/>
			</button>
		</>
	)
}

const Contact = () => {
	const ref = useSectionInView('Contact')

	const sendMail = async (formData: FormData) => {
		const result = await handleForm(formData)
		if (!result.success)
			toast.error(result.message)
		else
			toast.success(result.message)
	}

	return (
		<motion.section
			id='contact' ref={ref}
			className='flex-center flex-col text-center mt-36 px-4 w-full max-w-[36rem] mb-10'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.25 }}
			viewport={{ once: true }}
		>
			<SectionHeading>Contact Me</SectionHeading>
			<p className='-mt-6 mb-10'>Please contact me at <a href={`mailto:${email}`} className='underline'>{email}</a>
				{" "} or through this form.
			</p>
			<form action={sendMail} className='w-full flex-center flex-col gap-3'>
				<FormInputs />
			</form>
		</motion.section>
	);
};

export default Contact;
