import Detils from "./Pages/Detils";
import Donation from "./Pages/Donation";
import ErrorPages from "./Pages/ErrorPages";
import Home from "./Pages/Home";
import Statistics from "./Pages/Statistics";
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
            },
            {
                path:'//:ids',
                loader: ()=>fetch('/data.json'),
                element:<Detils></Detils>
            },
            {
                path:"/donation",
                element:<Donation/>
            },
            {
                path:"/Statistics",
                element: <Statistics/>
            }
        ],
        errorElement: <ErrorPages/>
       }
 ])

 export default Router;