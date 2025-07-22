import { useState } from "react";

function CounterAppV2(){
    const [count, setCounter] = useState(0);

    const increment = ()=>setCounter(count + 1);
    const decrement = ()=>setCounter(count - 1);
    const reset = ()=>setCounter(0);

    return (
        <div>
            <h3>Cunter App V2</h3>
            <h3>Current Count is: {count}</h3>
            <div>
                <button onClick={increment}>Increase</button>
                <button onClick={decrement}>Decrese</button>
                <button onClick={reset}>Reset</button>
            </div>

            <div>
                <button onClick={()=>setCounter(count + 1)}>+</button>
                <span>{count}</span>
                <button onClick={()=>setCounter(count - 1)}>-</button>
            </div>
        </div>
    )
}
export default CounterAppV2;