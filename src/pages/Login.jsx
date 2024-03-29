import React, { useState } from 'react';

import axios from 'axios';

import {Link, useNavigate} from'react-router-dom';

import '../assets/scss/login.scss'
import Cookie from 'js-cookies';

function Login() {
    const [password, setPassword] = useState("password456");
    const [email, setEmail] = useState("alice.smith@example.com");

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
       };
       
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
       };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Password: ${password}, Email: ${email}`);
        axios.post('https://voiturebacknonrelationnel-production.up.railway.app/rest/auth/login', {
        email,
        password
       })
       .then((response) => {
        console.log(response.data);
        Cookie.setItem("token", response.data.token);
        Cookie.setItem("email",response.data.email);
        navigate('/');
       })
       .catch((error) => {
        console.error(error);
       });
    };

    return (
        <div className='login'>
            <div className='login__box'>
                <div className='login__content'>
                    <div className='login__title'>Login</div>
                    <div className='login__subtitle'>Connectez vous à votre compte</div>
                    <form onSubmit={handleSubmit}>
                    <input
                        name = "email"
                        onChange={handleEmailChange}
                        required = {true}
                        type = "text"
                        value = {email}
                        placeholder = "Adresse e-mail"
                    />
                    <input
                        className=''
                        placeholder ="Mot de passe"
                        name = "password"
                        onChange={handlePasswordChange}
                        required = {true}
                        type = "text"
                        value = {password}
                    />
                    <input
                        className = "login__button"
                        value = "Se connecter"
                        type = "submit"
                    />
                    </form>
                    <div className='login__link'>
                        <Link to='linkToApp'>
                            Pas encore de compte ? Téléchargez notre
                            application mobile pour vous inscrire !
                        </Link>
                    </div>
                </div>
            </div>
            <img
                    className = 'login__picture'
                    src = "image/Care_of_Tesla.png"
                    alt = "Image de fond"
            />
        </div>
    )
}

export default Login;