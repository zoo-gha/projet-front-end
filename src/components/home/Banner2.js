import React from "react";
import { Link } from "react-router-dom";
import alimant8 from './imageRayons/alimant8.jpg';
import conseil from './imageRayons/conseil.jpg';
import recette from './imageRayons/recette.jpg';

export default function Banner2(){
    return(
        <section className="banner2">
            <Link to='/shop'>
                <div className="banner-content">
                    <img src={alimant8} alt='' />
                    <h4 className="banner-heading">Nos Produits</h4>
                </div>
            </Link>
            <Link to='/blog'>
                <div className="banner-content">
                    <img src={conseil} alt='' />
                    <h4 className="banner-heading">Nos conseils & astuces</h4>
                </div>
            </Link>
            <Link to='/blog'>
                <div className="banner-content">
                    <img src={recette} alt='' />
                    <h4 className="banner-heading">Nos recettes</h4>
                </div>
            </Link>
        </section>
    );
} 