import styled from "styled-components";

export const StyledInput = styled.input`
    display: block;
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
    width: 16rem;
    padding: 10px;
    margin-right: 2rem;
    margin-bottom: 2rem;
    border-bottom: 2px white solid;
    color: white;
    &:focus {
        outline: none;
    }
`

export const StyledLabel = styled.label`
    font-size: 1.5rem;
    display: block;
`