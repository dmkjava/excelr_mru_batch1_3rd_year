import { useState } from 'react';
import './Box.css'
function TogglerApp(){
    const [toggler, setToggler] = useState(false);
    return (
        <div>
            <h3>Toggler App</h3>
            {toggler == true &&
                <div className='box'></div>
            }
            <div>
                <button onClick={()=>setToggler(false)}>Hide</button>
                <button onClick={()=>setToggler(true)}>Show</button>
            </div>
        </div>
    )
}

export default TogglerApp;