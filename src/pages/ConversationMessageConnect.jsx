import Menu from "../components/Menu";
import MessageTitle from "../components/MessageTitle";

function ConversationMessageConnect(){
    return(
        <>
            <Menu/>
            <div className = "content">
                <MessageTitle
                    className = "content_message_title"
                    nombre = "0"
                />
                <NoMessageBox/>
            </div>

        </>
    )
}

export default ConversationMessageConnect;