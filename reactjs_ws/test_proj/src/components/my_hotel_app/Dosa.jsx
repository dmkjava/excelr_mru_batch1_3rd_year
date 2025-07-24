import { useEffect } from 'react';

function Dosa(){
    useEffect(()=>{
            document.title =  "Dosa"
        }, []);
    return (
        <div>
            <h3>Dosa</h3>
            <img src={require('../../assets/images/hotel/dosa.jpeg')} alt="" />
            <h3>60Rs</h3>
        </div>
    )
}
export default Dosa;