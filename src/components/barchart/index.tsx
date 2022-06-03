import { ReactNode } from "react"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

import { Container, Title, Legend, LegendBullet } from './style'
import { BarChartData } from '../../containers/charts/barchart'
import { COLORS } from "../../constants"

export default function BarChartComponent({barChartData, children}: {barChartData: BarChartData[], children: ReactNode}) {
    return (

        <Container className="bar-chart">

            {children}

            <ResponsiveContainer width="100%" height="100%">

                <BarChart
                    width={500}
                    height={300}
                    barCategoryGap="30%"
                    data={barChartData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="dayLabel" />

                    <YAxis
                        yAxisId="kg"
                        dataKey="kilogram"
                        allowDecimals={false}
                        orientation="right"
                        axisLine={false}
                        tickLine={false}                    
                    />

                    <YAxis
                        yAxisId="cal"
                        dataKey="calories"
                        hide={true}
                    />

                    <Tooltip />

                    <Bar 
                        dataKey="kilogram" 
                        fill="black"
                        yAxisId="kg"
                        maxBarSize={8}
                        radius={[50, 50, 0, 0]}
                    />

                    <Bar 
                        dataKey="calories" 
                        fill={COLORS.fluoRed}
                        yAxisId="cal"
                        maxBarSize={8}
                        radius={[50, 50, 0, 0]}            
                    />

                </BarChart>

            </ResponsiveContainer>
      
        </Container>
    )
}

BarChartComponent.Title = function ({children}: {children: ReactNode}) {
    return <Title> {children} </Title>
}

BarChartComponent.Legend = function ({children}: {children: ReactNode}) {
    return (
        <Legend>
            <LegendBullet />
             {children} 
        </Legend>
    )
}