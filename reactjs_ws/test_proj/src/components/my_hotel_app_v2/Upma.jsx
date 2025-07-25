import { useEffect } from 'react';
import useTitle from './use_title';

function Upma(){
    // useEffect(()=>{
    //             document.title =  "Upma"
    //         }, []);
    useTitle("Upma");
    return (
        <div>
            <h3>Upma</h3>
            <img src={require('../../assets/images/hotel/upma.jpeg')} alt="" />
            <h3>50Rs</h3>
        </div>
    )
}

export default Upma;