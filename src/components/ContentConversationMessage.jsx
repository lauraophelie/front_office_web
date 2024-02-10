import MessageBloc from "./MessageBloc"
import MessageTitle from "./MessageTitle"
import SearchBar from "./SearchBar"

import '../assets/scss/message.scss'

function ContentConversationMessage(props){
    return(
        <div className={props.className}>
            <MessageTitle
                    className = "content_message_title"
                    nombre = "3"
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
    )
}

export default ContentConversationMessage