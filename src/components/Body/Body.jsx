import React, { useState, useEffect } from "react";
import { Searchbox } from "../SearchBox/Searchbox";
import { Card } from "../Card/Card";
import { Shimmer } from "../Shimmer/Shimmer.jsx";
import { SWIGGY_API } from "../../utils/constants.js";
import "./body.css";

function Body() {
   const [restaurantData, setRestaurantData] = useState([]);
   const [allRestaurantData, setAllRestaurantData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      (async () => {
         try {
            setIsLoading(true);
            const data = await fetch(SWIGGY_API);
            const dataInJson = await data.json();
            const response =
               dataInJson?.data?.cards[5]?.card?.card?.gridElements
                  ?.infoWithStyle?.restaurants;
            setRestaurantData(response);
            setAllRestaurantData(response);
            setIsLoading(false);
         } catch (error) {
            alert(error);
         } finally {
            setIsLoading(false);
         }
      })();
   }, []);

   const filterByRatingHandler = () => {
      const filtedData = restaurantData.filter(
         (item) => item.info.avgRating > 4.1
      );
      setRestaurantData(filtedData);
   };

   return (
      <div className="body">
         <div className="filter-wrapper">
            <Searchbox
               width={80}
               allRestaurantData={allRestaurantData}
               setRestaurantData={setRestaurantData}
            />
            <button onClick={filterByRatingHandler}>
               Filter top restaurants
            </button>
         </div>
         <div className="card-container">
            {isLoading ? (
               <Shimmer />
            ) : restaurantData.length === 0 ? (
               <h3 className="not-found">No restaurant found</h3>
            ) : (
               restaurantData.map((item) => (
                  <Card key={item.info.id} data={item} />
               ))
            )}
         </div>
      </div>
   );
}

export { Body };
