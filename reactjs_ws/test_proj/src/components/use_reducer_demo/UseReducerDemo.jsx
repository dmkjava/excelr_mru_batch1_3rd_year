import { useReducer } from "react";

const initial_count = 10; 
function counterReducer (state, action){
    console.log("sate: ", state, " action: ", action);
    if(action == 'increment')
        return state + 1; 
    else if (action == 'decrement')
        return state - 1; 
    else if (action == 'reset')
        return 0; 
    else 
        return state;
}
function UseReducerDemo(){
    const [count, dispatch] = useReducer(counterReducer, initial_count)
    return (
        <div>
            <h3>Use Reducer Demo</h3>
            <div>
                <h3>Current Count is: {count}</h3>
            </div>
            <div>
                <button onClick={()=>dispatch('increment')}>Increase</button>
                <button onClick={()=>dispatch('decrement')}>Decrese</button>
                <button onClick={()=>dispatch('reset')}>Reset</button>
            </div>
        </div>
    )
}
export default UseReducerDemo;