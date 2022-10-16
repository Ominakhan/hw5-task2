import "./Card.css";

function Card(props){
    return(
   <div>
    <div className="id">{props.username}<span>{props.id}</span></div>
    <div className="wallpaper">{props.wallpaper}</div>
    <div className="userInfo">{props.userInfo}</div>
 
   </div>
    )
}

export default Card;