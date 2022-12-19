import React from "react";
import OffresCard from "./OffresCard";
import { Link } from "react-router-dom";
import './style.css';

export default function OffresPro(){
    
    return(
        <>
            <section className='menu'>
                
                <div className='heading '>
                    <h1 >Nos Offres</h1>
                </div>
                <div className='container'>
                    <OffresCard />
                </div>

                <div className="linktoshop">
                    <Link to='/shop'>Listes des offres du moments <i className='fa fa-long-arrow-alt-right'></i></Link>
                </div>
            </section>
        </>
    );
}