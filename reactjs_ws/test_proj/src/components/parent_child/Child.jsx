
function Child ({count=5}){
    return <div style={{background: "yellow", padding: "30px"}}>
        <h3>Child Component</h3>
        <h3>{count}</h3>
    </div>
}
export default Child;