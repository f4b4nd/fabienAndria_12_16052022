import { ReactNode } from "react"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

import { Container, Title, Legend, LegendText, LegendBullet, LegendGroup } from './style'
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
                    <CartesianGrid 
                        strokeDasharray="3 3"
                        vertical={false}
                    />

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

BarChartComponent.LegendGroup = function ({children}: {children: ReactNode}) {
    return <LegendGroup className="legend-group"> {children} </LegendGroup>
}


BarChartComponent.Legend = function ({bulletColor, children}: {bulletColor: string, children: ReactNode}) {
    return (
        <Legend className="legend" >
            <LegendBullet className="legend__bullet" bulletColor={bulletColor} />
            <LegendText className="legend__text"> {children}  </LegendText>
        </Legend>
    )
}