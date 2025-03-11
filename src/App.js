import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUS from "./components/ContactUS";
import Error from "./components/Error";
import RestaurantMenuDetails from "./components/RestaurantMenuDetails"

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// import Grosery from "./components/Grosery";

const Grosery  = lazy(()=>import("./components/Grosery"));
//React.createElement == React Js object == html element

// const heading = React.createElement("h1", {}, "Namste React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     "this is my child",
//     React.createElement("h1", {}, "this is h1 tag"),
//     React.createElement("h2", {}, "this is h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "this is h1 tag"),
//     React.createElement("h2", {}, "this is h2 tag"),
//   ]),
// ]);

// console.log(parent);

//jsx header
// const jsxHeader = <h1>This is heading from React JSX 10</h1>;



//functional component

// const HeadingComponent = () => {
//   return <h1>This is my functional component 1</h1>;
// };

// const HeadingComponent1 = () => (
//   <div className="parent">
//     {jsxHeader}
//     <HeadingComponent />
//   <h1>This is my functional component 2</h1>
//   </div>
// );



//food delivery app






// const resObj = 
//   {
//    resName: "Meghana Foods",
//    cuisine: "Chinese",
//    rating: "4",
//    minutes: "30"
//   }
 


  


const AppLayout = () =>{
  return(
    <Provider store={appStore}>
    <div className="parent-div">
      <Header />
      <Outlet />
      {/* <Body /> */}
    </div>
    </Provider>
  )
}

const AppRoute = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    errorElement: <Error />,
    children:
      [
        {
          path: "/",
          element: <Body />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact-us",
          element: <ContactUS />
        },
        {
          path: "/grocery",
          element: 
          <Suspense fallback={<h1>Loading Grocery</h1>}><Grosery /></Suspense>
        },
        {
          path: "/restaurant/:restId",
          element: <RestaurantMenuDetails />
        },
        {
          path: "/cart",
          element: <Cart />
        }
      ]
    

  },

])

const HeadingComponent2 = () => <h1>This is my functional component 3</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeader);
// root.render(<AppLayout />);
root.render(<RouterProvider router={AppRoute} />);

//link am using for fetch data
//https://www.swiggy.com/collections/83644?collection_id=83644&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2
