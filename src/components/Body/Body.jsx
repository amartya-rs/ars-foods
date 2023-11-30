import React from "react";
import { Searchbox } from "../SearchBox/Searchbox";
import { Card } from "../Card/Card";
import "./body.css";

function Body() {
   return (
      <div className="body">
         <Searchbox />
         <div className="card-container">
            <Card />
         </div>
      </div>
   );
}

export { Body };
