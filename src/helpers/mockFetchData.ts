import { defaultData, activityData, sessionsData, performanceData } from '../__mocks__/userData'
import { FetchProps } from '../hooks/useFetch'
import React from 'react'

interface MockFetchProps extends FetchProps {
    setResponseData: React.Dispatch<any>
}

/**
 * Returns array of data according to route
 * @param {{route: String, endpoint: String, setResponseDate: callback}}
 */
export default function mockFetchData ({route, endpoint, setResponseData} : MockFetchProps) {

    const userID = getUserIdFromEndpoint(endpoint)

    let responseData

    switch (route) {

        case 'main' : 
            responseData = defaultData.find(data => data.id === parseInt(userID))
            break
        
        case 'activity':
            responseData = activityData.find(data => data.userId === parseInt(userID))
            break

        case 'sessions':
            responseData = sessionsData.find(data => data.userId === parseInt(userID))
            break

        case 'performance':
            responseData = performanceData.find(data => data.userId === parseInt(userID))
            break
    }

    if (responseData) {
        setResponseData(responseData)
    }

}

/**
 * Find an integer with regex as userID
 * @param { String } endpoint
 */
function getUserIdFromEndpoint (endpoint : string) {
    const match = endpoint.match(/\d+/g)
    return match ? match[0] : ""
}