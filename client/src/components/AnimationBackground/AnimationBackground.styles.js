import styled, { keyframes } from "styled-components";

export const StyledBgContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 5;
`
const animate1 = keyframes`
    0%{
    transform: translateX(100%);
    }
    100%{
        transform: translateX(-100%);
    }
`

const animate2 = keyframes`
    0%{
        transform: translateX(0%);
    }
    100%{
        transform: translateX(-200%);
    }
`

const animate3 = keyframes`
    0%{
        transform: translateX(-100%);
    }
    100%{
        transform: translateX(100%);
    }
`

const animate4 = keyframes`
    0%{
        transform: translateX(-200%);
    }
    100%{
        transform: translateX(0%);
    }
`

export const StyledRow = styled.div`
    position: relative;
    top: -50%;
    width: 100%;
    display: flex;
    padding: 10px 0;
    white-space: nowrap;
    font-size: 64px;
    transform: rotate(-30deg);
    &:nth-child(even) div{
        animation: ${animate3} 80s linear infinite;
        animation-delay: -80s;
        &:nth-child(even){
            animation: ${animate4} 80s linear infinite;
            animation-delay: -40s;
        }
    }
    & > * {
        animation: ${animate1} 80s linear infinite;
        animation-delay: -80s;
        &:nth-child(2){
            animation: ${animate2} 80s linear infinite;
            animation-delay: -40s;
        }
        & > * {
            color: rgba(60, 6, 94, 0.5);
            transition: 1s;
            padding: 0 5px;
            user-select: none;
            cursor: default;
            &:hover{
                transition: 0s;
                color: #29B7DD;
                text-shadow: 0 0 120px #29B7DD;
            }
  }
  }
`

