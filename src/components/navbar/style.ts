import styled from 'styled-components'

import { Link as RouterLink } from 'react-router-dom'

export const Container = styled.nav`
    background-color: black;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0 1em;
`

export const Logo = styled(RouterLink)`
    width: 170px;
    height: 60px;
    overflow: hidden;
`

export const LogoImage = styled.img`
    height: 100%;
    width: 100%;
`

export const Link = styled(RouterLink)`
    color: white;
    font-size: 1.3em;
    text-decoration: none;
`

export const Group = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex: 1;
`