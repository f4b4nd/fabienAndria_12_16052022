import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"

import { getEndpoint } from "../../helpers/endpoints"

import RadarChartContainer from "./radarchart"
import InfoCardContainer from "../infocard"

export default function ChartsContainer () {

    const { id } = useParams()
    const userID = id || ""

    const defaultData  = useFetch(getEndpoint({route: 'main', userID}))
    const performanceData  = useFetch(getEndpoint({route: 'performance', userID}))
    console.log('perf', performanceData)
    //const activityData  = useFetch(getEndpoint({route: 'activity', userID}))
    //const sessionsData  = useFetch(getEndpoint({route: 'sessions', userID}))

    return (
        <div className="dashboard">

            <RadarChartContainer performanceData={performanceData} />

            <InfoCardContainer data={defaultData.keyData}/>

        </div>
    )
}