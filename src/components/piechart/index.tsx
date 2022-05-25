import { ReactNode } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

import { Container, Title, Text} from "./style"

export default function PieChartComponent ({pieChartData, children}: {pieChartData: any[], children: ReactNode}) {
    return (
        <Container className="pie-chart">

            {children}

            <ResponsiveContainer width="100%" height="100%">

                <PieChart >

                    <Pie
                        data={pieChartData}                        
                        dataKey="value"
                        innerRadius={100}
                        outerRadius={120}
                        startAngle={90}
                        endAngle={450}
                        cx="50%"
                        cy="50%"
                        fill="red"
                    >

                        {pieChartData.map((entry, index) => (
                            <Cell 
                                key={`cell-${index}`} 
                                fill={entry.color}
                            />
                        ))}

                    </Pie>

                </PieChart>

            </ResponsiveContainer>

        </Container>
    )
}

PieChartComponent.Title = function ({children}: {children: ReactNode}) {
    return <Title> {children} </Title>
}

PieChartComponent.Text = function ({children}: {children: ReactNode}) {
    return <Text> {children} </Text>
}