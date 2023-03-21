import React from 'react';
import Header from '../components/tools/Header';
import Navigation from '../components/tools/Navigation';
import Card from '../components/card';


function Home() {
  return (
    <div>
      <Navigation />
      <Header />
      <div className='container'>
      <div className='container1'>
        <Card
          title="Compte 1"
          description="Créé le 01/01/2022"
          balance="3 456 TFBK"
          abonnement="Adhèsion mensuelle B2C"
          buttonText="texte"
        />

        <Card
          title="Compte 2"
          description="Créé le 02/02/2022"
          balance="3 456 TFBK"
          abonnement="Adhèsion mensuelle B2C"
          buttonText="texte"
        />
      

        <Card
          title="Compte 3"
          description="Créé le 03/03/2022"
          balance="3 456 TFBK"
          abonnement="Adhèsion mensuelle"
          buttonText="texte"
        />

      </div>
          {/* PREMIERE COLONNE  */}


                      {/* SECONDE COLONNE  */}
        <div className="container2">
          <Card
            title="Compte important"
            description="Créé le 01/01/2022"
            buttonText="texte"
          />

          <Card
            title="Compte 2"
            description="Créé le 02/02/2022"
            buttonText="texte"
          />
        </div>




                    {/* TROISIEME COLONNE  */}
        <div className="container3">
          <Card
            title="Compte 1"
            description="Créé le 01/01/2022"
            buttonText="texte"
          />

          <Card
            title="Compte important"
            description="Créé le 02/02/2022"
            buttonText="texte"
          />
        </div>
        </div>
        
</div>

  );
} 

export default Home;
