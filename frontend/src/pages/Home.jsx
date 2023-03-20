import React from 'react';
import Header from '../components/tools/Header';
import Navigation from '../components/tools/Navigation';
import Card from '../components/card';


function Home() {
  return (
    <div >
      <Navigation />
      <Header />
      <div className="grid grid-cols-3 gap-4 ">
        <Card
          title="Compte d'Arthur "
          description="Crée le 18/02/2022"
          buttonText="texte"
        />

        <Card
          title="Compte d'Arthur "
          description="Crée le 18/02/2022"
          buttonText="texte"
        />

        <Card
          title="Compte d'Arthur "
          description="Crée le 18/02/2022"
          buttonText="texte"
        />
      </div>
    </div>
  );
}

export default Home;
