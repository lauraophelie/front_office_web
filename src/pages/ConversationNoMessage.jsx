import Menu from "../components/Menu";
import MessageBloc from "../components/MessageBloc";
import MessageTitle from "../components/MessageTitle";
import SearchBar from "../components/SearchBar";

function ConversationMessage(){
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

export default ConversationMessage;