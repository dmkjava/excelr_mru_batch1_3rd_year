function FruitsApp(){
    const fruitsList =  ['Apples', 'Mangoes', 'Banana', 'Pine-Apple', 'Orranges', 'Grapes']


    return (
        <div>
            <h3>Fruits App</h3>

            {
                fruitsList.map((fruit, ind)=><h3 key={ind}>{fruit}</h3>)
            }
        </div>
    )
}

export default FruitsApp;