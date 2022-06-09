import PropTypes from "prop-types"

import Card from "../../components/card"
import { COLORS } from "../../constants"
import CaloriesIcon from "../../assets/icons/calories-icon.png"
import CarbsIcon from "../../assets/icons/carbs-icon.png"
import LipidsIcon from "../../assets/icons/fat-icon.png"
import ProteinIcon from "../../assets/icons/protein-icon.png"


interface CardData {
    calorieCount: number,
    proteinCount: number,
    carbohydrateCount: number,
    lipidCount: number,
}

CardContainer.propTypes = {
    data: PropTypes.array.isRequired
}

export default function CardContainer ({ data } : {data: CardData}) {
    
    const calorieFormatter = (calorie: number): string => {
        if (!calorie) {
            return ""
        }
        const kiloCalorie = calorie / 1000
        return kiloCalorie.toFixed(3).replace('.', ',')
    }

    const cardData = [
        {
            label: 'Calories',
            src: CaloriesIcon,
            backgroundColor: COLORS.lightRed,
            value: calorieFormatter(data?.calorieCount),
            unit: 'kCal',
        },
        {
            label: 'Glucides',
            src: CarbsIcon,
            backgroundColor: COLORS.lightYellow,
            value: data?.carbohydrateCount,
            unit: 'g',
        },
        {
            label: 'Protéines',
            src: ProteinIcon,
            backgroundColor: COLORS.lightBlue,
            value: data?.proteinCount,
            unit: 'g',
        },
        {
            label: 'Lipides',
            src: LipidsIcon,
            backgroundColor: COLORS.lightViolet,
            value: data?.lipidCount,
            unit: 'g',
        },
    ]

    return (
        <Card.Group>

            {cardData.map((item, idx) => (
                <Card key={idx}>

                    <Card.IconContainer backgroundColor={item.backgroundColor} src={item.src} alt={item.label} />

                    <Card.TextContainer>
                        <Card.Text fontWeight="bold">{item.value}{item.unit}</Card.Text>
                        <Card.Text> {item.label} </Card.Text>
                    </Card.TextContainer>

                </Card>
            ))}

        </Card.Group>
    )
}