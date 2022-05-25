import styled from "styled-components"
import { COLORS } from "../../constants"

export const Container = styled.div`
    width: 300px;
    height: 300px;
    background-color: ${COLORS.lightGrey};
    border-radius: 5px;
    border: 1px solid black;
    position: relative;
`

export const Title = styled.span`
    font-size: 1.5em;
    font-weight: bold;
    position: absolute;
    top: 10px;
    left: 10px;
`

export const Text = styled.p`
    margin: 0;
    padding: 0;
    font-weight: 1.1em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 70px;
    text-align: center;

    .score {
        display: block;
        font-weight: bold;
        font-size: 1.5em;
    }
`