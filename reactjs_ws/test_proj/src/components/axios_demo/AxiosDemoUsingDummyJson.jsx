import { useEffect, useState } from "react";
import axios from 'axios'
import './store_container.css'

function AxiosDemoUsingDummyJson(){
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(result=>{
            console.log('success block');
            console.log(result);
            setProducts(result.data.products);
        }) 
        .catch(err=>{
            console.log('failure block');
            console.log('fetching data is failed');
            console.log(err);
        }
        );
    }, [])
    return (
        <div>
            <h3>DummyJSON Products using axios </h3>
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
                            <h4 className='card-title'>{product.price}$ </h4>
                           </div>
                    </div>
                })
            }
                </div>
        </div>
    )
}

export default AxiosDemoUsingDummyJson;