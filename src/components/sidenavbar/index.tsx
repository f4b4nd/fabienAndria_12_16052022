import PropTypes from "prop-types"

import { ReactNode } from "react" 

import { Container, ImageContainer, Image, Column, Link, Text } from "./style"

SideNavbar.propTypes = {
    children: PropTypes.node
}

export default function SideNavbar ({children} : {children: ReactNode}) {
    return <Container> {children} </Container>
}

SideNavbar.ImageContainer = function ({to, src, alt} : {to: string, src: string, alt: string}) {
    return (
        <Link to={to} >
            <ImageContainer> 
                <Image src={src} alt={alt} /> 
            </ImageContainer>
        </Link>
    )
}

SideNavbar.Column = function ({children} : {children: ReactNode}) {
    return <Column> {children} </Column>
}


SideNavbar.Text = function ({children} : {children: string}) {
    return (
        <Text> {children} </Text>
    )
}

