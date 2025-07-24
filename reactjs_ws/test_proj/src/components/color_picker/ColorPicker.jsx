import { useRef, useState } from 'react';
import './ColorPicker.css'
function ColorPicker(){
    const [colorChoice, setColorChoice] =  useState('');
    const boxRef = useRef();
    const colorHandler = (e)=>{
            setColorChoice(e.target.value)
            console.log(boxRef);
            boxRef.current.style.backgroundColor = colorChoice;
    }
    return (
        <div>
            <h3>Color Picker Demo using useRed() hook</h3>
            <div className='row'>
                <div className='col-6'>
                    <div className="color-preview-box"  ref={boxRef}
                        // style={{backgroundColor: colorChoice}}
                        re
                    >
                        <h3>Color Preview Box</h3>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='text-start'>
                        <label htmlFor="">Select Color: </label>
                        <input type="color" 
                            onChange={ colorHandler
                            }
                        />
            </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default ColorPicker;