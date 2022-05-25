import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts"

import { COLORS } from '../../constants'

import { Container } from './style'
import { RadarChartData } from '../../containers/charts/radarchart'


interface RadarProps {
    [key: string]: any
}

export default function RadarComponent ({data}: RadarProps) {

    return (

        <Container className="radar-chart">
            
            <ResponsiveContainer width="100%" height="100%">

            <RadarChart
                outerRadius="70%"
                data={data}
            >

                <PolarGrid radialLines={false} />

                <PolarAngleAxis 
                    dataKey="subject" 
                    stroke="white" 
                    dy={3}       
                    tickLine={false}
                    tick={{
                        fontSize: 14,
                        fontWeight: 400,
                    }} 
                />

                <Radar
                    dataKey="value"
                    stroke={COLORS.red}
                    fill={COLORS.red}
                    fillOpacity={0.6}
                />

            </RadarChart>

            </ResponsiveContainer>
            
        </Container>
        
    )
}
  
