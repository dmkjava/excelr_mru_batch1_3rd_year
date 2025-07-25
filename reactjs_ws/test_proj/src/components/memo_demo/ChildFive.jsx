import { memo } from "react";

function ChildFive(props){
    console.log("ChildFive");
    console.log(props);
    return (
        <>
            <h3>Increment By 5 Result is: {props.countByFive}</h3>
        </>
    )
}
export default memo(ChildFive);
