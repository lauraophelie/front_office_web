import "../assets/scss/message.scss"
import Button from "./Button"

function NewMessage(){
    const onClick = null;
    return(
        <>
            <input type="text" placeholder écrire quelque chose ici/>
            <Button
                onClick = {onClick}
                icon = "Icon_material-send.svg"
            />
        </>
    )
}

export default NewMessage