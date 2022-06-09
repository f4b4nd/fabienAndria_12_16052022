import styled from "styled-components"
import { COLORS } from "../../constants"

export const Container = styled.div`
    height: 280px;
    width: 280px;
    background-color: ${COLORS.fluoRed};
    position: relative;
    border-radius: 5px;
`

export const Text = styled.span`
    position: absolute;
    top: 30px;
    left: 40px;
    max-width: 170px;
    font-size: 1.1em;
    color: ${COLORS.lightGrey};
    opacity: 0.6;
`

export const TooltipContainer = styled.div`
    background-color: white;
    margin: 0;
    padding: 1em 0.7em;
    font-size: 1em;
`