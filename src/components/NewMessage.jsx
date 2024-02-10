import "../assets/scss/message.scss"

function NewMessage(){
    const onClick = null;
    return(
        <div className="envoi_message">
            <input type="text" placeholder="Ecrire quelque chose ici" />
            <button><img
                className="submit__send__message"
                onClick = {onClick}
                src = "assets/icon/Icon_material-send.svg"
            /></button>
        </div>
    )
}
export default NewMessage