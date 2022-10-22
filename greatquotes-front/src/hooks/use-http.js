import React, {useState,useCallback} from 'react';

function UseHttp(requestConfig, applyDataFunc) {

   const [quotes,setQuotes] = useState([]);
   const [isLoading,setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   const sendRequest = useCallback(async ()=> {
      setIsLoading(true);
      setError(null)
      try{
         const response = await fetch(
             requestConfig.url,
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
         /*const quoteList = data.map((quote)=>{
                return {
                   id: quote.id,
                   author: quote.author,
                   quote: quote.quote
                }
             }
         )
         setQuotes(quoteList);*/
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