import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${(props) =>
        props.bgColor === "purple" ? "#3C065E" : props.bgColor};
    padding-top: 1rem;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 20;
    padding-bottom: 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
