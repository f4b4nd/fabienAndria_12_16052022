import { ReactNode } from "react"
import { ObjectProps as RestProps} from "../../containers/charts"

import { Container, Group, Icon, IconContainer, TextContainer, Text } from "./style"

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

export default function Card ({children, ...restProps} : ContainerProps) {
    return <Container {...restProps}> {children} </Container>
}

Card.Group = function ({children} : {children: ReactNode}) {
    return <Group> {children} </Group>
}

Card.IconContainer = function ({src, alt, ...restProps} : IconContainerProps) {
    return (
        <IconContainer {...restProps}>
            <Icon src={src} alt={alt} />
        </IconContainer>
    )
}

Card.TextContainer = function ({children} : {children: ReactNode}) {
    return <TextContainer> {children} </TextContainer>
}

Card.Text = function ({children, ...restProps} : TextProps) {
    return <Text {...restProps}> {children} </Text>
}
