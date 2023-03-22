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
          title="Compte d'arthur Godreau "
          description="Créé le 01/01/2022"
          balance="3 456 TFBK"
          abonnement="Adhèsion mensuelle B2C"
          buttonText="Informations de compte"
        />

        <Card 
          title="Acheter / Revendre Du TFBK"
          description="Accédez à l'interface intégrée de l'exchange"
          balance="3 456 TFBK"
          abonnement="Adhèsion mensuelle B2C"
          buttonText="Accéder à l'exchange"
        />
      

        <Card
          title="Services complémentaires"
          description="Créé le 03/03/2022"
          balance="3 456 TFBK"
          abonnement="Adhèsion mensuelle"
          buttonText="Parrainage"
        />

      </div>
          {/* PREMIERE COLONNE  */}


          {/* SECONDE COLONNE  */}
        <div className="container2 ">
          <Card
            title="Mes transactions et mon portefeuille "
            description="Retrouvez un historique de vos transactions, la balance de votre wallet."
            buttonText="Voir mon wallet"
          />
          
          <Card
            title="Ressources Blockchain"
            description="Créé le 02/02/2022"
            buttonText="Développer mes connaisances"
          />
        </div>




                    {/* TROISIEME COLONNE  */}
        <div className="container3">
          <Card
            title="Actualités"
            description="Créé le 01/01/2022"
            buttonText="Voir les actualités"
          />

          <Card
            title="Abonnements et promotions"
            description="Créé le 02/02/2022"
            buttonText="En savoir plus"
          />
        </div>
        </div>
        
</div>

  );
} 

export default Home;
