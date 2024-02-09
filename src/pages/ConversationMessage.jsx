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
                <SearchBar 
                    icon = "assets\icon\Icon feather-search.svg"
                    className = "search_bar"
                    text = "Recherchez une conversation"
                />
                <MessageBloc 
                    className = "content_message_bloc"
                />
            </div>

        </>
    )
}

export default ConversationMessage;