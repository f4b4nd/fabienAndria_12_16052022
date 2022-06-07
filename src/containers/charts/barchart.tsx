import BarChart from "../../components/barchart"

import { COLORS } from "../../constants"

export interface BarChartData {
    day: string,
    kilogram: number,
    calories: number,
    dayLabel?: string,
}


export default function BarChartContainer({data}: {data: BarChartData[]}) {
    return (
        <BarChart barChartData={getBarChartData(data)}>
            <BarChart.Title> Activité quotidienne </BarChart.Title>

            <BarChart.LegendGroup>
                <BarChart.Legend bulletColor="black"> Poids (kg) </BarChart.Legend>
                <BarChart.Legend bulletColor={COLORS.fluoRed}> Calories brulées (kCal) </BarChart.Legend>
            </BarChart.LegendGroup>
            
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