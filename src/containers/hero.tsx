import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

import { getEndpoint } from "../helpers/endpoints"

export default function HeroContainer () {

    const { id } = useParams()
    const userID = id || ""

    const mainData  = useFetch(getEndpoint({route: 'main', userID}))
    //const activityData  = useFetch(getEndpoint({route: 'activity', userID}))
    //const sessionsData  = useFetch(getEndpoint({route: 'sessions', userID}))
    //const performanceData  = useFetch(getEndpoint({route: 'performance', userID}))

    return (
        <main>
            Age: {mainData.userInfos?.age}
            ID: {mainData.id}
        </main>
    )
}