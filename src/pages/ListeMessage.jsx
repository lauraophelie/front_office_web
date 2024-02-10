import ContentConversationMessage from "../components/ContentConversationMessage";
import Menu from "../components/Menu";

function ListeMessage(){
    return(
        <>
            <Menu/>
            <div className="content">
                <div className="content__liste_message">
                    <ContentConversationMessage />
                </div>
            </div>
        </>
    )
}

export default ListeMessage;