const headers={
    "Accept": "application/json",
    "Content-typ": "application/json"
}

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
}export default GreatQuotesService;