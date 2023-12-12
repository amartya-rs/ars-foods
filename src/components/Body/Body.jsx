import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Searchbox } from "../SearchBox/Searchbox";
import { Card } from "../Card/Card";
import { Shimmer } from "../Shimmer/Shimmer.jsx";
import { SWIGGY_API } from "../../utils/constants.js";
import { useFetch } from "../../utils/custom hooks/useFetch.js";
import "./body.css";

function Body() {
   // const [restaurantData, setRestaurantData] = useState([]);
   // const [isLoading, setIsLoading] = useState(false);
   const [allRestaurantData, setAllRestaurantData] = useState([]);

   const navigate = useNavigate();

   const extractRestaurantData = (data) => {
      return data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
         ?.restaurants;
   };

   const {
      data: restaurantData,
      isLoading,
      setData: setRestaurantData,
   } = useFetch(SWIGGY_API, null, extractRestaurantData, setAllRestaurantData);

   // useEffect(() => {
   //    (async () => {
   //       try {
   //          setIsLoading(true);
   //          const data = await fetch(SWIGGY_API);
   //          const dataInJson = await data.json();
   //          const response =
   //             dataInJson?.data?.cards[5]?.card?.card?.gridElements
   //                ?.infoWithStyle?.restaurants;
   //          setRestaurantData(response);
   //          setAllRestaurantData(response);
   //          setIsLoading(false);
   //       } catch (error) {
   //          alert(error);
   //       } finally {
   //          setIsLoading(false);
   //       }
   //    })();
   // }, []);

   return (
      <div className="body">
         <div className="filter-wrapper">
            <Searchbox
               width={80}
               allRestaurantData={allRestaurantData}
               setRestaurantData={setRestaurantData}
            />
         </div>
         <div className="card-container">
            {isLoading ? (
               <Shimmer />
            ) : restaurantData?.length === 0 ? (
               <h3 className="not-found">No restaurant found</h3>
            ) : (
               restaurantData?.map((item) => (
                  <Card
                     clickHandler={() =>
                        navigate(`/restaurant/${item.info.id}`)
                     }
                     key={item.info.id}
                     data={item}
                  />
               ))
            )}
         </div>
      </div>
   );
}

export { Body };
