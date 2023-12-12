import { useState, useEffect } from "react";

export const useCheckOnline = () => {
   const [onlineStatus, setOnlineStatus] = useState(true);

   useEffect(() => {
      window.addEventListener("online", () => {
         setOnlineStatus(true);
      });

      window.addEventListener("offline", () => {
         setOnlineStatus(false);
      });
      return () => {
         window.removeEventListener("online");
         window.removeEventListener("offline");
      };
   }, []);

   return onlineStatus;
};
