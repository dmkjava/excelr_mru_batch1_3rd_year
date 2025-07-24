import { useEffect } from 'react';

function MysurBonda(){
    useEffect(()=>{
            document.title =  "MysurBonda"
        }, []);
    return (
        <div>
            <h3 className='text-center'>Mysur Bonda</h3>
            <img src={require('../../assets/images/hotel/mysur_bonda.jpeg')} alt="" />
            <h3>40Rs</h3>
        </div>
    )
}

export default MysurBonda;