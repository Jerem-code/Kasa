import React from "react";
import Banner from "../../components/Banner/banner";
import Card from "../../components/Card/card";
import logements from "../../datas/logements.json";
import "../Home/home.scss";
import backgroundHeader from "../../assets/backgroundHeader.png";

function Home() {
  return (
    <div className="home-layout">
      <Banner title="Chez vous, partout et ailleurs" backgroundHeader={backgroundHeader} alt="bannière" />
      <div className="cards-grid">
        {logements.map(logement => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Home