import InfoCard from "../components/infocard"
import { COLORS } from "../constants"
import CaloriesIcon from "../assets/icons/calories-icon.png"
import CarbsIcon from "../assets/icons/carbs-icon.png"
import LipidsIcon from "../assets/icons/fat-icon.png"
import ProteinIcon from "../assets/icons/protein-icon.png"


interface Data {
    calorieCount: number,
    proteinCount: number,
    carbohydrateCount: number,
    lipidCount: number,
}

export default function InfoCardContainer ({ data } : {data: Data}) {

    return (

        <InfoCard.Group>

            <InfoCard backgroundColor={COLORS.lightGrey}>

                <InfoCard.IconContainer backgroundColor={COLORS.lightRed} src={CaloriesIcon} alt="calories" />

                <InfoCard.TextContainer>
                    <InfoCard.Text fontWeight="bold">{data?.calorieCount}g</InfoCard.Text>
                    <InfoCard.Text> Calories </InfoCard.Text>
                </InfoCard.TextContainer>

            </InfoCard>

            <InfoCard backgroundColor={COLORS.lightGrey}>

                <InfoCard.IconContainer backgroundColor={COLORS.lightYellow} src={CarbsIcon} alt="Glucides" />

                <InfoCard.TextContainer>
                    <InfoCard.Text fontWeight="bold">{data?.carbohydrateCount}g</InfoCard.Text>
                    <InfoCard.Text> Glucides </InfoCard.Text>
                </InfoCard.TextContainer>

            </InfoCard>

            <InfoCard backgroundColor={COLORS.lightGrey}>

                <InfoCard.IconContainer backgroundColor={COLORS.lightBlue} src={ProteinIcon} alt="Protéines" />

                <InfoCard.TextContainer>

                    <InfoCard.Text fontWeight="bold">{data?.proteinCount}g</InfoCard.Text>
                    <InfoCard.Text> Lipides </InfoCard.Text>

                </InfoCard.TextContainer>

            </InfoCard>

            <InfoCard backgroundColor={COLORS.lightGrey}>

                <InfoCard.IconContainer backgroundColor={COLORS.lightViolet} src={LipidsIcon} alt="Lipides" />

                <InfoCard.TextContainer>
                    <InfoCard.Text fontWeight="bold">{data?.lipidCount}g</InfoCard.Text>
                    <InfoCard.Text> Lipides </InfoCard.Text>
                </InfoCard.TextContainer>

            </InfoCard>

    </InfoCard.Group>
    )
}