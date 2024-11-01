import { useState } from 'react';
import '../style/detailCountry.css';
import { useTheme } from './ThemeContext';

export default function DetailCountry(props){

const {theme}=useTheme();

const borders=props.borders?props.borders.map((item,i) => {

return <div className={theme}  key={i}>{item}</div>

}):<p>empty</p>


return (<div  className="detail-country">
    
    <img src={props.image} />
    <div>
    <h2>{props.name}</h2>
    <div className='detail-info'>
    <div>
    <p>Native Name:<span> {props.native}</span></p>
    <p>Population:<span> {props.population}</span></p>
    <p>Region:<span> {props.region}</span></p>
    <p>Sub Region:<span> {props.subRegion}</span></p>
    <p>Capital:<span> {props.capital}</span></p>
    </div>
    <div>
    <p>Top Level Domain: <span>{props.topLevelDomain}</span></p>
    <p>Currencies:<span> {getItemsToSpan(props.currencies)}</span></p>
    <p>Languages:<span> {getItemsToSpan(props.languages)}</span></p>
    </div>
    </div>
    <div className='borders-with-title'>
    <p>Border Countries:</p>
    <div className='borders-container'>
     {borders}
    </div>
    </div>
    </div>
    </div>    )

}


function getItemsToSpan(arr){

     let value=null;
    if(arr)

    value= arr.map((item,i) => {

        if(arr.length-1===i)
            return (<span key={i} >{item.name} </span>)

        return (<span key={i} >{item.name}, </span>)
    
    });

    else 
    value=<span>empty</span>

    return value ;

}