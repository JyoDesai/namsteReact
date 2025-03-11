import { useState } from "react";
import ItemList from "./ItemList";

// const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
const RestaurantCategory = ({ data }) => {
  console.log("RestaurantCategory", data);

  const[showItems, setShowItems ] = useState(false)

  const handleClick = () =>{
    console.log("click")
    setShowItems(!showItems);
  }
  // const handleClick1 = () =>{
  //   // console.log("click")
  //   setShowIndex();
  // }
  return (
    <div className="content-center">
     
      <div className="bg-emerald-50 shadow-2xl p-4 m-2 w-6/12 mx-auto">
       {/*Accordion header */}
        <div className="acc-header flex justify-between cursor-pointer" onClick={handleClick}>
        {/* <div className="acc-header flex justify-between cursor-pointer" onClick={handleClick1}> */}
          <span className="font-bold text-lg ">{data.title}({data.itemCards.length})</span>
          <span>⬇</span>
        </div>

         {/*Accordion body */}
       {/* <ItemList items={data.itemCards}/> */}

       {
        showItems && <ItemList items={data.itemCards}/>
       }
      </div>
      
    </div>
  );
};

export default RestaurantCategory;
