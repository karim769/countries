import Country from "../component/country"
export default function America(props){

const data=props.data.filter((element, i) => {

        return element.region==='Americas'
}
)

return(<div>
  {  

    <Country data={data} />    

 }
    
    
    </div>)

}