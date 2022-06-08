import LineChart from "../../components/linechart"

interface SessionData {
    day: number,
    sessionLength: number,
    dayLabel?: string,
}

export interface LineChartData {
    day: number,
    sessionLength: number,
    dayLabel: string,
    value?: string
}

const DaysLabels = {
    1: 'L',
    2: 'M',
    3: 'M',
    4: 'J',
    5: 'V',
    6: 'S', 
    7: 'D'
} as const

export default function LineChartContainer({data}: {data: SessionData[]}) {

    return (
        <LineChart 
            lineChartData={getLineChartData(data)} 
            customTooltip={<CustomTooltip payload={getLineChartData(data)} />}
        >
            <LineChart.Text> Durée moyenne des sessions </LineChart.Text>
        </LineChart>
    )

}

function getLineChartData(data: SessionData[]): LineChartData[] {
    return data?.map(item => ({
        ...item,
        dayLabel: DaysLabels[item.day as keyof typeof DaysLabels]
    }))
}

function CustomTooltip ({payload}: { payload: {value? : string}[] }) {
    console.log('custom', payload)
    return (
        <LineChart.TooltipContainer>
             {payload[0]?.value} min
        </LineChart.TooltipContainer>
    )
}