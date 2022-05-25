import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"

import { getEndpoint } from "../../helpers/endpoints"

import RadarChartContainer from "./radarchart"
import CardContainer from "./card"
import PieChartContainer from "./piechart"
import LineChartContainer from "./linechart"

export interface ObjectProps {
    [key: string]: any,
}

export default function ChartsContainer () {

    const { id } = useParams()
    const userID = id || ""

    const defaultData  = useFetch(getEndpoint({route: 'main', userID}))
    const performanceData  = useFetch(getEndpoint({route: 'performance', userID}))
    //const activityData  = useFetch(getEndpoint({route: 'activity', userID}))
    const sessionsData  = useFetch(getEndpoint({route: 'sessions', userID}))
    console.log('sess', sessionsData)

    return (
        <div className="dashboard">

            <RadarChartContainer performanceData={performanceData} />

            <CardContainer data={defaultData.keyData}/>

            <PieChartContainer score={defaultData.todayScore || defaultData.score} />

            <LineChartContainer data={sessionsData.sessions} />

        </div>
    )
}