function Button(props){
    const {text, className, icon} = props
    return(
        <>
            <button className = {className}>
                {text}
                <img src={icon}/>
            </button>
        </>
    )
}

export default Button;