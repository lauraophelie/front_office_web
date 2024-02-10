import ContentConversationMessage from "../components/ContentConversationMessage";
import DetailsMessage from "../components/DetailsMessage";
import Menu from "../components/Menu";
import NewMessage from "../components/NewMessage";

function ConversationMessage(){
    const user = { id : 1, name : 'Nom utilisateur'}
    const sender = { id: 2, name: 'Nom sender'}

    const conversation =[
        { 
            user: {user}, 
            datetime: "Date et heure",
            phrase: "User: ipsum dolor sit amet Sadipscing elitr sed dolores dolores ut duo vero adipiscing. Et et dolor erat dolores takimata est laoreet qui no duo.." 
        },{ 
            user: {sender}, 
            datetime: "Date et heure",
            phrase: "Lorem ipsum dolor sit amet Sadipscing elitr sed dolores dolores ut duo vero adipiscing. Et et dolor erat dolores takimata est laoreet qui no duo.." 
        },{ 
            user: {user}, 
            datetime: "Date et heure",
            phrase: "User: ipsum dolor sit amet Sadipscing elitr sed dolores dolores ut duo vero adipiscing. Et et dolor erat dolores takimata est laoreet qui no duo.." 
        } ,{ 
            user: {sender}, 
            datetime: "Date et heure",
            phrase: "Lorem ipsum dolor sit amet Sadipscing elitr sed dolores dolores ut duo vero adipiscing. Et et dolor erat dolores takimata est laoreet qui no duo.." 
        } ,{ 
            user: {user}, 
            datetime: "Date et heure",
            phrase: "Lorem ipsum dolor sit amet Sadipscing elitr sed dolores dolores ut duo vero adipiscing. Et et dolor erat dolores takimata est laoreet qui no duo.." 
        } 
    ]
    return(
        <>
            <Menu/>
            <div className = "content">
                <div className="content_listMessage">
                    <ContentConversationMessage 
                        className = "content_general"
                    />
                </div>
                <div className="content_details_message">
                    <div className="content_details_message_title">
                        <span> {sender.name} </span>
                    </div>
                    <DetailsMessage
                        user = {user}
                        className="content_details_message_content"
                        conversation = {conversation}
                    />
                    <NewMessage/>
                </div>
            </div>
        </>
    )
}

export default ConversationMessage;