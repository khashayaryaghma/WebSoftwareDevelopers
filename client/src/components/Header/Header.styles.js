import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${(props) =>
        props.bgColor === "purple" ? "#3C065E" : props.bgColor};
    padding-top: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
