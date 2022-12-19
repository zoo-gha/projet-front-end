import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
const Slider = () => {
    return(
        <>
            <section className="home" id="home">
                <div className="content">
                    <h3>Des Promos Inratables!</h3>
                    <p>Découvrez nos meilleurs offres!</p>
                    <Link to="/shop"><button  className="btn">Profiter Ajourd’hui !</button></Link>
                </div>
            </section>
        </>
    );
}

export default Slider;