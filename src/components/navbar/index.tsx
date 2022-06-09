import React, { ReactNode } from 'react'
import PropTypes from "prop-types"

import SportSeeLogo from '../../assets/logos/sportsee.png'

import { Container, Logo, LogoImage, Link, Group } from "./style"

Navbar.propTypes = {
    children: PropTypes.node
}

export default function Navbar ({children}: {children: ReactNode}) {
    return <Container> {children} </Container>
}

Navbar.Logo = function ({to}: {to : string}) {
    return (
        <Logo to={to}>
            <LogoImage src={SportSeeLogo} alt="Sportsee" />
        </Logo>
    )
}

Navbar.Link = function ({children, ...restProps} : {to: any, children : ReactNode}) {
    return <Link {...restProps}> {children} </Link>
}

Navbar.Group = function ({children, ...restProps} : {children : ReactNode}) {
    return <Group {...restProps}> {children} </Group>
}

