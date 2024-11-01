import Country from "../component/country";

export default function Main(props){

    return( 
    
    <main>
    {
       
        <Country data={props.data} />

    }
    </main>
    
    )
     
    }