import { useContext } from "react";
import CounterContext from "./CounterContext";
function Component6(){
    let count = useContext(CounterContext);
    return (
        <div>
            <h3>Component 6</h3>
            {
                <h3>Count is: {count}</h3>
            }
            {/* <CounterContext.Consumer>
                {
                    (count)=><h3>Count is: {count}</h3>
                }
            </CounterContext.Consumer> */}
            
        </div>
    )
}

export default Component6;