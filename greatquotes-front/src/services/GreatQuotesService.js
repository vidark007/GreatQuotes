const localDomain = "http://localhost:8080/api/v1";
const UNEXPECTED_ERROR_MESSAGE = "An unexpected error occurred while processing your request.";

class GreatQuotesService {
    constructor() {
        this.domain = localDomain;
    }

    async getQuotes(url) {
        try {
            const response = await fetch(this.domain + url);
            if (!response.ok) {
                throw new Error("Loading Problem");
            }
            else if(response.ok){
                const data = await response.json();
                const quoteList = data.map((quote) => {
                    return {
                        id: quote.id,
                        author: quote.author,
                        quote: quote.quote
                    }
                });
              //console.log((quoteList) )
                return quoteList ;
               //return this.request(url,method).then(res => res.json());
            }

        }
        catch (error) {
            console.log(error.message)
            return( Promise.reject( this.normalizeTransportError( error ) ) );
            //return error.message;
        }
    }
    get(url,id){
        const method = 'GET';
        if(id){
            url = `${url}/${id}`
        }
        return this.request(url,method).then(res => res.json());
    }

    normalizeTransportError( transportError ) {

        return({
            type: "TransportError",
            message: UNEXPECTED_ERROR_MESSAGE,
            rootCause: transportError
        });

    }
}export default GreatQuotesService;

/*const headers={
    "Accept": "application/json",
    "Content-typ": "application/json"
}*/

/*
function joinURL(baseURL, url) {
    return  `${baseURL}/${url}`;
}

class GreatQuotesService{
    constructor() {
        this.domain = "http://localhost:8080/api/v1/great-quotes/";
    }

    request(url, method="post",data=null){
        url = joinURL(this.domain,url);
        const options = {
            headers,
            method,
        }
        if(data){
            options.body = JSON.stringify({...data})
        }
        return fetch(url,options)
    }

    post(url,data){
        const method = 'POST';
        return this.request(url,method,data).then(res => res.json());
    }
    get(url,id){
        const method = 'GET';
        if(id){
            url = `${url}/${id}`
        }
        return this.request(url,method).then(res => res.json());
    }
    delete(url,id){
        const method = 'DELETE';
        if(id){
            url = `${url}/${id}`
        }
        return this.request(url,method).then(res => res.json());
    }
}export default GreatQuotesService;*/
