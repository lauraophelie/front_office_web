import { Link } from 'react-router-dom';
import '../assets/menu.scss'
import Button from './Button';

function Menu(){
    return(
        <>
            <div className="menu">
                <div className="menu_logo">Occaz</div>
                <div className="menu_link">
                    <Link to="/">
                    <Button
                        className="menu_link_button"
                        text = "Home"
                    /></Link>
                    <Link to="">
                    <Button
                        className="menu_link_button"
                        text = "Annonces"
                    /></Link>
                    <Link to="/message"><Button
                        className="menu_link_button"
                        text = "Messages"
                    /></Link>
                    <Link to="/favoris"><Button
                        className="menu_link_button"
                        text = "Favoris"
                    /></Link>
                </div>
                <Button 
                    className="menu_login" 
                    text="Se connecter" 
                />
            </div>
        </>
    )
}

export default Menu;
