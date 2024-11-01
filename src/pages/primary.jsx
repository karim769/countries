
import { useTheme } from "../component/ThemeContext";
import TopBar from "../component/TopBar";
import {  Outlet } from 'react-router-dom';

export default function Primary (props){

   const {theme}=useTheme();

    const style={

        padding:'0 4em',
        
    }

return(

    <div style={style} className={`background-${theme}`}>
    <TopBar data={props.data} />

    <Outlet/>
       
    </div>
)

}



