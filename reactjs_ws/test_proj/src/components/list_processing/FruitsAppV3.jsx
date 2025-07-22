import FruitCard from "./FruitCard";
import FruitCardV2 from "./FruitCardV2";

function FruitsAppV3(){
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
            <h3>Fruits App using props Demo</h3>
            {
                fruitsList.map(fruit=>
                    <FruitCardV2 fruit={fruit} key={fruit.sno}></FruitCardV2>
                    
                )
            }
        </div>
    )
}
export default FruitsAppV3;