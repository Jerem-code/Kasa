import React from 'react';
import Banner from '../../components/Banner/banner';
import Collapse from '../../components/Collapse/collapse';
import backgroundAbout from '../../assets/backgroundAbout.png';
import './about.scss';

function About() {
    const aboutData = {
        fiabilite: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
        respect: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        service: "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
        securite: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    };

    return (
        <div className="about-container">
            <Banner backgroundHeader={backgroundAbout} alt="Paysage de montagne" />
            <div className="about-content">
                <Collapse title="Fiabilité" content={aboutData.fiabilite} />
                <Collapse title="Respect" content={aboutData.respect} />
                <Collapse title="Service" content={aboutData.service} />
                <Collapse title="Sécurité" content={aboutData.securite} />
            </div>
        </div>
    );
}

export default About;
