import { useParams } from "react-router-dom"
import useMockFetch from "../hooks/useMockFetch"

import { getEndpoint } from "../helpers/endpoints"

export default function HeroContainer () {

    const { id } = useParams()
    const userID = id || ""

    const mainData  = useMockFetch(getEndpoint({route: 'main', userID}))
    const activityData  = useMockFetch(getEndpoint({route: 'activity', userID}))
    const sessionsData  = useMockFetch(getEndpoint({route: 'sessions', userID}))
    const performanceData  = useMockFetch(getEndpoint({route: 'performance', userID}))

    return (
        <main>
            Age: {mainData.data.userInfos?.age}
        </main>
    )
}