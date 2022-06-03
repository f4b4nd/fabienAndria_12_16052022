import { ReactNode } from "react"

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

import { Container, Text } from './style'
import { BarChartData } from '../../containers/charts/barchart'

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

                    <XAxis dataKey="name" />

                    <YAxis />

                    <Tooltip />

                    <Legend />

                    <Bar dataKey="pv" fill="#8884d8" />

                    <Bar dataKey="uv" fill="#82ca9d" />

                </BarChart>

            </ResponsiveContainer>
      
        </Container>
    )
}

BarChartComponent.Text = function ({children}: {children: ReactNode}) {
    return <Text> {children} </Text>
}