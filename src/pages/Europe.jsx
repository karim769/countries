import Country from "../component/country"
export default function Europe(props){

const data=props.data.filter((element, i) => {

        return element.region==='Europe'
}
)

return(<div>
  {  

    <Country data={data} />    

 }
    
    
    </div>)

}