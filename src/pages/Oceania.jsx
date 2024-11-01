import Country from "../component/country"
export default function Oceania(props){

const data=props.data.filter((element, i) => {

        return element.region==='Oceania'
}
)

return(<div>
  {  

    <Country data={data} />    

 }
    
    
    </div>)

}