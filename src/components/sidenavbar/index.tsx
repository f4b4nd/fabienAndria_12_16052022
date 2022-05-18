import { Container, IconContainer, Icon, GroupIcons, Link, Text } from "./style"


export default function SideNavbar ({children} : {children: any}) {

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

SideNavbar.GroupIcons = function ({children} : {children: any}) {
    return <GroupIcons> {children} </GroupIcons> 
}


SideNavbar.Text = function ({children} : {children: any}) {
    return (
        <Text> {children} </Text>
    )
}

