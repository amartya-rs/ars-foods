import React, { useEffect, useState } from "react";
import "./searxhbox.css";

export function Searchbox({ width, setRestaurantData, allRestaurantData }) {
   const [search, setSearch] = useState("");

   useEffect(() => {
      setWidth();
   }, [width]);

   const setWidth = () => {
      if (width) {
         document.getElementsByClassName(
            "search-wrapper"
         )[0].style.width = `${width}%`;
      } else {
         document.getElementsByClassName("search-wrapper")[0].style.width =
            "100%";
      }
   };

   const searchHandler = (e) => {
      const searchTerm = e.target.value;
      console.log(searchTerm);
      // set all data when search term is empty
      if (!searchTerm) {
         setRestaurantData(allRestaurantData);
      }
      setSearch(searchTerm);

      const filteredBySearchTerm = allRestaurantData?.filter(({ info }) =>
         info.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setRestaurantData(filteredBySearchTerm);
   };

   return (
      <div className={`search-wrapper`}>
         <input
            className="search"
            type="text"
            placeholder="search..."
            onChange={searchHandler}
            value={search}
         />
      </div>
   );
}
