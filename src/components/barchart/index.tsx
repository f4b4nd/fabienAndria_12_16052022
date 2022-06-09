import { ReactNode } from "react"
import PropTypes from "prop-types"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

import { Container, Title, Legend, LegendText, LegendBullet, LegendGroup, TooltipContainer, TooltipLine } from './style'
import { BarChartData } from '../../containers/charts/barchart'
import { COLORS } from "../../constants"

BarChartComponent.propTypes = {
    barChartData: PropTypes.array.isRequired,
    customTooltip: PropTypes.elementType.isRequired,
    children: PropTypes.node
}

interface BarChartComponentProps {
    barChartData: BarChartData[], 
    customTooltip: React.ReactElement, 
    children: ReactNode
}

export default function BarChartComponent({barChartData, customTooltip, children}: BarChartComponentProps) {
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
                        top: 90,
                        right: 30,
                        bottom: 30,
                        left: 30,
                    }}
                >
                    <CartesianGrid 
                        strokeDasharray="3 3"
                        vertical={false}
                    />

                    <XAxis 
                        dataKey="dayLabel"
                        dy={16}
                    />

                    <YAxis
                        yAxisId="kg"
                        dataKey="kilogram"
                        allowDecimals={false}
                        orientation="right"
                        axisLine={false}
                        tickLine={false}
                        domain={["dataMin - 1", "dataMax + 1"]}
                        dx={48}
                    />

                    <YAxis
                        yAxisId="cal"
                        dataKey="calories"
                        hide={true}
                        domain={[0, "dataMax"]}
                    />

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

                    <Tooltip 
                        content={customTooltip}
                        cursor={{
                            fill: "rgba(0, 0, 0, 0.05)",
                        }}
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
    return <LegendGroup className="legend"> {children} </LegendGroup>
}


BarChartComponent.Legend = function ({bulletColor, children}: {bulletColor: string, children: ReactNode}) {
    return (
        <Legend className="legend__item" >
            <LegendBullet className="legend__bullet" bulletColor={bulletColor} />
            <LegendText className="legend__text"> {children}  </LegendText>
        </Legend>
    )
}


BarChartComponent.TooltipContainer = function ({children}: {children: ReactNode}) {
    return (
        <TooltipContainer> 
            {children}
        </TooltipContainer>
    )
}

BarChartComponent.TooltipLine = function ({children}: {children: ReactNode}) {
    return (
        <TooltipLine> 
            {children}
        </TooltipLine>
    )
}
