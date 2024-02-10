import { Link } from 'react-router-dom';
import '../assets/menu.scss'
import Button from '../component/Button';

function Menu(){
    return(
        <>
            <div className="menu">
                <div className="menu_logo">Occaz</div>
                <div className="menu_link">
                    <Link to="/"><Button
                        className="menu_link_button"
                        text = "Home"
                    /></Link>
                    <Link to="/annonces"> <Button
                        className="menu_link_button"
                        text = "Annonces"
                    /> </Link>
                    <Link to="/message"> <Button
                        className="menu_link_button"
                        text = "Messages"
                    /></Link>
                    <Link to="/favoris"> <Button
                        className="menu_link_button"
                        text = "Favoris"
                    /></Link>
                </div>
                <Link to="/login"><Button 
                    className="menu_login" 
                    text="Se connecter" 
                /></Link>
            </div>
        </>
    )
}

export default Menu;