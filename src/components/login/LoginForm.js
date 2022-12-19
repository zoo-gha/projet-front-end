import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css';

const LoginForm = ()=>{
    const [popupStyleEchou, showPopop] = useState("hide");
    const [popupValide, showPopup] = useState("hide");
    /*const popup = ()=>{
        showPopop("login-popup")
        setTimeout(() => {
            showPopop("hide")
        }, 3000);
    }*/
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
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");

    const handleMail = (e)=>{
        setMail(e.target.value);
    };
    const handlePass = (e) =>{
        setPass(e.target.value);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const result = dataUser.filter(user =>  mail === user.userMail && pass === user.userPass );
        console.log(result)
        if (result.length !== 0 ){
            console.log("Valide");
            showPopup("login-popup")
                setTimeout(() => {
                    showPopup("hide")
                }, 3000);
        }else{
            console.log("echec")
            showPopop("login-popup")
                setTimeout(() => {
                    showPopop("hide")
                }, 3000);
        }
    }


    return(
        <div className="page1">
            <form action="" onSubmit={handleSubmit} >
                <div className="cover2">
                    <h1>se connecter</h1>
                    
                        <input type='email' placeholder=" email" value={mail} onChange={handleMail} required/>
                        <input type='password' placeholder=" password" value={pass} onChange={handlePass} required/>
                        
                        <button type="submit" className="login-btn" >se Connecter</button>
                    
                    <Link to='/inscription'><p className="text">créer un compte</p></Link>
                    <div className={popupStyleEchou}>
                        <h3>la connexion échouée</h3>
                        <p>Email ou password incorrect</p>
                        <p>Vueillez réssayée à nouveau</p>
                    </div>
                    <div className={popupValide}>
                        <h3>connexion réussite</h3>
                        <p>votre commande établie</p>
                        <p>Merci pour votre visite</p>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;