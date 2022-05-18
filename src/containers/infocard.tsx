import InfoCard from "../components/infocard"
import { COLORS } from "../constants"
import CaloriesIcon from "../assets/logos/calories-icon.png"
import CarbsIcon from "../assets/logos/carbs-icon.png"
import LipidsIcon from "../assets/logos/fat-icon.png"
import ProteinIcon from "../assets/logos/protein-icon.png"

export default function InfoCardContainer ({data}: {data: any}) {

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

                    <InfoCard.Text fontWeight="bold">{data?.carbonhydrateCount}g</InfoCard.Text>

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