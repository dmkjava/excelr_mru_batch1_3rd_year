
import {NavLink} from 'react-router-dom'
import './HeaderMenu.css'
function HeaderMenu(){
    return (
        <header>
            <nav>
                {/* <span className='logo'>MyHotel</span> */}
                <NavLink className='logo' to="/home">MyHotelV2</NavLink>
                <ul>
                    <li>
                        <NavLink to="idly">Idly</NavLink>
                    </li>
                    <li>
                        <NavLink to="vada">Vada</NavLink>
                    </li>
                    <li>
                        <NavLink to="upma">Upma</NavLink>
                    </li>
                    <li>
                        <NavLink to="mysur-bonda">Mysur Bonda</NavLink>
                    </li>
                    <li>
                        <NavLink to="dosa">Dosa</NavLink>
                    </li>
                    <li>
                        <NavLink to="puri">Puri</NavLink>
                    </li>
                    <li>
                        <NavLink to="chapathi">Chapathi</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default HeaderMenu;