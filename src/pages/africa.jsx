import Country from "../component/country"
export default function Africa(props){

const data=props.data.filter((element, i) => {

        return element.region==='Africa'
}
)

return(
    
    <div>
  {  

    <Country data={data} />    

 }
    
    
    </div>)

}