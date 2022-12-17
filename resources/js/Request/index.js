import {baseURL} from "../constants";


export const request = {};

request.get = async (path, params) => {
    let response = await fetch(baseURL + path  + new URLSearchParams(params))
    if (response.status === 200 || response.status === 201 ) {
        return  await response.json();
    } else {
        let data = await response.json();

      return false;
    }
}



request.post = async (path,params) => {

    console.log(params)

    const ProjectRequestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    };

    let response = await fetch(baseURL + path ,ProjectRequestOptions)
    return await response.json()
}



request.getAll = async (path) => {
    var headers = {}

    let response = await fetch(baseURL+path,{
        method : "GET",
        mode: 'cors',
        headers: headers
    })

    if (response.status === 200 || response.status === 201 ) {

        return  await response.json();
    } else {
        let data = await response.json();

      return false;
    }
}


