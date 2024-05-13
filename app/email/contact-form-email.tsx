import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
    Tailwind,
  } from "@react-email/components";
  import React from "react";
  
  
const ContactFormEmail = ({message,senderEmail}:contactFormEmailProps) => {

    return (
      <Html>
        <Head />
        <Preview>New Message form portfolio Contact Form</Preview>
        <Tailwind>
          <Body className="bg-gray-500">
            <Container >
              <Section className="bg-white border-black my-10 px-32 py-4 rounded-lg  text-black">
                <Heading className="leading-tight">You Recieved this message from the contact form on your portfilio site</Heading>
                <Text>{message}</Text>
                <Hr/>
                <Text>From {senderEmail}.</Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };
type contactFormEmailProps={
	message:string;
  senderEmail:string;
}


export default ContactFormEmail;