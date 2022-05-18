import styled from "styled-components"


interface ContainerProps {
    backgroundColor? : string
}


interface IconContainerProps {
    backgroundColor? : string
}


interface TextProps {
    fontWeight? : string
}

export const Container = styled.div<ContainerProps>`
    height: 120px;
    width: 250px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    ${({backgroundColor}) => backgroundColor && `background-color: ${backgroundColor}`};
`

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.5em;
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
