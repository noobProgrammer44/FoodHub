import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
// import {Header} from "./components/Header";
import Header from "./components/Header";
import Body from "./components/Body"
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy,Suspense } from "react";
import { UserContext } from "./utils/Context";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart"
// import Grocery from "./components/Grocery";



//Chunking
//Code splitting
//dynamic loading
//lazy loading
//on demand loading

const Grocery=lazy(()=>import("./components/Grocery"))



const AppLayout = () => {
  
const [userName,setUserName]=useState(' ');
useEffect(()=>{
  const dataFromApi={
    name:'Amaan'
  }
  setUserName(dataFromApi.name);
},[])
  return (
    
    <Provider store={appStore}>

    {/* UserContext Provider */}
    <UserContext.Provider value={{loggedUser:userName,setUserName}}>
    <div className="app">
      {/* Header */}
      <Header />
      <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },{
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
        //fallback would run when the data is loading
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement:<Error/>
  },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render
(<RouterProvider router={appRouter}></RouterProvider>);
