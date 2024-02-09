import '../assets/scss/message.scss'
import Button from './Button';

function Menu(){
    return(
        <>
            <div className="menu">
                <div className="menu_logo">Occaz</div>
                <div className="menu_link">
                    <Button
                        className="menu_link_button"
                        text = "Home"
                    />
                    <Button
                        className="menu_link_button"
                        text = "Annonces"
                    />
                    <Button
                        className="menu_link_button"
                        text = "Messages"
                    />
                    <Button
                        className="menu_link_button"
                        text = "Favoris"
                    />
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
