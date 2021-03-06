import PropTypes from "prop-types"


import BarChart from "../../components/barchart"

import { COLORS } from "../../constants"

export interface BarChartData {
    day: string,
    kilogram: number,
    calories: number,
    dayLabel?: string,
    value?: string
}

BarChartContainer.propTypes = {
    data: PropTypes.array
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

/**
 * Add the label of a day has a string
 * @param { Array } data 
 */
function getBarChartData(data: BarChartData[]): BarChartData[] {
    const barChartData = data?.map((item, idx) => ({
        ...item,
        dayLabel: `${idx + 1}`
    }))
    return barChartData
}

/**
 * To add custom style to tooltip
 * @param { Array } payload 
 */
function CustomTooltip ({payload}: { payload: {value? : string}[] }): React.ReactElement {
    return (
        <BarChart.TooltipContainer>
            <BarChart.TooltipLine> {payload[0]?.value}Kg </BarChart.TooltipLine>
            <BarChart.TooltipLine> {payload[1]?.value}Kcal </BarChart.TooltipLine>
        </BarChart.TooltipContainer>
    )
}