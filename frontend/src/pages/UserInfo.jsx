import React from 'react';
import Navigation from '../components/tools/Navigation';
import Info from '../components/Info';
import Params from '../components/params';
import Distribution from '../components/distribution';
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";


function UserInfo() {
  return (
    <div>
          <Navigation />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
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
        </div>
        <div className="col-span-1">
          <Params
            title="Paramètres du compte"
            title2="Abonnement"
            text1="Abonnement: Adhésion mensuelle B2C"
            text2="Prochaine facturation: 18/11/2022"
            text3="Date de souscription: 18/02/2022."
            buttonText="Information et paramètres du compte"
          />
        </div>
        <div className="col-span-1">
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
    </div>
  );
}

export default UserInfo;
