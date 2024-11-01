

import { Link } from 'react-router-dom'
import '../style/country.css'
import { useTheme } from './ThemeContext'

 export default function Country(props){

  const {theme}=useTheme();

const dataRendering= props.data?(props.data.map((element, i) => (

  <Link className={`country ${theme}`} key={i} state={element}  to={'../detail'} >
  <img src={element.flags.png} />
  <div>
  <h2 >{element.name}</h2>
  <p>population:<span>{element.population}</span></p>
  <p>Region:<span>{element.region}</span></p>
  <p>Capital:<span>{element.capital}</span></p>
  </div>
  </Link>))
):('loading...')

return (<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(18em,1fr))', gap:'4em'}}>{dataRendering}</div>)



}
