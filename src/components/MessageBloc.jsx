import MessageComponent from "./MessageComponent"

function MessageBloc(props){
    const {classname} = props
    const data =[
        { 
            user: "Nom utilisateur", 
            datetime: "Date et heure",
            phrase: "Lorem ipsum dolor sit amet Sadipscing elitr sed dolores dolores ut duo vero adipiscing. Et et dolor erat dolores takimata est laoreet qui no duo.." 
        },{ 
            user: "Nom utilisateur", 
            datetime: "Date et heure",
            phrase: "Lorem ipsum dolor sit amet Sadipscing elitr sed dolores dolores ut duo vero adipiscing. Et et dolor erat dolores takimata est laoreet qui no duo.." 
        },{ 
            user: "Nom utilisateur", 
            datetime: "Date et heure",
            phrase: "Lorem ipsum dolor sit amet Sadipscing elitr sed dolores dolores ut duo vero adipiscing. Et et dolor erat dolores takimata est laoreet qui no duo.." 
        } 
    ]
    return (
        <div className={classname}>
            {data.map((item) => (
                <MessageComponent
                    utilisateur = {item.user}
                    time = {item.datetime}
                    phrase = {item.phrase}
                />
            ))}
        </div>
    )
}

export default MessageBloc