import { useState } from "react";

function CouterAppV4(){
    let [count, setCount] =  useState(0);

    function increment (){
        setCount(count + 1);
        console.log("count=", count);
        console.log('hi');
        
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
            <h3>Counter App - Asynchronus execution Demo</h3>

            <h3>Current count is: {count}</h3>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}
export default CouterAppV4;