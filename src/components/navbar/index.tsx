import SportSeeLogo from '../../assets/logos/sportsee.png'

import { Container, Logo, LogoImage, Link } from "./style"


export default function Navbar ({children} : {children: JSX.Element[]}) {

    return <Container> {children} </Container>
}

Navbar.Logo = function ({to}: {to : string}) {
    return (
        <Logo to={to}>
            <LogoImage src={SportSeeLogo} alt="Sportsee" />
        </Logo>
    )
}

Navbar.Link = function ({children, ...restProps} : {to: any, children : string}) {
    return <Link {...restProps}> {children} </Link>
}
