import { useState } from "react";

function Child(props){
    const [count, setCount] = useState(0);

    console.log("props: ");
    console.log(props);
    const increment = ()=>{
        document.title ="hi"
        setCount(count + 1);
        props.getIncrement(count + 1);
    }
    return (
        <div style={{background:"yellow", padding: "20px"}}>
            <h3>Child component</h3>
            <div>
                <h3>Current Count is: {count}</h3>
            </div>
            <div>
                <button onClick={increment} className="btn btn-primary">
                    Increment
                </button>
            </div>
        </div>
    )
}

export default Child;