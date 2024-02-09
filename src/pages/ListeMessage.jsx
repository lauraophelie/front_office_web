import ContentConversationMessage from "../components/ContentConversationMessage";
import Menu from "../components/Menu";

function ListeMessage(){
    return(
        <>
            <Menu/>
            <div className="content">
                <ContentConversationMessage />
            </div>
        </>
    )
}

export default ListeMessage;