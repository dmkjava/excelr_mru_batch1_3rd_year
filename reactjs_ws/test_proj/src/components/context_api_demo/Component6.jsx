import CounterContext from "./CounterContext";

function Component6(){
    return (
        <div>
            <h3>Component 6</h3>
            <CounterContext.Consumer>
                {
                    (count)=><h3>Count is: {count}</h3>
                }
            </CounterContext.Consumer>
            
        </div>
    )
}

export default Component6;