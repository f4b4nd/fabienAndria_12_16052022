import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"

import { getEndpoint } from "../../helpers/endpoints"

import RadarChartContainer from "./radarchart"
import CardContainer from "./card"
import PieChartContainer from "./piechart"
import LineChartContainer from "./linechart"
import BarChartContainer from "./barchart"

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

            <div className="title">
                
                <h1> Bonjour <span className="name"> Thomas </span></h1>
                
                <h2> Félicitations, vous avez explosé vos objectifs hier <span className="emoji"> &#128079; </span> </h2>

            </div>

            <div className="row">
            
                <div className="col">

                    <div className="row">

                        <BarChartContainer />

                    </div>

                    <div className="row">

                        <LineChartContainer data={sessionsData.sessions} />

                        <RadarChartContainer performanceData={performanceData} />

                        <PieChartContainer score={defaultData.todayScore || defaultData.score} />

                    </div>

                </div>

                <div className="col">

                    <CardContainer data={defaultData.keyData}/>

                </div>

            </div>
        </div>
    )
}