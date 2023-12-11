import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./menu-page.css";
import { IMAGE_URL } from "../../utils/constants";
import { useFetch } from "../../utils/custom hooks/useFetch";

export const MenuPage = () => {
   // const [resInfo, setResInfo] = useState();
   const { resId } = useParams();
   const MENU_API = `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.8374281732232&lng=91.28818150609732&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;

   const menuDataExtractor = (data) => {
      return data?.data;
   };
   const { data: resInfo, isLoading } = useFetch(
      MENU_API,
      null,
      menuDataExtractor
   );

   const menu =
      resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
         ?.card?.itemCards;
   const resData = resInfo?.cards?.[0]?.card?.card?.info;

   // useEffect(() => {
   //    (async () => {
   //       try {
   //          const data = await fetch(MENU_API);
   //          const parsedData = await data.json();
   //          setResInfo(parsedData?.data);
   //       } catch (error) {
   //          alert(error);
   //       }
   //    })();
   // }, []);

   return (
      <div className="menu-page">
         <h2>{resData?.name}</h2>
         <div className="menu-item-wrapper">
            {menu?.map(({ card }) => (
               <div className="item" key={card?.info?.id}>
                  <div>
                     <h3 className="item-name">{card?.info?.name}</h3>
                     <span>₹ {card?.info?.price / 100}</span>
                  </div>
                  <div>
                     <img
                        className="item-img"
                        src={IMAGE_URL + card?.info?.imageId}
                        alt="food item"
                     />
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};
