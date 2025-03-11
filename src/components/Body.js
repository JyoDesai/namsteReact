// import restList from "../utils/mockData";
import React from "react";
import RestaurantCard, {withPromotedLabel} from "../components/RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

  // let [listOfRestaurants, setlistOfRestaurants] = useState([ ]) 
  // let [listOfRestaurants, setlistOfRestaurants] = useState(restList)
  let [listOfRestaurants, setlistOfRestaurants] = useState([])
  let [filterListOfRestaurants, setfilterListOfRestaurants] = useState([])
  let [searchText, setsearchText] = useState("")

  const RestaurantPromotedCard = withPromotedLabel(RestaurantCard)

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    // const data1 = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&collection=83644&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    const json = await data.json();

    //this is trial console log
    json.data.cards.slice(2).forEach((card) => {
      if (card.card.card.info) {
          console.log(card.card.card.info,"vinaya-------");
      }
    });  

    //this is filter just for take data from 3rd cards
    const filteredCards = json.data.cards.slice(2).map(
      (card) => card.card.card.info
    ).filter(Boolean);

    



    setlistOfRestaurants(filteredCards);
    setfilterListOfRestaurants(filteredCards);
    // console.log(listOfRestaurants.data.cards.card.card.imageGridCards.info.entityType)


    //other api call 
    // setlistOfRestaurants(json?.data?.cards[5]?.card?.gridElements?.infoWithStyle?.restaurants)

    
  }

  // if(listOfRestaurants.length === 0){
  //   return <Shimmer />;
  // }




  console.log("listOfRestaurants data", listOfRestaurants)

  const onlineStatus = useOnlineStatus();
  if(onlineStatus===false){
    return(
      <h1>Sorry but your net if off</h1>
    )
  }
  return listOfRestaurants.length === 0 ? ( <Shimmer />) : (
    <div className="body-layout">

      <div className="search">
        <input type="text" data-testid="searchInput" placeholder="search here" value={searchText}
        onChange={(e)=> setsearchText(e.target.value)} className="border-2 mr-2 m-4 p-1"/>

        {/* <button onClick={() => {
          const filteredRestro =  listOfRestaurants.filter(
            (res) => res.name === searchText

           
          )
          console.log("filteredRestro", filteredRestro)
          setlistOfRestaurants(filteredRestro);


        }}>Search</button> */}
          <button 
    onClick={() => {
      const filteredRestro = listOfRestaurants.filter(
        (res) => res.name.toLowerCase().includes(searchText.toLowerCase()) // Case-insensitive and partial match
        // (res) => res.name.includes(searchText) // Case-insensitive and partial match
      );
      setfilterListOfRestaurants(filteredRestro); // Update the state with filtered results
    }}
  >
    Search
  </button>
      </div>


      <div className="filter" >
        {/* <button className="filter-btn" onClick={() => {
          // listOfRestaurants = listOfRestaurants.filter(
          fixList = listOfRestaurants.filter(
            // (res) => res.data.rating > 3
            (res) => res.avgRating > 4.1

          );
          // console.log("fixList data", fixList)

          setlistOfRestaurants(fixList);
          // console.log(setlistOfRestaurants(fixList), "filtered data")

          // console.log(listOfRestaurants, "console log of listOfRestaurants")
          // console.log("filter button")

        }}>
          Filter Button
        </button> */}
        {/* <button  className="filter-btn bg-amber-700 p-2 m-4" onClick={() => { */}
        <button  className=" bg-emerald-50 p-2 m-4" onClick={() => {
  const fixList = listOfRestaurants.filter(
    (res) => Number(res.avgRating) > 4.3
  );

  // Update the filtered list, as UI is rendering filterListOfRestaurants
  setfilterListOfRestaurants(fixList);
}}>
  Filter: Top rated Restaurant
</button>

      </div>
      {/* <div className="res-container"> */}
      <div className="flex flex-wrap p-4">
        {/* <RestaurantCard restData= {listOfRestaurants[0]}/>
          <RestaurantCard restData= {listOfRestaurants[1]}/> */}
        {
          filterListOfRestaurants.map((restaurant) =>
             //now this card without promoted label start 
            //  <Link key={restaurant.id} to={"/restaurant/"+restaurant.id} className="mb-4"><RestaurantCard  restData={restaurant} /></Link>
          // <RestaurantCard key={restaurant.id} restData={restaurant} />

          //now this card with promoted label start
          <Link key={restaurant.id} to={"/restaurant/"+restaurant.id} className="mb-4">
           {
            restaurant.promoted ?<RestaurantPromotedCard  restData={restaurant} /> :<RestaurantCard  restData={restaurant} />
           } 
            </Link>
          //now this card with promoted label end


          )
          
        }
        {/* <RestaurantCard restData= {resObj}/> */}
        {/* <RestaurantCard resName="KFC food" cuisine="burger"/> */}

      </div>
    </div>



  )
}

export default Body;


        {/*API using from below url
  
  https://www.swiggy.com/collections/83644?collection_id=83644&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2*/}
