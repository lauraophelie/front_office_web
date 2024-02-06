import React, { useState } from 'react';

import axios from 'axios';

import {Link, useNavigate} from'react-router-dom';

import Button from '../components/Button';
import Input from '../components/Input'
import LoginPicture from '../components/LoginPicture';

import '../assets/scss/login.scss'

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
        email: {email},
        password:  {password}
       })
       .then((response) => {
        console.log(response.data);
        navigate('/')
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
                    <Input
                        name = "email"
                        onChange={handleEmailChange}
                        required = {true}
                        type = "text"
                        value = {email}
                        placeholder = "Adresse e-mail"
                    />
                    <Input
                        placeholder ="Mot de passe"
                        name = "password"
                        onChange={handlePasswordChange}
                        required = {true}
                        type = "text"
                        value = {password}
                    />
                    <Button
                        className = "login__button"
                        text = "Se connecter"
                    />
                    </form>
                    <div className='login__link'>
                        <Link to='linkToApp'>
                            Pas encore de compte ? Téléchargez notre
                            application mobile pour vous inscrire !
                        </Link>
                    </div>
                </div>
                <LoginPicture
                    className = 'login__picture'
                    image = "assets/images/Care_of_Tesla.jpg"
                    alt = "Image de fond"
                />
            </div>
        </div>
    )
}

export default Login;