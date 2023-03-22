import React from 'react';


function Card(props) {
    return (
        <div className="card">
            <h1 className="text-lg font-semibold mb-2">{props.title}</h1>
            <p className="text-gray-700 mb-2">{props.description}</p>
            <p className="text-gray-700 mb-2">{props.balance}</p>
            <p className="text-gray-700 mb-2">{props.abonnement}</p>
            <button className="outline hover:outline-blue-500  text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline">
            {props.buttonText}
            </button>
        </div>
    );
}
export default Card;
