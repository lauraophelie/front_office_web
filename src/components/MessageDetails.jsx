import '../assets/scss/message.scss'

function MessageDetails(props){
    const {account, user, time, phrase} = props

    console.log("account: ",account);
    console.log("user: ", user);
    console.log("phrase: ", phrase);

    const sameUser = account && user && account.id === user.id

    const className = sameUser ? 'content_myMessage' : 'content_theirMessage'

    console.log(className);
    return(
        <div className = {className}>
            <div className="message_conversation_time">{time}</div>
            <div className="message_conversation_chat">{phrase}</div>
        </div>
    )
}

export default MessageDetails