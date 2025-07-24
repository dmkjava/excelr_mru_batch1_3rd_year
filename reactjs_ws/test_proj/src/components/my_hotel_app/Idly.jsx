import { useEffect } from 'react';

function Idly(){
    useEffect(()=>{
        document.title =  "Idly"
    }, []);
    return (
        <div>
            <h3>Idly</h3>
            <img src={require('../../assets/images/hotel/idly.jpeg')} alt="" />
            <h3>50Rs</h3>
        </div>
    )
}

export default Idly;