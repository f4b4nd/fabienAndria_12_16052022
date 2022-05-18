import { Container, IconContainer, Icon, GroupIcons, Link, Text } from "./style"


export default function SideNavbar ({children} : {children: JSX.Element[]}) {

    return <Container> {children} </Container>
}

SideNavbar.IconContainer = function ({to, src, alt} : {to: string, src: string, alt: string}) {
    return (
        <Link to={to} >
            <IconContainer> 
                <Icon src={src} alt={alt} /> 
            </IconContainer>
        </Link>
    )
}

SideNavbar.GroupIcons = function ({children} : {children: JSX.Element[]}) {
    return <GroupIcons> {children} </GroupIcons> 
}


SideNavbar.Text = function ({children} : {children: string}) {
    return (
        <Text> {children} </Text>
    )
}

