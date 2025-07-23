import {useEffect, useState} from 'react';
import './store_container.css'
function FakeStoreApiEcommerseApp(){
    const [products, setProducts] = useState([]);
    const [categoriesList, setCategoriesList] =  useState([]);
    const [searchProductType, setSearchProductType] =  useState('');

    // fetching default products
    useEffect(()=>{
        fetch('https://fakestoreapi.in/api/products')
        .then(result=>result.json())
        .then(data=>{
            console.log("fetching data is success.");
            console.log(data);
            setProducts(data.products);
        })
    }, [])
// fetching the categories list
    useEffect(()=>{
        fetch('https://fakestoreapi.in/api/products/category')
        .then(result=>result.json())
        .then(data=>{
            console.log("fetching categories data is success.");
            console.log(data);
            if(data.status =='SUCCESS'){
                setCategoriesList(data.categories);
            }
        })
    }, [])

    const searchHandler = ()=>{
        // alert(searchProductType);
        setSearchProductType('');
        fetch('https://fakestoreapi.in/api/products/category?type='+searchProductType)
        // https://fakestoreapi.in/api/products/category?type=mobile
        .then(result=>result.json())
        .then(data=>{
            console.log("fetching data is success.");
            console.log(data);
            if(data.status == "BAD-REQUEST"){
                setProducts([]);
            }else
                setProducts(data.products);
        })
    }
    return (
        <div>
            <h3>Fakestore API Products</h3>
            <div className="row my-4">
                <div className="col-3 text-end">
                    <label>Enter Product Type:</label>
                </div>
                <div className="col-6">
                    {/* <input type="text" className="form-control"
                        value={searchProductType}
                        onChange={e=>setSearchProductType(e.target.value)}
                    />   */}
                    <select name="" id="" 
                        className='form-control'
                        style={{textTransform: "capitalize"}}
                        
                        onChange={e=>setSearchProductType(e.target.value)}
                    >
                        {
                            categoriesList.map(category=>{
                                return <option value={category} 
                                            key={category}
                                            style={{textTransform: "capitalize"}}
                                            >
                                        {category}
                                        </option>
                            })
                        }
                        {/* <option value="tv">tv</option>
                        <option value="audio">audio</option>
                        <option value="laptop">laptop</option>
                        <option value="mobile">mobile</option>
                        <option value="gaming">gaming</option>
                        <option value="appliances">appliances</option> */}
                    </select>
                </div>
                <div className="col-3 text-start">
                    <button className="btn btn-primary"
                        onClick = {searchHandler}
                    >Search Product</button>
                </div>
            </div>

            <div className='felx-container container'>
            {
                products.map(product=>{
                    return <div key={product.id} className='card' 
                                style={{maxWidth: "250px"}}>
                           <img src={product.image} 
                                alt="product img" 
                                className='card-img-top'
                           /> 
                           <div className='card-body'>
                            <h5 className='card-title'>{product.title}</h5>
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
export default FakeStoreApiEcommerseApp;