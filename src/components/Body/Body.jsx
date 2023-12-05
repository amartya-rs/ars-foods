import React, { useState, useEffect } from "react";
import { Searchbox } from "../SearchBox/Searchbox";
import { Card } from "../Card/Card";
import { Shimmer } from "../Shimmer/Shimmer.jsx";
import { SWIGGY_API } from "../../utils/constants.js";
import "./body.css";

function Body() {
   const [restaurantData, setRestaurantData] = useState([]);

   useEffect(() => {
      (async () => {
         try {
            const data = await fetch(SWIGGY_API);
            const dataInJson = await data.json();
            const response =
               dataInJson?.data?.cards[5]?.card?.card?.gridElements
                  ?.infoWithStyle?.restaurants;
            setRestaurantData(response);
         } catch (error) {
            alert(error);
         }
      })();
   }, []);

   const filterByRatingHandler = () => {
      const filtedData = restaurantData.filter(
         (item) => item.info.avgRating > 4
      );
      setRestaurantData(filtedData);
   };

   return (
      <div className="body">
         <div className="filter-wrapper">
            <Searchbox width={80} />
            <button onClick={filterByRatingHandler}>
               Filter top restaurants
            </button>
         </div>
         <div className="card-container">
            {restaurantData.length <= 0 ? (
               <Shimmer />
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
