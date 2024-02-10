function MessageTitle(props){
    const {nombre , className} = props;

    return(
        <div className = {className}>
            Conversation ({nombre})
        </div>
    )
}

export default MessageTitle;