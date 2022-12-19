import React, { useState } from "react";
import './style.css';
import  DataMsg from '../data/DataMsg';


const Contact = () =>{
    
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [msg, setMsg] = useState('');
    const handleName = (event) => {
        setName(event.target.value);
    };
    const handleMail = (event) => {
        setMail(event.target.value);
    };
    const handleMsg = (event) =>{
        setMsg(event.target.value);
    };

    const [message, setMessage] = useState('hide')
    const handleSubmit = (event) =>{
        console.log(DataMsg);
        event.preventDefault();
        DataMsg.push({id: DataMsg.length-1, emailMsg : mail, nameMsg: name, msgContent : msg});
        console.log(DataMsg);
        setMessage('msgShow')
        setTimeout(() => {
            setMessage("hide")
        }, 3000);

    }

    return(
        <>
            <section className="contact">
                <p className={message}>Votre Message est envoyée avec succès.😄 Merci pour votre Message</p>
                <div className="contact-heading">
                    <h2>Contacter Nous</h2>
                </div>
                <div className="container5">
                    <div className="row1">
                        <div className="column">
                            <div className="contact-widget">
                                <div className="contact-widget-item">

                                    <div className="icons">
                                        <i className="fa-solid fa-location-dot" />
                                    </div>

                                    <div className="text">
                                        <h5>Adresse</h5>
                                        <p>15 Dchaira El Jihadia, Agadir, Marroc</p>
                                    </div>

                                    <div className="icons">
                                        <i className="fa-solid fa-phone" />
                                    </div>
                                    <div className="text">
                                        <h5>Contacter Nous</h5>
                                        <p>(+212)0512345678</p>
                                    </div>

                                    <div className="icons">
                                        <i className="fa-solid fa-envelope" />
                                    </div>
                                    <div className="text">
                                        <h5>Mail</h5>
                                        <p>mohashop@mail.Com</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="column">
                            <div className="contact-form">
                                <form action='#' onSubmit={handleSubmit}>
                                    <input type='text' value={name} placeholder="entrer votre nom" onChange={handleName} required />

                                    <input type='email'  value={mail} placeholder="entre votre email" onChange={handleMail} required />

                                    <textarea value={msg}  placeholder="entre votre Commentaire" onChange={handleMsg} required />

                                    <button type="submit" className="site-btn">Envoyer </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="row1">
                        <div className="map-column">
                            <div className="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13769.232559697644!2d-9.548988783704994!3d30.370606820002973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c80379b08745%3A0x5d0fc80b1c112bbe!2sDcheira%2C%20Dcheira%20El%20Jihadia%2080000!5e0!3m2!1sfr!2sma!4v1668351155967!5m2!1sfr!2sma" 
                                width="600" 
                                height="450" 
                                style={{border:0}} 
                                loading="lazy" >

                                </iframe>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>

    );
    
    
}

export default Contact;