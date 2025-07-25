import { useEffect } from 'react';
import useTitle from './use_title';

function Puri(){
    // useEffect(()=>{
    //             document.title =  "Puri"
    //         }, []);
    useTitle("Puri");
    return (
        <div>
            <h3>Puri</h3>
            <img src={require('../../assets/images/hotel/puri.jpeg')} alt="" />
            <h3>60Rs</h3>
        </div>
    )
}

export default Puri;