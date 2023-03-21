import React from 'react';

function Card(props) {
    return (
        <div className="card1">
            <h1 className="text-lg font-semibold mb-2">{props.title}</h1>
            <p className="text-gray-700 mb-4">{props.description}</p>
            <p className="text-gray-700 mb-4">{props.balance}</p>
            <p className="text-gray-700 mb-4">{props.abonnement}</p>
            <button className="outline hover:outline-blue-500  text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline">
                Sauvegarder
            </button>
        </div>
    );
}
export default Card;
