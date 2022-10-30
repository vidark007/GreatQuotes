import React, {useCallback, useState} from 'react';

function UseHttp() {
   const url ="http://localhost:8080/api/v1/great-quotes";

   const [isLoading,setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   const sendRequest = useCallback(async (requestConfig, applyDataFunc=null)=> {
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
         if(applyDataFunc!==null){
            applyDataFunc(data)
         }
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