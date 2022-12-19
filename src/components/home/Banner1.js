import React from "react";
import { Link } from "react-router-dom";

export default function Banner1(){
    return(
        <section className="banner1">
            <h2>Vos Demandes à porter de main !</h2>
            <p>Rejoindrez Nous pour profiter de meilleurs offres !</p>
            <Link to='/shop'><button className="btn-primary">Profiter Aujourd'hui !</button></Link>
        </section>
    );
} 