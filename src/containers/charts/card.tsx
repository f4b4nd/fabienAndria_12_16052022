import Card from "../../components/card"
import { COLORS } from "../../constants"
import CaloriesIcon from "../../assets/icons/calories-icon.png"
import CarbsIcon from "../../assets/icons/carbs-icon.png"
import LipidsIcon from "../../assets/icons/fat-icon.png"
import ProteinIcon from "../../assets/icons/protein-icon.png"


interface Data {
    calorieCount: number,
    proteinCount: number,
    carbohydrateCount: number,
    lipidCount: number,
}

export default function CardContainer ({ data } : {data: Data}) {

    const cardData = [
        {
            label: 'Calories',
            src: CaloriesIcon,
            backgroundColor: COLORS.lightRed,
            value: data?.calorieCount,
        },
        {
            label: 'Glucides',
            src: CarbsIcon,
            backgroundColor: COLORS.lightYellow,
            value: data?.carbohydrateCount,
        },
        {
            label: 'Protéines',
            src: ProteinIcon,
            backgroundColor: COLORS.lightBlue,
            value: data?.proteinCount,
        },
        {
            label: 'Lipides',
            src: LipidsIcon,
            backgroundColor: COLORS.lightViolet,
            value: data?.lipidCount,
        },
    ]

    return (
        <Card.Group>

            {cardData.map((item, idx) => (
                <Card key={idx}>

                    <Card.IconContainer backgroundColor={item.backgroundColor} src={item.src} alt={item.label} />

                    <Card.TextContainer>
                        <Card.Text fontWeight="bold">{item.value}g</Card.Text>
                        <Card.Text> {item.label} </Card.Text>
                    </Card.TextContainer>

                </Card>
            ))}

        </Card.Group>
    )
}