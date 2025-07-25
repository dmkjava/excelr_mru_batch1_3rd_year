import { useEffect } from 'react';
import useTitle from './use_title';

function Idly(){
    // useEffect(()=>{
    //     document.title =  "Idly"
    // }, []);
    useTitle("Idly");
    return (
        <div>
            <h3>Idly</h3>
            <img src={require('../../assets/images/hotel/idly.jpeg')} alt="" />
            <h3>50Rs</h3>
        </div>
    )
}

export default Idly;