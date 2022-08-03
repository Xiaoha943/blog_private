import { useRoutes } from "react-router-dom"
import React,{lazy} from "react"
import Login from "../pages/Login"
import Layout from "../pages/Layout"

const Homepage =  lazy(()=>import("../pages/Homepage"))
//系统左侧菜单
export default ()=>{
    return useRoutes([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'',
            element:<Layout/>,
            children:[
                {
                    path:'homepage',
                    element:<Homepage/>
                }
            ]
        }
    ])
}