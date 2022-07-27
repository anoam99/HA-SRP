import styled from "@emotion/styled"
import { FC } from "react"

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: radial-gradient(#4C4C4D 5%, transparent 5%);
    background-position: 0 0;
    background-size: 20px 20px;
`

export const Star  = styled.div<{starPosition: number[], dotColor: string, outline: string | undefined, shadow:  string | undefined }>`
    position: absolute;
    width: 20px;
    height: 20px;
    left: ${({starPosition}) => starPosition[0] * 20 + 'px'};
    top: ${({starPosition}) => starPosition[1] * 20 + 'px'};
    &:after {
        content: '';
        width: 1.67px;
        height: 1.67px;
        background-color: ${({dotColor}) => dotColor};
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) rotate(45deg);
    }
    ${({outline, shadow}) => outline &&
    `&:before {
        content: '';
        width: 4.245px;
        height: 4.24px;
        background-color: ${outline};
        ${shadow && `box-shadow: 0px 0px 9px ${shadow}`};
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) rotate(45deg);
    }
   `}
`

export const Line = styled.div<{linePosition: number[], lineColor: string}>`
    border: 1px solid ${({lineColor}) => lineColor};
    width: 300px;
    height: 300px;
    position: absolute;
    top: ${({linePosition}) => linePosition[0] * 20 + 'px'};
    left: ${({linePosition}) => linePosition[1] * 20 + 'px'};
    transform: translate(9.5px,-9.5px);
    -webkit-mask-image: linear-gradient(to left, transparent 50%, black 100%);
    mask-image: linear-gradient(to left, transparent 50%, black 100%);

`
