import { ReactNode } from "react"
import { LineChart, Line, Tooltip, XAxis, YAxis, ResponsiveContainer} from "recharts"

import { LineChartData } from "../../containers/charts/linechart"

import { Container, Text, TooltipContainer } from "./style"

export default function LineChartComponent ({lineChartData, customTooltip, children}: {lineChartData: LineChartData[], customTooltip: any, children: ReactNode}) {

    return (

        <Container className="line-chart">

            {children}

            <ResponsiveContainer>

                <LineChart 
                    width={300} 
                    height={300} 
                    data={lineChartData}
                    margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
                    outerRadius="75%"
                >
                    <XAxis
                        dataKey="dayLabel" 
                        stroke="rgba(255, 255, 255, 0.5)"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                          fontSize: 13
                        }}
                    />

                    <YAxis
                        dataKey="sessionLength"
                        domain={[0, "dataMax + 30"]}
                        hide={true}
                    />

                    <Tooltip 
                        content={customTooltip}
                        cursor={{
                            stroke: "rgba(0, 0, 0, 0.05)",
                            strokeWidth: 60,
                        }}
                    />

                    <Line 
                        dataKey="sessionLength"
                        type="monotone" 
                        stroke="rgba(255, 255, 255, 0.7)"
                        dot={false}
                        activeDot={{
                            stroke: "rgba(255,255,255, 0.5)",
                            strokeWidth: 8,
                            r: 4,
                        }}
                    />

                </LineChart>

            </ResponsiveContainer>

        </Container>

    )

}



LineChartComponent.Text = function ({children}: {children: ReactNode}) {
    return <Text> {children} </Text>
}

LineChartComponent.TooltipContainer = function ({children}: {children: ReactNode}) {
    return (
        <TooltipContainer> 
            {children}
        </TooltipContainer>
    )
}
