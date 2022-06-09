import PropTypes from "prop-types"

import PieChart from '../../components/piechart'

import { COLORS } from '../../constants'

PieChartContainer.propTypes = {
    score: PropTypes.number
}

export default function PieChartContainer({score}: {score: number}) {

    const pieChartData = [
        {
            value : score,
            color : COLORS.red
        },
        {
            value : 1 - score,
            color: COLORS.lightGrey
        },
    ]

    return (
        <PieChart pieChartData={pieChartData}>
            <PieChart.Title> Score </PieChart.Title>
            <PieChart.Text> <span className="score"> {100 * score}% </span> de votre objectif </PieChart.Text>
        </PieChart>
    )
}