import styled from "styled-components";

export const StyledLogin = styled.section`
    height: 53rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledForm = styled.form`
    position: absolute;
    z-index: 10;
    background-color: rgba(60, 6, 94, 0.55);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(15px);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 28rem;
    height: 30rem;
    border-radius: 7px;
`

export const StyledH1 = styled.h1`
    font-size: 2rem;
    margin-bottom: 3rem;
`