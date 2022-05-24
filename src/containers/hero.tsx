import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

import { getEndpoint } from "../helpers/endpoints"

import RadarChart from "../components/radarchart"
import InfoCardContainer from "./infocard"

export default function HeroContainer () {

    const { id } = useParams()
    const userID = id || ""

    const defaultData  = useFetch(getEndpoint({route: 'main', userID}))
    const performanceData  = useFetch(getEndpoint({route: 'performance', userID}))
    //const activityData  = useFetch(getEndpoint({route: 'activity', userID}))
    //const sessionsData  = useFetch(getEndpoint({route: 'sessions', userID}))

    return (
        <div className="dashboard">

            Age: {defaultData.userInfos?.age}

            ID: {defaultData.id}

            <RadarChart data={performanceData} />

            <InfoCardContainer data={defaultData.keyData}/>

        </div>
    )
}