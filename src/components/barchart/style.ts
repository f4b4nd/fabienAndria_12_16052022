import styled from 'styled-components'

import { COLORS } from '../../constants'

interface LegendBulletProps {
    bulletColor: string
}

export const Container = styled.div`
    height: 400px;
    max-width: 80vw;
    flex: 1;
    position: relative;
    background-color: ${COLORS.lightGrey};
`
export const Title = styled.h3`
    margin: 0;
    position: absolute;
    top: 20px;
    left: 50px;
    z-index: 1;
`

export const Legend = styled.span`
    display: flex;
    align-items: center;
    column-gap: 0.3em; 

`

export const LegendText = styled.span`
    font-size: 1em;
    color: ${COLORS.grey};
`

export const LegendBullet = styled.span<LegendBulletProps>`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    ${({bulletColor}) => bulletColor && `background-color: ${bulletColor}`};
`

export const LegendGroup = styled.div`
    display: flex;
    column-gap: 3em;
    position: absolute;
    top: 20px;
    right: 50px;
    z-index: 1;
`

export const TooltipContainer = styled.div``

export const TooltipLine = styled.div`
    background-color: ${COLORS.fluoRed};
    margin: 0;
    padding: 1em 0.7em;
    color: white;
    font-size: 1em;
    z-index: -1;
`