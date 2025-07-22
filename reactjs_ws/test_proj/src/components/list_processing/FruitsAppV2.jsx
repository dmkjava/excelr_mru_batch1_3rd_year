function FruitsAppV2(){
    const fruitsList =  [
        {
            sno: 101,
            fruitName:'Apples', 
            fruitImage: 'apples.jpeg',
            unit: 'Kg',
            price: 290,
        },
        {
            sno: 102,
            fruitName:'Mangoes', 
            fruitImage: 'mangoes.jpeg',
            unit: 'Kg',
            price: 80,
        },
        {
            sno: 103,
            fruitName:'Banana', 
            fruitImage: 'bananas.jpeg',
            unit: 'Dz',
            price: 60,
        },
        {
            sno: 104,
            fruitName:'Pine-Apple', 
            fruitImage: 'pine-apples.jpeg',
            unit: 'Pc',
            price: 60,
        },
        {
            sno: 105,
            fruitName:'Orranges', 
            fruitImage: 'oranges.jpeg',
            unit: 'Dz',
            price: 200,
        },
        {
            sno: 106,
            fruitName:'Grapes', 
            fruitImage: 'grapes.jpeg',
            unit: 'Kg',
            price: 240,
        },
        
      ]
    return (
        <div>
            <h3>Fruits App V2</h3>

            {
                fruitsList.map(fruit=><div className="col-6 mx-auto bg-primary">
                        <h3 key={fruit.sno}>{fruit.fruitName}</h3>
                        <img src={require (`../../assets/images/fruits/${fruit.fruitImage}`)} alt="" />
                        <h3>{fruit.price} <span style={{fontSize:"100px;"}}>&#8377;/ {fruit.unit}</span></h3>
                    </div>
                )
            }
        </div>
    )
}

export default FruitsAppV2;