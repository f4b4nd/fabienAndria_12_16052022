import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

import { getEndpoint } from "../helpers/endpoints"

import RadarChartContainer from "../containers/radarchart"
import InfoCardContainer from "./infocard"

export default function HeroContainer () {

    const { id } = useParams()
    const userID = id || ""

    const defaultData  = useFetch(getEndpoint({route: 'main', userID}))
    const performanceData  = useFetch(getEndpoint({route: 'performance', userID}))
    console.log('perf', performanceData)
    //const activityData  = useFetch(getEndpoint({route: 'activity', userID}))
    //const sessionsData  = useFetch(getEndpoint({route: 'sessions', userID}))

    return (
        <div className="dashboard">

            Age: {defaultData.userInfos?.age}

            ID: {defaultData.id}

           <RadarChartContainer rawData={performanceData} />

            <InfoCardContainer data={defaultData.keyData}/>

        </div>
    )
}