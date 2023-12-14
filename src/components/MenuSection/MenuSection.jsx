import React, { useState } from "react";
import { IMAGE_URL } from "../../utils/constants.js";
import UpArrow from "../../asset/MaterialSymbolsKeyboardArrowUpRounded.svg";
import DownArrow from "../../asset/MaterialSymbolsKeyboardArrowDownRounded.svg";
import "./menu-section.css";

export const MenuSection = ({ item }) => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div>
         <div className="menu-title" onClick={() => setIsOpen((prev) => !prev)}>
            <h2>
               {item?.card?.card?.title} ({item?.card?.card?.itemCards.length})
            </h2>
            {isOpen ? (
               <img src={DownArrow} alt="down arrow" />
            ) : (
               <img src={UpArrow} alt="up arrow" />
            )}
         </div>
         {isOpen &&
            item?.card?.card?.itemCards.map(({ card }) => (
               <div className="item" key={card?.info?.id}>
                  <div>
                     <h3 className="item-name">{card?.info?.name}</h3>
                     <span>
                        ₹{" "}
                        {card?.info?.price / 100 ||
                           card?.info?.defaultPrice / 100}
                     </span>
                  </div>
                  {card?.info?.imageId ? (
                     <div className="img-wrapper">
                        <img
                           className="item-img"
                           src={IMAGE_URL + card?.info?.imageId}
                           alt="food item"
                        />
                        <button className="add-btn add-btn-overlay">ADD</button>
                     </div>
                  ) : (
                     <button className="add-btn btn-only">ADD</button>
                  )}
               </div>
            ))}
      </div>
   );
};
