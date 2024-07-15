import Thank from "./Thank";
import Letter from "./Letter";

type ThankyouProps = {
  from: string;
  name: string;
  content: string;
};

const Thankyou: React.FC<ThankyouProps> = ({ from, name, content }) => {

  return (
    <div className="card-container">
     <Thank name={name}/>
     <Letter from={from} content={content} name={name} />

     
    </div>
  );
};

export default Thankyou;
