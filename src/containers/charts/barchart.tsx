import BarChart from "../../components/barchart"

export interface BarChartData {
    day: string,
    kilogram: number,
    calories: number,
    dayLabel: string,
}

export default function BarChartContainer({data}: {data: BarChartData[]}) {
    return (
        <BarChart barChartData={getBarChartData(data)}>

        </BarChart>
    )

}

function getBarChartData(data: BarChartData[]): BarChartData[] {
    const barChartData = data?.map((item, idx) => ({
        ...item,
        dayLabel: `${idx + 1}`
    }))
    return barChartData
}