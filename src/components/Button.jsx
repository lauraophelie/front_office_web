function Button(props){
    const {text, className, icon} = props
    return(
        <>
            <button className = {className}>
                {text}
                <img width="20px" src={icon}/>
            </button>
        </>
    )
}

export default Button;