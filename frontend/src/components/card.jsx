import React from 'react';


function Card(props) {
    return (
        <div className="card">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.balance}</p>
            <p>{props.abonnement}</p>
            <button className="outline hover:outline-blue-500  text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline">
            {props.buttonText}
            </button>
        </div>
    );
}
export default Card;
