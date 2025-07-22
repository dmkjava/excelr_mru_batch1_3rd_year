import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import Idly from "./Idly";
import Vada from "./Vada";
import Chapathi from "./Chapathi";
import Puri from "./Puri";
import Dosa from "./Dosa";
import Upma from "./Upma";
import MysurBonda from "./MysurBonda";

function MyHotelApp(){
    return (
        <div>
            <BrowserRouter>
                <HeaderMenu></HeaderMenu>
                <Routes>
                    <Route path="/idly" element={<Idly></Idly>}></Route>
                    <Route path="/vada" element={<Vada></Vada>}></Route>
                    <Route path="/upma" element={<Upma></Upma>}></Route>
                    <Route path="/mysur-bonda" element={<MysurBonda></MysurBonda>}></Route>
                    <Route path="/dosa" element={<Dosa></Dosa>}></Route>
                    <Route path="/puri" element={<Puri></Puri>}></Route>
                    <Route path="/chapathi" element={<Chapathi></Chapathi>}></Route>
                    <Route path="/idly" element={<Idly></Idly>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MyHotelApp;