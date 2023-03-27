

import React from 'react';

function Card(props) {
    return (
        <div className="col-span-1 bg-white p-4 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold mb-2">{props.title}</h1>
            <p className="text-gray-700 mb-4">{props.description}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                {props.buttonText}
            </button>
        </div>
    );
}

export default Card;
