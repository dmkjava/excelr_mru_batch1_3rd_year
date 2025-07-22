import { useState } from "react";

function CounterApp(){
    const [count, setCounter] = useState(0);
    return (
        <div>
            <h3>Cunter App</h3>
            <h3>Current Count is: {count}</h3>
            <div>
                <button onClick={()=>setCounter(count + 1)}>Increase</button>
                <button onClick={()=>setCounter(count - 1)}>Decrese</button>
                <button onClick={()=>setCounter(0)}>Reset</button>
            </div>

            <div>
                <button onClick={()=>setCounter(count + 1)}>+</button>
                <span>{count}</span>
                <button onClick={()=>setCounter(count - 1)}>-</button>
            </div>
        </div>
    )
}
export default CounterApp;