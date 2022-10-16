import "./UserImg.css";

function UserImg(props){
    return(
        <div>
            <img className="img" src={props.profilePic} alt="img"/>
        </div>
    )
}

export default UserImg;