import React from "react";
import Outputflow from "./outputflow";

const Output = props => {
    return (
        <div>
           <Outputflow value={props.answer} textSize={{fontSize:'20px'}}/>
           <Outputflow value={props.user}/>
        </div>
    )
};

export default Output;
