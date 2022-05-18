import { useEffect, useState } from "react"

import { Route } from '../helpers/endpoints'

import { mockFetchData } from "../helpers/mockFetchData"

export interface FetchProps {
    route: Route, 
    endpoint: string,
}

export default function useFetch ({route, endpoint} : FetchProps) {

    const [ responseData, setResponseData ] = useState({} as any)
    
    function fetchData({apiURL, endpoint} : {apiURL: string, endpoint: string}) {
        
        fetch(apiURL + endpoint)
            .then(response => response.json())
            .then(response => setResponseData(response.data))
            .catch(e => console.log(e))
    }

    useEffect(() =>  {

        const apiURL = false //process.env.REACT_APP_API_URL

        if (apiURL) {
            fetchData({apiURL, endpoint})
            return
        }
        mockFetchData({route, endpoint, setResponseData})
        

    }, [route, endpoint])

    return responseData

}

