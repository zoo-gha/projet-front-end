import React from "react";
import { Link } from "react-router-dom";

export default function Banner3(){
    return(
        <section className="banner3">
            <h2>Vous avez des questions</h2>
            <p>Nous avons déjà la réponse que vous cherchez</p>
            <Link to='/contact'><button className="btn-primary1">Contactez Nous</button></Link>
        </section>
    );
} 