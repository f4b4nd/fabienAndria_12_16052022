import styled from "styled-components"
import { COLORS } from "../../constants"


interface IconContainerProps {
    backgroundColor? : string
}


interface TextProps {
    fontWeight? : string
}

export const Container = styled.div`
    height: 140px;
    max-width: 350px;
    min-width: 200px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${COLORS.lightGrey};
`

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    gap: 1.5em;

    @media screen and (min-width: 700px) and (max-width: 1300px) {
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        min-width: 200px;
    }
`

export const Icon = styled.img`
    height: 100%;
    width: 100%;
`

export const IconContainer = styled.div<IconContainerProps>`
    height: 50px;
    width: 50px;
    ${({backgroundColor}) => backgroundColor && `background-color: ${backgroundColor}`};
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Text = styled.span<TextProps>`
    ${({fontWeight}) => fontWeight && `font-weight: ${fontWeight}`};
`
