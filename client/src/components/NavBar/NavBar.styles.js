import styled from "styled-components";

export const StyledNav = styled.nav`
    background-color: ${(props) =>
        props.bgColor === "purple" ? "#3C065E" : props.bgColor};
    padding: 0.5rem;
`;

export const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
`;
