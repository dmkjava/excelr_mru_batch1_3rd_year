import { useState } from "react";
import Component2 from "./Component2";
import CounterContext from "./CounterContext";

function Component1(){
    const [count, setCounter] = useState(0);
    return (
        <div >
            <h3>Component 1</h3>
            <div style={{backgroundColor: "cyan"}}>
                <h3>Cunter App</h3>
                <h3>Current Count is: {count}</h3>
                <div>
                    <button onClick={()=>setCounter(count + 1)}>Increase</button>
                    <button onClick={()=>setCounter(count - 1)}>Decrese</button>
                    <button onClick={()=>setCounter(0)}>Reset</button>
                </div>
            </div>
            <CounterContext.Provider value={count}>
                <Component2 ></Component2>
            </CounterContext.Provider>
            
        </div>
    )
}

export default Component1;