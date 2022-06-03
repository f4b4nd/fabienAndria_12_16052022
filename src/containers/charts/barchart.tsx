import BarChart from "../../components/barchart"

export interface BarChartData {
    name: string,
    uv: number,
    pv: number,
    amt: number,
}

export default function BarChartContainer(/*{data}: {data: BarChartData[]}*/) {
    return (
        <BarChart barChartData={getBarChartData()}>

        </BarChart>
    )

}

function getBarChartData(): BarChartData[] {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
    ]
    return data
}