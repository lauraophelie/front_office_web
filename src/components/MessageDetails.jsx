import '../assets/scss/message.scss'

function MessageDetails(props){
    const {account, user, time, phrase} = props

    console.log("account: ",account);
    console.log("user: ", user);
    console.log("phrase: ", phrase);

    const sameUser = account === user.user

    const className = sameUser ? 'message_myMessage' : 'message_theirMessage'

    console.log(className);
    return(
        <div className = {className}>
            <div className= "time">{time}</div>
            <div className= "text">{phrase}</div>
        </div>
    )
}

export default MessageDetails