import { ReactNode } from "react"
import { LineChart, Line, Tooltip } from "recharts"
import { COLORS } from "../../constants"

import { Container, Text } from "./style"

export default function LineChartComponent ({lineChartData, children}: {lineChartData: any[], children: ReactNode}) {

    return (

        <Container className="line-chart">

            {children}

            <LineChart 
                width={300} 
                height={300} 
                data={lineChartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
            
                <Tooltip />

                <Line type="monotone" dataKey="pv" stroke={COLORS.lightGrey} />

            </LineChart>

        </Container>

    )

}

LineChartComponent.Text = function ({children}: {children: ReactNode}) {
    return <Text> {children} </Text>
}