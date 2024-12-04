import { getUserData } from "../utils/userUtils.js";

export const request = async (method, url, data) => {
    let requestOptions = {};
    const { accessToken } = getUserData();

    if(data) {
        requestOptions.headers = {
            'Content-Type': 'application/json'
        };

        requestOptions.body = JSON.stringify(data);
    }

    if(accessToken) {
        requestOptions.headers = {
            ...requestOptions.headers,
            'X-Authorization': accessToken,
        }
    }

    // if (accessToken) {
    //     requestOptions.headers['X-Authorization'] = accessToken;
    // }

    if(method != 'GET'){
        requestOptions.method=method;
    }

    const response = await fetch(url, requestOptions );

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
    }

    if (response.status == 204) {
        return;
    }

    const result = await response.json();
    
    return result;
}