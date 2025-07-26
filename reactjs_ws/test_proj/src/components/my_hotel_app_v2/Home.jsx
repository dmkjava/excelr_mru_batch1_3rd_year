import { useEffect } from 'react';
import useTitle from './use_title';

function Home(){
    
    useTitle("MyZomoto");
    return (
        <div>
            <h3>Home</h3>
            <img src={require('../../assets/images/hotel/hotel_building.jpeg')} alt="" />
            <h3>We are providing services since 1845</h3>
            <h3>We are making all food items with organic materials 
                and with higenik methodologies using
            </h3>
        </div>
    )
}

export default Home;