"use client";


import Thankyou from "@/components/custom/Thank-you";
import { data2 } from "@/data/data";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";

const Recipient = ({ params }: { params: { recipient: string } }) => {

  console.log("--- here",params.recipient)
  const recipientData = data2.find((d) => d.slug === params.recipient);

  if (!recipientData) {
    return notFound();
  }

  console.log("correct")

  return (
    <div> 
      <Thankyou from={"Chris"} name={recipientData.name} content={recipientData.content} />
    </div>
  )
}

export default Recipient;