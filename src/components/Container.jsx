import Card from "./Card";
import UserImg from "./UserImg";
import Wrapper from "./Wrapper"


function Container(props){
    return(
    <div className="container">
        {props.users.map((el)=>( <li key={el.id}>
    <div>
   <Wrapper className="wrapper-card">
        <UserImg {...el}/>
        <Card {...el}/>
    </Wrapper>
   </div>
    </li>
    ))}
    </div>
    )
}

export default Container;