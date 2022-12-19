import React from "react";
import logo from "../header/logo.png";
import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer(){
    return(
        <>
        <footer>
            <div className="container grid v_flex">
                <div className="box ">
                    <Link to='/'><img src={logo} alt=''/></Link>
                </div>
                <div className="rayon ">
                    <Link to='/shop'><h4>Nos Rayons</h4> </Link>
                    <ul>
                        <Link to='/shop'><li>Bolangerie</li></Link>
                        <Link to='/shop'><li>Epécerie</li></Link>
                        <Link to='/shop'><li>Crémerie</li></Link>
                        <Link to='/shop'><li>Bonbons & Sucret</li></Link>
                        <Link to='/shop'><li>Entretien</li></Link>
                        <Link to='/shop'><li>Légume & Fruit</li></Link>
                    </ul>
                </div>
                <div className="pages">
                    <Link to='/about'><h4>Qui Nous Somme?</h4></Link>
                    <Link to='/login'><h4>Nous rejoindre</h4></Link><Link to='/contact'><h4>Contact Us</h4></Link><Link to='/blog'><h4>Blog</h4></Link>
                </div>
                <div className="footer-col">
                    <h4>Service Clientèle :</h4>
                    <h5>(+212)<span>0512345678</span> </h5>
                </div>
            </div>
            <div className="socialMedia">
                <p className="media">Nous suivre : </p>
                <ul>
                    <li><Link to='' className="linkmedia"><i className="fa-brands fa-square-instagram fa"></i></Link></li>
                    <li><Link to='' className="linkmedia"><i className="fa-brands fa-facebook  fa"></i></Link></li>
                    <li><Link to='' className="linkmedia"><i className="fa-solid fa-location-dot fa"></i></Link></li>
                    <li><Link to='' className="linkmedia"><i className="fa-solid fa-envelope fa "></i></Link></li>
                </ul>      
            </div>
            <div className="copyright">
                <p>copyright © : fatimazahrabaghzif@gmail.com</p>
            </div>
        </footer>
            
        </>
    );
}