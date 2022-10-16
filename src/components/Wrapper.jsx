import "./Wrapper.css";


function Wrapper(props){
    const classes = props.className + " wrapper";
    return(
        <div>
     <div className={classes}>{props.children}</div>
        </div>
    )
}

export default Wrapper;