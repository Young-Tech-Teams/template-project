import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";



function Distribution(props) {
    return (
        <div className="Distribution flex flex-col items-center justify-center space-y-8">
            {/* Titre */}
            <h2 className="text-xl font-bold">{props.title}</h2>

            <div className="flex items-center space-x-4">
                {/* Paragraphe */}
                {/* PLACEHOLDER 38 */}
                <input
                    type="number"
                    placeholder="38"
                    min="1"
                    max="500"
                    className="border border-gray-300 p-2 rounded-md w-24 text-center"
                />
                <p>{props.text1}</p>
                {/* Image QR CODE  */}
                <img
                    src="./frame.png"
                    alt=""
                    style={{ width: "300px", height: "300px" }}
                />
                {/* ICONE FONTEAWSOME PARTAGER */}
                <a
                    href="https://youngtech.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4"
                >
                    <FontAwesomeIcon icon={faShareAlt} />
                </a>
            </div>

            {/* BOUTON Sauvegarder */}
            <button className="outline hover:outline-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline">
                Sauvegarder
            </button>
        </div>
    );
}

export default Distribution;
