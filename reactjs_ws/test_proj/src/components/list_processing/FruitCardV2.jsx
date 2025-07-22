
function FruitCardV2(props){
    // console.log(props);
    
    return (
        <div className="card bg-primary mx-auto my-5" style={{maxWidth:"250px"}}>
            <img className="card-img-top" 
                src={require (`../../assets/images/fruits/${props.fruit.fruitImage}`)} 
                alt="" style={{maxHeight:"150px"}}/>
            <div className="card-body">
                <h3 className="card-title" key={props.fruit.sno}>{props.fruit.fruitName}</h3>
                <h3 className="card-text">
                    {props.fruit.price} 
                    <span style={{fontSize:"20px", }}>&#8377;/ {props.fruit.unit}</span>
                </h3>
            </div>
            
            
            
        </div>
    )
}

export default FruitCardV2;