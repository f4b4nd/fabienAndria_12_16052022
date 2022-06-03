import { ReactNode } from "react"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

import { Container, Text } from './style'
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

                    <YAxis />

                    <Tooltip />

                    <Legend />

                    <Bar dataKey="kilogram" fill="black" />

                    <Bar dataKey="calories" fill={COLORS.fluoRed} />

                </BarChart>

            </ResponsiveContainer>
      
        </Container>
    )
}

BarChartComponent.Text = function ({children}: {children: ReactNode}) {
    return <Text> {children} </Text>
}