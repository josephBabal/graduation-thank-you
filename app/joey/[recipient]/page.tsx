import Thankyou from "@/components/custom/Thank-you";
import { data1 } from "@/data/data";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";

const Recipient = ({ params }: { params: { recipient: string } }) => {
  const recipientData = data1.find((d) => d.slug === params.recipient);

  if (!recipientData) {
    return notFound();
  }


  return (
    <div> 
      <Thankyou from={"Joey"} name={recipientData.name} content={recipientData.content} />
    </div>
  )
}

export default Recipient;