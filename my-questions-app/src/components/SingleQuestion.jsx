import React, { useState } from "react";
import {AiOutlinePlusCircle,AiOutlineMinusCircle} from 'react-icons/ai'

const SingleQuestion = ({ title, info }) => {
    const [read,setRead] = useState(false)
  return (
    <section className="single-question">
      <div className="title">
        <h4>{title}</h4>
       <span onClick={()=>setRead(!read)}  className="icon">
        {read ? <AiOutlineMinusCircle/>:<AiOutlinePlusCircle/>}
       </span>
      </div>
     {read && <p className="info" >{info}</p>}
    </section>
  );
};

export default SingleQuestion;
