import { useEffect, useState } from "react";

/**
 *
 * @param  url
 * @param  id
 * @param  dataExtractor
 * @param  setters
 */
export const useFetch = (url, id, dataExtractor, ...setters) => {
   const [data, setData] = useState(null);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      (async () => {
         try {
            let response;
            setIsLoading(true);
            if (id) {
               response = await fetch(`${url}/${id}`);
            } else {
               response = await fetch(url);
            }
            const parsedResponse = await response.json();
            setIsLoading(false);

            // extract data if function is provided
            if (dataExtractor) {
               const extractedData = dataExtractor(parsedResponse);
               setData(extractedData);
               setters?.forEach((func) => func(extractedData));
            } else {
               setData(parsedResponse);
               setters?.forEach((func) => func(parsedResponse));
            }
         } catch (error) {
            alert(error);
         } finally {
            setIsLoading(false);
         }
      })();
   }, []);

   return { data, isLoading, setData };
};
