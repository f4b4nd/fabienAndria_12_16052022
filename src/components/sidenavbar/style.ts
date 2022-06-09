import styled from "styled-components"
import { Link as RouterLink } from "react-router-dom"

export const Container = styled.aside`
    background-color: black;
    min-width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
    row-gap: 100px;
`

export const ImageContainer = styled.div`
    height: 60px;
    width: 60px;
    overflow: hidden;
`

export const Image = styled.img`
    height: 100% ;
    width: 100% ;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2em;
    justify-content: flex-start;
`

export const Link = styled(RouterLink)``

export const Text = styled.p`
    margin: 0;
    color: white;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
`
