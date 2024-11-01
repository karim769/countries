import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import  {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'
import { useTheme } from "./ThemeContext"

export default function backButton(){

    const {theme}=useTheme()

    const style={
                border:'none',
                 padding:'0.6em 2em',
                fontWight:'600',
                fontSize:'1.5rem',
                textDecoration:'none',
                cursor:'pointer',
               
    }

    const divStyle={

        margin:'3em 0 4em 0',
        width:'fit-content',


    }

return <div  style={divStyle}>
<Link className={theme} style={style} to={'/'}><FontAwesomeIcon icon={faArrowLeftLong} /> Back</Link>
</div> 

}