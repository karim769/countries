import '../style/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { useTheme } from './ThemeContext'


export default function Header(){

    const {theme,toggleTheme}=useTheme();
    
return( 

<header className={theme}>
<h2>Where in the world ?</h2>
<div onClick={() => toggleTheme()}>
<FontAwesomeIcon icon={faMoon} />
<span>Dark Mode</span>
</div>
</header>

)


}