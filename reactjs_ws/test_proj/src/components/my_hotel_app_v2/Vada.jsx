import { useEffect } from 'react';
import useTitle from './use_title';

function Vada(){
    // useEffect(()=>{
    //             document.title =  "Vada"
    //         }, []);
    useTitle("Vada");
    return (
        <div>
            <h3>Vada</h3>
            <img src={require('../../assets/images/hotel/vada.jpeg')} alt="" />
            <h3>60Rs</h3>
        </div>
    )
}

export default Vada;