import RadarComponent from "../../components/radarchart"

interface ObjectProps {
    [key: string]: any,
}

interface PerformanceData {
    kind: ObjectProps,
    data: {
        kind: number,
        value: number
    }[]
}

export interface RadarChartData {
    value: number,
    subject: string,
}

const KindsTypes = {
    cardio : { translation: 'Cardio', sortByIndex: 5},
    energy : { translation: 'Energie', sortByIndex: 4},
    endurance : { translation: 'Endurance', sortByIndex: 3},
    strength : { translation: 'Force', sortByIndex: 2},
    speed : { translation: 'Vitesse', sortByIndex: 1},
    intensity: { translation: 'Intensité', sortByIndex: 0},
} as const


export default function RadarChartContainer({performanceData}: ObjectProps) {

    const radarChartData = getRadarChartData(performanceData)

    return (
        <RadarComponent 
            data={radarChartData} 
        />
    )

}


function getRadarChartData (performanceData: PerformanceData): RadarChartData[] {

    const radarChartData: RadarChartData[] = performanceData.data?.reduce((acc, item) => {

        const kindIndex = item.kind
        const kindLabel = performanceData.kind[kindIndex]
        const translatedKindLabel = KindsTypes[kindLabel as keyof typeof KindsTypes].translation

        const newItem = {
            value: item.value,
            subject: translatedKindLabel,
        }

        return [...acc, newItem]

    }, [] as RadarChartData[])

    const sortedRadarChartData: RadarChartData[] = radarChartData?.sort((a, b) => {
        const kindsTypes = Object.values(KindsTypes) 
        const kindType1 = kindsTypes.find(kindType => kindType.translation === a.subject)
        const kindtype2 = kindsTypes.find(kindType => kindType.translation === b.subject)

        if (!kindType1 || !kindtype2) return -1
        return kindType1.sortByIndex <  kindtype2.sortByIndex ? -1 : 1
    })

    return sortedRadarChartData

}
