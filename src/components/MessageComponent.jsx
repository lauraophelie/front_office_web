import '../assets/scss/message.scss'

function MessageComponent(props){

    const {time, phrase, utilisateur} = props
    
    return(
        <div className="content_message_component">
            <div className='content_inline'>
                <div className="content_message_user">{utilisateur}</div>
                <div className='content_message_datetime'>{time}</div>
            </div>
            <div className="content_message_text">{phrase}</div>
        </div>
    )
}

export default MessageComponent;