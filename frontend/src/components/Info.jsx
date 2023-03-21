import React from 'react';



function Info(props) {
    return (
        <div className="Info ">
            <h1>{props.title}</h1>
            <label htmlFor="nom">Nom:</label>
            <input type="text" id="nom" value={props.nom} onChange={props.onChangeNom} /><br />
            <label htmlFor="prenom">Prénom:</label>
            <input type="text" id="prenom" value={props.prenom} onChange={props.onChangePrenom} /><br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={props.email} onChange={props.onChangeEmail} /><br />
            <label htmlFor="adresse-livraison">Adresse de livraison:</label>
            <input type="text" id="adresse-livraison" value={props.adresseLivraison} onChange={props.onChangeAdresseLivraison} /><br />
            <label htmlFor="adresse-facturation">Adresse de facturation:</label>
            <input type="text" id="adresse-facturation" value={props.adresseFacturation} onChange={props.onChangeAdresseFacturation} /><br />
            <label htmlFor="wallet">Adresse de wallet:</label>
            <input type="text" id="wallet" value={props.wallet} onChange={props.onChangeWallet} /><br />
            <label htmlFor="identifiant">Identifiant:</label>
            <input type="text" id="identifiant" value={props.identifiant} onChange={props.onChangeIdentifiant} /><br />
            <button className="outline hover:outline-blue-500  text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline">
                Sauvegarder
            </button>
            <button className="">
            Supprimer Compte
            </button>
        </div>
    );
}


export default Info;