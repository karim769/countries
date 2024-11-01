import Country from "../component/country"
export default function Asia(props){

const data=props.data.filter((element, i) => {

        return element.region==='Asia'
}
)

return(<div>
  {  

    <Country data={data} />    

 }
    
    
    </div>)

}