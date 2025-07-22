
function FruitCard(props){
    // console.log(props);
    
    return (
        <div className="col-6 mx-auto bg-primary">
            <h3 key={props.fruit.sno}>{props.fruit.fruitName}</h3>
            <img src={require (`../../assets/images/fruits/${props.fruit.fruitImage}`)} alt="" />
            <h3>{props.fruit.price} <span style={{fontSize:"100px", }}>&#8377;/ {props.fruit.unit}</span></h3>
        </div>
    )
}

export default FruitCard;