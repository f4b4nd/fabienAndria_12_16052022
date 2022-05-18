import SportSeeLogo from '../../assets/logos/sportsee.png'

import { Container, Logo, LogoImage, Link } from "./style"


export default function Navbar ({children} : {children : any}) {
    return <Container> {children} </Container>
}

Navbar.Logo = function ({to}: {to : any}) {
    return (
        <Logo to={to}>
            <LogoImage src={SportSeeLogo} alt="Sportsee" />
        </Logo>
    )
}

Navbar.Link = function ({to, children} : {to: any, children : any}) {
    return <Link to={to}> {children} </Link>
}