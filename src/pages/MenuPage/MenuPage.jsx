import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./menu-page.css";
import { useFetch } from "../../utils/custom hooks/useFetch";
import { MenuSection } from "../../components/MenuSection/MenuSection";

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
      resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
         (ele) => ele.card.card["@type"].includes(".ItemCategory")
      );
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
            {menu?.map((item) => (
               <MenuSection item={item} />
            ))}
         </div>
      </div>
   );
};
