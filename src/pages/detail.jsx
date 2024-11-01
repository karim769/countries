import { useLocation } from "react-router-dom";
import BackButton from "../component/BackButton";
import DetailCountry from "../component/DetailCountry";
import { useTheme } from "../component/ThemeContext";

export default function Detail(){

const {theme}=useTheme();

const location=useLocation();

const item =location.state;

const style={

    padding:'1.5em',

}

return(
    
    <div className={`background-${theme}`} style={style}>
        <BackButton />
        <DetailCountry 
        
        name={item.name}
        image={item.flags.svg}
        native={item.nativeName}
        population={item.population}
        region={item.region}
        subRegion={item.subregion}
        capital={item.capital}
        topLevelDomain={item.topLevelDomain}
        currencies={item.currencies}
        languages={item.languages}
        borders={item.borders}
        
        />
        
    </div>

)

}