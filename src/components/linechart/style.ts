import styled from "styled-components"
import { COLORS } from "../../constants"

export const Container = styled.div`
    height: 300px;
    width: 300px;
    background-color: ${COLORS.fluoRed};
    position: relative;
    border-radius: 5px;
`

export const Text = styled.span`
    position: absolute;
    top: 10px;
    left: 10px;
    color: white;
`