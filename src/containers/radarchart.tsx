import RadarComponent from "../components/radarchart"

interface ObjectProps {
    [key: string]: any,
}

interface RawDataItem {
    value: number,
    kind: number
}

enum Translations {
    intensity = 'Intensité',
    speed = 'Vitesse',
    strength = 'Force',
    endurance = 'Endurance',
    energy = 'Energie',
    cardio = 'Cardio',
}

function parseData (rawData: ObjectProps): ObjectProps {

    const scoreMax = rawData.data?.reduce((acc: number, item: RawDataItem) => item.value > acc ? item.value : acc)

    const data = rawData.data?.reduce((acc: [], item: RawDataItem) => {

        const kindIndex = item.kind
        const kindLabel = rawData.kind[kindIndex]
        const translatedKindLabel = Translations[kindLabel as keyof typeof Translations]

        const newItem = {
            value: item.value,
            subject: translatedKindLabel,
            fullMark: scoreMax
        }

        return [...acc, newItem]

    }, [])

    const sortByColumns:string[] = Object.values(Translations)

    const sortedData = sortByColumns.map(column => data?.find((item: ObjectProps) => item.subject === column))

    return sortedData

}

export default function RadarChartContainer({rawData}: ObjectProps) {

    return (
        <RadarComponent 
            data={parseData(rawData)} 
        />
    )

}