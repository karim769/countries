
import { Outlet } from "react-router-dom"
import Header from "../component/Header"

export default function RootLayout(){

    const style={
        paddingTop:'15vh',


    }

return(

    <div style={style} >
    <Header />
    <Outlet />
    </div>
)

}