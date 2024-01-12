import Detils from "./Pages/Detils";
import ErrorPages from "./Pages/ErrorPages";
import Home from "./Pages/Home";
import MainLayout from "./components/MainLayout";
import { createBrowserRouter } from "react-router-dom";

 const Router = createBrowserRouter([
       {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                loader:()=>fetch('/data.json'),
                element:<Home/>
            },{
                path:'//:ids',
                loader: ()=>fetch('/data.json'),
                element:<Detils></Detils>
            }
        ],
        errorElement: <ErrorPages/>
       }
 ])

 export default Router;