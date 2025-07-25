import { useEffect } from 'react';
import useTitle from './use_title';

function Dosa(){
    // useEffect(()=>{
    //         document.title =  "Dosa"
    //     }, []);
    useTitle("Dosa");
    return (
        <div>
            <h3>Dosa</h3>
            <img src={require('../../assets/images/hotel/dosa.jpeg')} alt="" />
            <h3>60Rs</h3>
        </div>
    )
}
export default Dosa;