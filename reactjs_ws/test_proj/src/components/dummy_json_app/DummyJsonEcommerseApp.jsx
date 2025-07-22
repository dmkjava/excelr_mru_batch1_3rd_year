import {useEffect, useState} from 'react';
import './store_container.css'
function DummyJsonEcommerseApp(){
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(result=>result.json())
        .then(data=>{
            console.log("fetching data is success.");
            console.log(data);
            setProducts(data.products);
        })
    }, [])
    return (
        <div>
            <h3>DummyJSON Products</h3>
            <div className='felx-container container'>
            {
                products.map(product=>{
                    return <div key={product.id} className='card' 
                                style={{maxWidth: "250px"}}>
                           <img src={product.images[0]} 
                                alt="product img" 
                                className='card-img-top'
                           /> 
                           <div className='card-body'>
                            <h3 className='card-title'>{product.title}</h3>
                            <h3> </h3>
                            <h3> </h3>
                            <h4 className='card-title'>{product.price}$ </h4>
                           </div>
                    </div>
                })
            }
                </div>
        </div>
    )
}
export default DummyJsonEcommerseApp;