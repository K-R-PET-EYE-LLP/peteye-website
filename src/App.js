import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Aboutus from './Pages/AboutPage/Aboutus'
import Service from './Pages/ServicePage/Service';
import LandingPage from './Pages/LandingPage/LandingPage';
import SupportPage from './Pages/SupportPage/SupportPage';
import 'aos/dist/aos.css';
import GuidePage from './Pages/GuidePage/GuidePage';
import { useEffect } from 'react';
import Aos from 'aos';
const router = createBrowserRouter([
  {
    path: "/service",
    element: <Service/>,
  },
  {
    path: "/service/:screen",
    element: <Service/>,
  },
  {
    path: "/about/",
    element: <Aboutus/>,
  },
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/support",
    element: <SupportPage/>,
  },
  {
    path: "/guide",
    element: <GuidePage/>,
  },
  {
    path: "/guide/:section",
    element: <GuidePage/>,
  },
  // {
  //   path:"/",
  //   element:<Lheader/>
  // },
  


]);


function App() {
  useEffect(()=>{
    Aos.init();
},[])
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
