import React, {useState} from "react";
import './Inscription.css';
import { Link } from "react-router-dom";

const Inscription = () =>{

    const [popupStyleEchou, showPopop] = useState("hide");
    const [popupValidInc, showPopupI] = useState("hide");
    const [popupValid, showPopup] = useState("hide");

    
    const dataUser = [
        {
            userMail : 'dev101@gmail.com',
            userPass : '1234',
            userNom : 'dev',
            userPrenom : '101' 
        },
        {
            userMail : 'dev102@gmail.com',
            userPass : '1478',
            userNom : 'dev',
            userPrenom : '102' 
        },
        {
            userMail : 'dev201@gmail.com',
            userPass : '3698',
            userNom : 'dev',
            userPrenom : '201' 
        },
        {
            userMail : 'dev202@gmail.com',
            userPass : '2589',
            userNom : 'dev',
            userPrenom : '202' 
        }
    ]

    const [name, setName] = useState('');
    const [prenom, setPrenom] = useState('');
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [valPass, setValPass] = useState('');

    const handleName = (e)=>{
        setName(e.target.value)
    }
    const handlePrenom = (e)=>{
        setPrenom(e.target.value)
    }
    const handleMail = (e)=>{
        setMail(e.target.value)
    }
    const handlePass = (e)=>{
        setPass(e.target.value)
    }
    const handleValPass = (e)=>{
        setValPass(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const result = dataUser.filter(user =>  mail === user.userMail);
        if (result.length !== 0){
            showPopop("login-popup")
            setTimeout(() => {
                showPopop("hide")
            }, 3000);
        }else{
            if(pass !== valPass){
                showPopupI("login-popup")
                setTimeout(() => {
                    showPopupI("hide")
                }, 3000);
            }else{
                dataUser.push({userMail: mail, userPass: pass})
                showPopup("login-popup")
                setTimeout(() => {
                    showPopup("hide")
                }, 3000);
            }
            
        }
    }

    return(
        <div className="page1">
            <form action="" onSubmit={handleSubmit}>
                <div className="cover2">
                    <h1> s'inscrire</h1>
                    <input type='text' placeholder="nom" value={name} onChange={handleName} required/>
                    <input type='text' placeholder="prénom" value={prenom} onChange={handlePrenom} required/>
                    <input type='email' placeholder="email" value={mail} onChange={handleMail} required/>
                    <input type='password' placeholder="password" value={pass} onChange={handlePass} required/>
                    <input type='password' placeholder="confirmation password" value={valPass} onChange={handleValPass} required/>
                    
                    <button className="login-btn">s'inscrire</button>

                    <Link to='/login'><p className="text">déjà avoir un compte</p></Link>
                    <div className={popupStyleEchou}>
                        <h3>Information déjà utilisée</h3>
                        <p>Vueillez enter votre donnée correcte </p>
                    </div>
                    <div className={popupValidInc}>
                        <h3>echec de connexion</h3>
                        <p>votre validation est incorrecte</p>
                        <p>Vueillez ressayer à nouveau</p>
                    </div>
                    <div className={popupValid}>
                        <h3>connexion établie</h3>
                        <p>votre compte est créer avec succès</p>
                        <p>Merci pour votre confiance</p>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default Inscription;