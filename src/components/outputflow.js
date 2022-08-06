import React from "react";
import './outputflow.css';

const Outputflow = props => {
    return (
        <div>
            <input type="text" readOnly className="screen" style={props.textSize}
            value={props.value}></input>
        </div>
    )
};

export default Outputflow;





