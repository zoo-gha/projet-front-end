import React, {useState} from "react";
import './About.css';
import logo from '../header/logo.png'

export default function About() {
    const [showData, setShowData] = useState(false);
    const show = () => setShowData(true);
    const cache = () => setShowData(false);

    const Results = ()=>{
        return(
            <p>L'entreprise a divisé ses produits en plusieurs sections pour faciliter le processus d'acquisition par les clients, ainsi que pour organiser le travail et réduire la période de recherche d'objets de collection.
            Il affiche également diverses marques bien connues de grande qualité. Parmi les divisions, on retrouve : Le rayon fromage, le rayon lessive, le rayon jus, le rayon sucres de toutes sortes et boissons gazeuses, ainsi que le rayon boulangerie et les confiseries, et rayon bonbons…
            </p>
        );
    }
    return(
        <>
            <div className="section">
                <div className="container1">
                    <div className="content-section">
                        <div className="title">
                            <h1>Qui Nous Somme?</h1>
                        </div>
                        <div className="content">
                            <h3>Présentation moha shop</h3>
                            <p>Le mini super marché Moha-Shop et une nouvelle entreprise dans le but de vente des biens. L'entreprise a été créer récemment et son objectif principal est de faciliter la vie des clients qui ont peu de temps en raison de leur préoccupation pour leur travail pour obtenir leurs biens en douceur et facilement sans avoir à se déplacer dans les excellents supermarchés en fournissant tous les produits et plus avec un coût adorable et moins cher que les autres entreprises.</p>
                            <div className="button">
                            {showData ? <Results /> : null}
                            {!showData ?<div> <button className="btn" onClick={show}>Lire plus</button> </div>: <div><button className="btn" onClick={cache}>Afficher moins</button></div>}
                            </div>
                        </div>
                        <div className="social">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>
                    <div className="image-section">
                        <img src={logo} alt='logo'/>
                    </div>
                </div>
	        </div>
        </>
    );
}