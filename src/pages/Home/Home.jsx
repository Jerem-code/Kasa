import React from "react";
import Banner from "../../components/Banner/banner";
import "../Home/home.scss";
import backgroundHeader from "../../assets/backgroundHeader.png";

function Home() {
  return (
    <div className="home-layout">
      <Banner title="Chez vous, partout et ailleurs" backgroundHeader={backgroundHeader} alt="bannière" />
    </div>
  )
}

export default Home