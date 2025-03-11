import { useEffect, useState } from "react";
import { RESTRO_INFO_API } from "../utils/constant.js";

const useRestaurantMenuDetails = (restId) => {
  
    const [resInfo, setresInfo] = useState(null);
  // useEffect(()=>{
  //   fetchMenu();
  // },[restId])

  // const fetchMenu = async () => {
  //   const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=442443&catalog_qa=undefined&query=Pizza&submitAction=ENTER")
  //   // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=" + restId +"&catalog_qa=undefined&query=Pizza&submitAction=ENTER")
  //   const json = await data.json();
  //   // console.log(json, "json");
  //   setresInfo(json.data)
  // }

  useEffect(() => {
    if (restId) {
      fetchMenu();
    }
  }, [restId]); // Call API when restId changes
  
  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `${RESTRO_INFO_API}${restId}&catalog_qa=undefined&query=Pizza&submitAction=ENTER`
      );

      if (!response.ok) throw new Error("Failed to fetch menu");

      const json = await response.json();
     
      setresInfo(json?.data || {}); // Ensure resInfo is never null
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };
  return resInfo;
};

export default useRestaurantMenuDetails;
