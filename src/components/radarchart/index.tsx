import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts"

import { COLORS } from '../../constants'

import { Container } from './style'

interface RadarProps {
    [key: string]: any
}


const performanceData = [
    {
        subject: "Intensité",
        value: 90,
        fullMark: 200
    },
    {
        subject: "Vitesse",
        value: 200,
        fullMark: 200
    },
    {
        subject: "Force",
        value: 50,
        fullMark: 200
    },
    {
        subject: "Endurance",
        value: 140,
        fullMark: 200
    },
    {
        subject: "Energie",
        value: 120,
        fullMark: 200
    },
    {
        subject: "Cardio",
        value: 80,
        fullMark: 200
    }
]

export default function RadarComponent ({data}: RadarProps) {

    return (
        <Container className="radar-chart">
            <ResponsiveContainer width="100%"  height="100%">
            <RadarChart
                outerRadius="70%"
                data={performanceData}
            >

                <PolarGrid radialLines={false} />

                <PolarAngleAxis 
                    dataKey="subject" 
                    stroke="white" 
                    dy={3}       
                    tickLine={false}
                    tick={{
                        fontSize: 12,
                        fontWeight: 500,
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
  
