import styled from "styled-components";

export const StyledUl = styled.ul`
    list-style: none;
    font-size: 1.75rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 11.5rem;
    & > * {
        & > * {
           color: white; 
        }
    }
`;
