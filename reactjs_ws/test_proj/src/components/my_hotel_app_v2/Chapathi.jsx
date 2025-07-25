import { useEffect } from 'react';
import useTitle from './use_title';

function Chapathi(){

    // useEffect(()=>{
    //         document.title =  "Chapathi"
    //     }, []);
    useTitle("Chapathi");
    return (
        <div>
            <h3>Chapathi</h3>
            <img src={require('../../assets/images/hotel/chapathi.jpeg')} alt="" />
            <h3>70Rs</h3>
        </div>
    )
}

export default Chapathi;