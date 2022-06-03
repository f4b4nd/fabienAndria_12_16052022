import { ReactNode } from "react"
import { LineChart, Line, Tooltip, XAxis, ResponsiveContainer} from "recharts"

import { COLORS } from "../../constants"
import { LineChartData } from "../../containers/charts/linechart"

import { Container, Text } from "./style"

export default function LineChartComponent ({lineChartData, children}: {lineChartData: LineChartData[], children: ReactNode}) {

    return (

        <Container className="line-chart">

            {children}

            <ResponsiveContainer>

                <LineChart 
                    width={300} 
                    height={300} 
                    data={lineChartData}
                    margin={{ top: 15, right: 10, left: 10, bottom: 15 }}
                    outerRadius="75%"
                >
                    <XAxis
                        dataKey="dayLabel" 
                        stroke="white"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                          fontSize: 13
                        }}
                    />

                    <Tooltip />

                    <Line type="monotone" dataKey="sessionLength" stroke="white" />

                </LineChart>

            </ResponsiveContainer>

        </Container>

    )

}



LineChartComponent.Text = function ({children}: {children: ReactNode}) {
    return <Text> {children} </Text>
}
