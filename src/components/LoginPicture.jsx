function LoginPicture(props){
    return (
    <div className={props.className}>
        <img 
            src = {props.image} 
            alt = {props.alt} 
        />
    </div>
    )
}

export default LoginPicture;