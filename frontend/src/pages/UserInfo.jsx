import React from 'react';
import HelloWorld from '../components/tools/HelloWorld';
import Navigation from '../components/tools/Navigation';
import Info from '../components/Info';
import Params from '../components/params';
import Distribution from '../components/distribution';
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";


function UserInfo() {
  return (
    <div>
      <Navigation />
      <HelloWorld />
      <div className="containerInfo">
          <Info
            title="Information Personnelles"
            nom=""
            prénom=""
            email=""
            adresse-livraison=""
            adresse-facturation=""
            wallet=""
            identifiant=""
            
          />

          <Params
            title="Paramètres du compte"
            title2="Abonnement"
            text1="Abonnement: Adhésion mensuelle B2C"
            text2="Prochaine facturation: 18/11/2022"
            text3="Date de souscription: 18/02/2022."
            buttonText="Information et paramètres du compte"
          />
        
          <Distribution
            title="Distribution"
            text1="Combien de TFBK distribués par euros dépensés"
            input="number"
            img="QR Code"
            icon={faShareAlt}
            buttonText="Sauvegarder"
          />
        </div>
      </div>
  );
}

export default UserInfo;
