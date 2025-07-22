import { useState } from "react";

function CouterAppV3(){
    let [count, setCount] =  useState(0);

    function increment (){
        // count ++; 
        setCount(count + 1);
        console.log("count=", count);
    }

    function decrement (){
        count --; 
        console.log("count=", count);
    }

    function reset (){
        count=0; 
        console.log("count=", count);
    }
    return (
        <div>
            <h3>Counter App - component re rendering demo</h3>

            <h3>Current count is: {count}</h3>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}
export default CouterAppV3;