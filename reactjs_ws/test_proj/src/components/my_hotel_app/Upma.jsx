import { useEffect } from 'react';

function Upma(){
    useEffect(()=>{
                document.title =  "Upma"
            }, []);
    return (
        <div>
            <h3>Upma</h3>
            <img src={require('../../assets/images/hotel/upma.jpeg')} alt="" />
            <h3>50Rs</h3>
        </div>
    )
}

export default Upma;