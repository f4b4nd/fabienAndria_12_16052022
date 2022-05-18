import { ReactNode } from "react"

import { Container, Group, Icon, IconContainer, TextContainer, Text } from "./style"

interface RestProps {
    [x: string]: any
}

interface ContainerProps extends RestProps {
    children : ReactNode,
}

interface IconContainerProps extends RestProps {
    src: any, 
    alt: string,
}

interface TextProps extends RestProps {
    children: ReactNode,
}

export default function InfoCard ({children, ...restProps} : ContainerProps) {
    return <Container {...restProps}> {children} </Container>
}

InfoCard.Group = function ({children} : {children: ReactNode}) {
    return <Group> {children} </Group>
}

InfoCard.IconContainer = function ({src, alt, ...restProps} : IconContainerProps) {
    return (
        <IconContainer {...restProps}>
            <Icon src={src} alt={alt} />
        </IconContainer>
    )
}

InfoCard.TextContainer = function ({children} : {children: JSX.Element[]}) {
    return <TextContainer> {children} </TextContainer>
}

InfoCard.Text = function ({children, ...restProps} : TextProps) {
    return <Text {...restProps}> {children} </Text>
}

