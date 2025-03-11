import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { RESTRO_INFO_API } from "../utils/constant.js";
import useRestaurantMenuDetails from "../utils/useRestaurantMenuDetails.js";
import RestaurantCategory from "./RestaurantCategory.js";

const RestaurantMenuDetails = () => {
  // const [resInfo, setresInfo] = useState(null);
  const { restId } = useParams(); // Get restaurant ID from URL

  const resInfo = useRestaurantMenuDetails(restId);
  const[showIndex, setShowIndex] = useState(0)
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

  //=================this going to use in custom hook
  // useEffect(() => {
  //   if (restId) {
  //     fetchMenu();
  //   }
  // }, [restId]); // Call API when restId changes

  // const fetchMenu = async () => {
  //   try {
  //     const response = await fetch(
  //       `${RESTRO_INFO_API}${restId}&catalog_qa=undefined&query=Pizza&submitAction=ENTER`
  //     );

  //     if (!response.ok) throw new Error("Failed to fetch menu");

  //     const json = await response.json();
  //     setresInfo(json?.data || {}); // Ensure resInfo is never null
  //   } catch (error) {
  //     console.error("Error fetching restaurant data:", error);
  //   }
  // };
  //=================this going to use in custom hook end

  if (!resInfo) return <Shimmer />;

  // const{name,avgRating,totalRatingsString,cloudinaryImageId,costForTwoMessage,cuisines} = resInfo?.cards[2]?.card?.card?.info
  // const{slaString,lastMileTravelString} = resInfo?.cards[2]?.card?.card?.info?.sla

  console.log(
    "Recommended Section",
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
      (card) => card?.card?.card?.title === "Recommended"
    )
  );

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories, "categories");

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    city,
    locality,
  } = resInfo?.cards?.[2]?.card?.card?.info;
  console.log(
    resInfo?.cards?.[2]?.card?.card?.info,
    "   resInfo?.cards?.[2]?.card?.card?.info;"
  );
  return (
    <div className="my-6">
      {/* <h1>{resInfo?.cards?.[2]?.card?.card?.info?.name || "N/A"}</h1> */}
      <h1 className="text-4xl font-bold text-center my-3">{name || "N/A"}</h1>
      <p className="text-center font-semibold m-4">
        <span>{locality || "N/A"}, </span>
        <span>{city || "N/A"}</span>
      </p>
      {/*Now Added dynamic accordion this is working one */}
      {/* <h2>Avg Rating: {avgRating || "N/A"}</h2>
      <h2>Total Ratings: {totalRatingsString || "N/A"}</h2>
      <h2>Cost: {costForTwoMessage || "N/A"}</h2>
      <h3>
        Cuisines:{" "}
        {cuisines?.join(", ") || "N/A"}
      </h3> */}

      {/*categories accordion*/}
      {/* {categories.map((category,index) => ( */}
      {categories.map((category) => (
        <RestaurantCategory
          data={category?.card?.card}
          key={category?.card?.card?.title}
          // showItems={index===showIndex ? true : false}
          // setShowIndex={()=> setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenuDetails;

//now working onclick on piza res
//https://www.swiggy.com/city/mumbai/the-bluebop-cafe-khar-west-rest303947?restaurant_id=303947&source=collection&query=Pizza

//just for restro
///https://www.swiggy.com/search?query=Ketki+Restaurant
//https://www.swiggy.com/city/mumbai/hotel-navgraha-ghatkopar-west-kurla-rest304403
