import { useCallback, useMemo, useState } from "react";
import Button from "./Button";
function UseMemoDemo(){
    const [countByOne, setCountByOne] = useState(0);
    const [countByFive, setCountByFive] = useState(0);
   
    const incrementByOne =  useCallback(()=>{
        setCountByOne (countByOne + 1);
    }, [countByOne])

    const incrementByFive = useCallback(()=>{
        setCountByFive (countByFive + 5);
    }, [countByFive])
 
    const isEven =    useMemo(()=>{
        for(let i=1; i<=999999999; i++);
        for(let i=1; i<=999999999; i++);
        for(let i=1; i<=999999999; i++);
        return countByOne%2 == 0
    }, [countByOne])
    return (
        <div>
            <h3>Demo on useMemo() hook</h3>
            <div>
                <h3>Increment By One is currently: {isEven ? 'Even': "Odd"}</h3>
                <Button count={countByOne} incrementBy = {incrementByOne}>
                    Increment By One: 
                </Button>
                <Button count={countByFive} incrementBy = {incrementByFive}>
                    Increment By Five:
                </Button>
            </div>
        </div>
    )
}

export default UseMemoDemo;