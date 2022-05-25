import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"

import { getEndpoint } from "../../helpers/endpoints"

import RadarChartContainer from "./radarchart"
import CardContainer from "./card"

export interface ObjectProps {
    [key: string]: any,
}

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

            <CardContainer data={defaultData.keyData}/>

        </div>
    )
}