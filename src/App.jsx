import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import { useEffect, useState } from "react";

import Primary from "./pages/primary";
import Detail from "./pages/detail";
import RootLayout from './pages/RootLayout'
import Africa from "./pages/africa";
import Main from "./pages/Main";
import America from "./pages/America";
import Asia from "./pages/Asia";
import Europe from "./pages/Europe";
import Oceania from "./pages/oceania";
import { ThemeProvider } from "./component/ThemeContext";

function App() {

  const [data,setData]=useState(null);


  useEffect(() => {

    fetch('../data.json')
    .then(res => res.json())
    .then(d => {setData(d)});


  },[])



  const router = createBrowserRouter(
    createRoutesFromElements(

      
      <Route path='/' element={<RootLayout />}>
      <Route path="/" element={<Primary data={data} />} > 
      <Route path="/" element={<Main data={data} />} /> 
     <Route path="africa" element={<Africa data={data} />} /> 
     <Route path="america" element={<America data={data} />} /> 
     <Route path="asia" element={<Asia data={data} />} /> 
     <Route path="europe" element={<Europe data={data} />} /> 
     <Route path="oceania" element={<Oceania data={data} />} /> 
      </Route>
      <Route path="detail" element={<Detail />} />
      </Route>
    )
  );

  return (

    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
