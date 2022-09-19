import styled from "styled-components";

export const StyledUl = styled.ul`
    list-style: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 7.3rem;
    & > * {
        & > * {
           color: white; 
        }
    }
`;
