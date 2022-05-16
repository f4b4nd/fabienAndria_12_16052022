import { useEffect, useState } from "react"
import { usersDatas } from '../__mocks__/data'

interface UserData {
    data: {
        id: number; 
        userInfos: { 
            firstName: string; 
            lastName: string; 
            age: number; 
        }
        todayScore?: number ; 
        keyData: { 
            calorieCount: number; 
            proteinCount: number; 
            carbohydrateCount: number; 
            lipidCount: number; 
        }; 
        score?: number; 
    }
}

export default function useMockContent ({route, id} : {route: string, id: string}) {

    const [ data, setData ] = useState<UserData>({} as UserData)

    useEffect(() => {

        if (route === 'users') {

            const userData = usersDatas.find(userData => userData.data.id === parseInt(id)) || false

            if (userData) {
                setData(userData)
            }
        }

    }, [setData, route, id])

    return data

}