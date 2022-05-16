import { useEffect, useState } from "react"

import { defaultDatas } from '../__mocks__/userData'
import { Route, getUserIDFromEndpoint } from '../helpers/endpoints'

interface DefaultData {    
    id: number; 
    userInfos: { 
        firstName: string; 
        lastName: string; 
        age: number; 
    }
    todayScore?: number; 
    keyData: { 
        calorieCount: number; 
        proteinCount: number; 
        carbohydrateCount: number; 
        lipidCount: number; 
    };
    score?: number; 
}

export default function useMockContent ({route, endpoint} : {route: Route, endpoint: string}) {

    const [ data, setData ] = useState<DefaultData>({} as DefaultData)

    useEffect(() => {

        const userID = getUserIDFromEndpoint(endpoint)

        if (route === 'default') {

            const mainData = defaultDatas.find(data => data.id === parseInt(userID))

            if (mainData) {
                setData(mainData)
            }
        }

    }, [setData, route, endpoint])

    return {data}

}

