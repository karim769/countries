import { useState } from 'react';
import '../style/topbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';

export default function TopBar(props){

    const {theme}=useTheme();

    const navigate=useNavigate();
    const [hidden,setHidden]= useState('menu-hidden');


    function displayMenu(){

        if(hidden==='menu-hidden')
            setHidden('menu-visible');
        else 
        setHidden('menu-hidden');
    }

    const [inputValue,setInputValue]=useState('');
    function handleChange(e){

    setInputValue(e.target.value);

    }

    function search(){

        if(inputValue){

          const str= capitalizeFirstLetter(inputValue); 
         const item= props.data.find(o => o.name===str);
         navigate('detail',{state:item});

        }

    }

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      }
      

    return( 
    
    <section >

    <div className={theme}>
    <FontAwesomeIcon style={{cursor:'pointer'}} onClick={search} icon={faMagnifyingGlass} />
    <input className={theme} onChange={(e) => handleChange(e)} type="text" placeholder="Search for a country.." />
    </div>
    <div className={theme}>
    <p>Filter by Region</p>
    <div className={`arrow ${theme}`} onClick={displayMenu}></div>
    <div className={hidden}>
    <ul>
    <li><Link className={theme} to="africa">Africa</Link></li>
    <li><Link className={theme} to='america'>America</Link></li>
    <li><Link className={theme} to='asia'>Asia</Link></li>
    <li><Link className={theme} to='europe'>Europe</Link></li>
    <li><Link className={theme} to='oceania'>Oceania</Link></li>
    </ul>
    </div>
    </div>  
    </section>
 
    )
    
    
    }