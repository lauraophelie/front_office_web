import { Link } from "react-router-dom"
import Button from "./Button"

function NoMessageConnect(){
    return(
        <div className="content_message_no">
            <Link to="/login"><Button
                className= "content_login"
                text = "Connectez vous"
            /></Link>
        </div>
    )
}

export default NoMessageConnect