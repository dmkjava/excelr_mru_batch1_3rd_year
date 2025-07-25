import { useState } from "react";
import ChildOne from "./ChildOne";
import ChildFive from "./ChildFive";
import ChildTwo from "./ChildTwo";
function MemoDemo(){
    const [countByOne, setCountByOne] =  useState(0);
    const [countByTwo, setCountByTwo] =  useState(0);
    const [countByFive, setCountByFive] =  useState(0);
    return (
        <div>
            <h3>Rerendering of Child Components Issue fixing with memo()</h3>
            <ChildOne countByOne={countByOne}></ChildOne>
            <ChildTwo countByTwo={countByTwo}></ChildTwo>
            <ChildFive countByFive={countByFive}></ChildFive>
            
            
            <div>
                <button 
                    onClick={()=>setCountByOne(countByOne + 1)}
                >
                    Increment By 1
                </button>
                <button 
                    onClick={()=>setCountByTwo(countByTwo + 2)}
                >Increment By 2</button>
                <button
                    onClick={()=>setCountByFive(countByFive + 5)}
                >Increment By 5</button>

            </div>
        </div>
    )
}

export default MemoDemo;