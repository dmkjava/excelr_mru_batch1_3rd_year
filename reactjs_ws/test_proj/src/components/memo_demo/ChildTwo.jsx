import { memo } from "react";

function ChildTwo(props){
    console.log("ChildTwo");
    console.log(props);
    return (
        <>
            <h3>Increment By 2 Result is: {props.countByTwo}</h3>
        </>
    )
}
export default memo(ChildTwo);
