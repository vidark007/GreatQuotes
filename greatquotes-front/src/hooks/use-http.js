import React, {useState,useCallback} from 'react';

function UseHttp() {
   const url ="http://localhost:8080/api/v1/great-quotes";

   const [quotes,setQuotes] = useState([]);
   const [isLoading,setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   const sendRequest = useCallback(async (requestConfig, applyDataFunc)=> {
      setIsLoading(true);
      setError(null)
      try{
         const response = await fetch(
             url+requestConfig.url,
             {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
             }
         );
         if(!response.ok){
            throw new Error("Loading Problem");
         }

         const data = await response.json();

         //Callback Func
         applyDataFunc(data)
      }
      catch (error ){
         setError(error.message || 'Something went wrong!');
      }
      setIsLoading(false);
   },[]);

   return{
      isLoading : isLoading,
      error : error,
      sendRequest : sendRequest
   }
}

export default UseHttp;