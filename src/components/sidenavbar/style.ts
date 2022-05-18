import styled from "styled-components"
import { Link as RouterLink } from "react-router-dom"

export const Container = styled.aside`
    background-color: black;
    width: 100px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const IconContainer = styled.div`
    height: 60px;
    width: 60px;
    overflow: hidden;
`

export const Icon = styled.img`
    height: 100% ;
    width: 100% ;
`

export const GroupIcons = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2em;
`

export const Link = styled(RouterLink)``

export const Text = styled.p`
    margin: 0;
    color: white;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
`
