import BarChart from "../../components/barchart"

import { COLORS } from "../../constants"

export interface BarChartData {
    day: string,
    kilogram: number,
    calories: number,
    dayLabel?: string,
    value?: string
}


export default function BarChartContainer({data}: {data: BarChartData[]}) {
    return (
        <BarChart barChartData={getBarChartData(data)} customTooltip={<CustomTooltip payload={data} />}>

            <BarChart.Title> Activité quotidienne </BarChart.Title>

            <BarChart.LegendGroup>
                <BarChart.Legend bulletColor="black"> Poids (kg) </BarChart.Legend>
                <BarChart.Legend bulletColor={COLORS.fluoRed}> Calories brûlées (kCal) </BarChart.Legend>
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

function CustomTooltip ({payload}: { payload: {value? : string}[] }) {
    return (
        <BarChart.TooltipContainer>
            <BarChart.TooltipLine> {payload[0]?.value}Kg </BarChart.TooltipLine>
            <BarChart.TooltipLine> {payload[1]?.value}Kcal </BarChart.TooltipLine>
        </BarChart.TooltipContainer>
    )
}