import styled from 'styled-components'

export const Container = styled.div`
    height: 400px;
    flex: 1;
    position: relative;
`
export const Title = styled.h3`
    margin: 0;
    position: absolute;
    top: 20px;
    left: 100px;
    z-index: 1;
`

export const Legend = styled.span`
    position: absolute;
    top: 20px;
    right: 50px;
`
export const LegendText = styled.span`

`

export const LegendBullet = styled.span`
    border: 1px solid black;
    height: 10px;
    width: 10px;
    border-radius: 50%;
`