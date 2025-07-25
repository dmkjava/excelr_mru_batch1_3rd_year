
import { useState } from "react";
import Button from "./Button";

function UseCallBackDemo(){
    const [countByOne, setCountByOne] = useState(0);
    const [countByFive, setCountByFive] = useState(0);

    const incrementByOne = ()=>{
        setCountByOne (countByOne + 1);
    }
    const incrementByFive = ()=>{
        setCountByFive (countByFive + 5);
    }
    return (
        <div>
            <h3>Demo on useCallback() hook</h3>
            <div>
                <Button incrementBy = {incrementByOne}>Increment By One: {countByOne}</Button>
                <Button incrementBy = {incrementByFive}>Increment By Five: {countByFive}</Button>
            </div>
        </div>
    )
}

export default UseCallBackDemo;