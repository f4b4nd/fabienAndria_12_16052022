import PieChartComponent from '../../components/piechart'
interface ObjectProps {
    [key: string]: any,
}

export default function PieChartContainer({data}: ObjectProps) {
    return <PieChartComponent />
}