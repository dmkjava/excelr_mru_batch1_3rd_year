

function Button(props){
    console.log(props);
    
    return <>
        <button onClick={props.incrementBy}> {props.children[0]}-{props.children[1]}</button>
    </>
}

export default Button;