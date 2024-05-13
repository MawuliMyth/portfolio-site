 "use server";

import {Resend} from 'resend';
import React from 'react';
import ContactFormEmail from '@/app/email/contact-form-email';
import { error } from 'console';
const resend = new Resend(process.env.RESEND_API_KEY);


const getErrorMessage=(error:unknown)=>{
  let message:string;

  if(error instanceof Error){
    message=error.message;
  }else if(error && typeof error === 'object' && 'message' in error ){
    message = error.message as string
  } else if(typeof error === 'string'){
    message = error
  }else{
    message = 'Invalid Request'
  }
  return message;
}

type handleFormType={
  success:boolean;
  status?:number;
  message:string;
}
export const handleForm=async (data:FormData):Promise<handleFormType>=>{
      const {email:senderEmail,message} = Object.fromEntries(data);
      
      if(!senderEmail||!message.toString().trim()){
        const err=new Error('Invalid Input!!')
        console.error(err.message)
        return {
          success:false,
          status:400,
          message:err.message,
        }
      }

    	try{
        const {error,data} = await resend.emails.send({
            from:'Contact Form <onboarding@resend.dev>',
            subject: "Message from Contact Form",
            react:  React.createElement(ContactFormEmail, 
              { message:message as string,
                senderEmail: senderEmail as string,
              }),
            to: 'manueldiamondlistowell@gmail.com',
            reply_to:senderEmail as string,
        })
        // if (error){
        //   console.error(error)
        //   return error
        // }
        if (data){
          console.log(data)
          return {
            status:200,
            success:true, 
            message:"Message Sent"
          }
        }

       }catch(error:unknown){
         const errorMsg=getErrorMessage(error)

         console.error(error)
          return {
            success:false,
            message:errorMsg,
            status:401,
          }
       }
      
      return {
        success:false,
        message:"Unkown Error",
        status:520,
      }
  }

