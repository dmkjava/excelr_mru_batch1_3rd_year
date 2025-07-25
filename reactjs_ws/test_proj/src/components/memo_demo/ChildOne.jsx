import { memo } from "react";
function ChildOne(props){
    console.log("ChildOne");
    console.log(props);
    return (
        <>
            <h3>Increment By 1 Result is: {props.countByOne}</h3>
        </>
    )
}
export default memo(ChildOne);
