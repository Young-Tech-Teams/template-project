import React from 'react';


function Params(props) {
    return (
        <div className="params">
            <h1>{props.title}</h1>
            <h2>{props.title2}</h2>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <p>{props.text3}</p>
            <button>{props.buttonText}</button>
            
        </div>
    );
}

export default Params;