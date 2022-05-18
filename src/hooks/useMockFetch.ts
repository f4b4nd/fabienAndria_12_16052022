import { useEffect, useState } from "react"

import { Route } from '../helpers/endpoints'

import { defaultData, activityData, sessionsData, performanceData } from '../__mocks__/userData'

type DefaultData = {
    id: number,
    userInfos: {
        firstName: string,
        lastName: string,
        age: number,
    }
    todayScore?: number,
    keyData: {
        calorieCount: number, 
        proteinCount: number, 
        carbohydrateCount: number,
        lipidCount: number,
    }
    score?: number 
}

type ActivityData = {
    userId: number,
    sessions: { 
        day: string,
        kilogram: number,
        calories: number
    }[],
}


interface MockProps{
    route: Route, 
    endpoint: string,
}


export default function useMockFetch ({route, endpoint} : MockProps) {

    const [ responseData, setResponseData ] = useState({} as any)
    
    function mockFetch ({route, endpoint} : MockProps) {

        const userID = getUserID(endpoint)

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

    useEffect(() =>  {

        mockFetch({route, endpoint})

    }, [route, endpoint])

    return { data : responseData }

}

const getUserID = (endpoint : string) => {
    const match = endpoint.match(/\d+/g)
    return match ? match[0] : ""
}