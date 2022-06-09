import { useEffect, useState } from "react"

import { Route } from '../helpers/endpoints'

import mockFetchData from "../helpers/mockFetchData"

export interface FetchProps {
    route: Route, 
    endpoint: string,
}

interface ResponseData {
    [key: string]: any
}

interface FetchData {
    apiURL: string,
    endpoint: string
}

export default function useFetch({route, endpoint}: FetchProps) {

    const [responseData, setResponseData] = useState<ResponseData>({})

    /**
     * Fetch data with fetch browser API
     * @param {{apiURL: String, endpoint: String }}
    */
    function fetchData({apiURL, endpoint}: FetchData) {

        fetch(apiURL + endpoint)
            .then(response => response.json())
            .then(response => setResponseData(response.data))
            .catch(e => console.log(e))

    }

    useEffect(() =>  {

        const apiURL = process.env.REACT_APP_API_URL

        if (apiURL) {
            fetchData({apiURL, endpoint})
            return
        }
        mockFetchData({route, endpoint, setResponseData})

    }, [route, endpoint])

    return responseData

}