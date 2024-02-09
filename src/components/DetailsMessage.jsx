import MessageDetails from './MessageDetails'

function DetailsMessage(props){
    const {className, conversation, user} = props
    return (
            <div className= {className}>
            {conversation.map((item) => (
                <MessageDetails
                    account = {user}
                    user = {item.user}
                    time = {item.datetime}
                    phrase = {item.phrase}
                />
            ))}
            </div>
    )
}

export default DetailsMessage