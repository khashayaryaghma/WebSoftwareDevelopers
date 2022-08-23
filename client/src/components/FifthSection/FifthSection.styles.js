import styled from "styled-components";

export const StyledFifthSection = styled.section`
    background-color: ${(props) =>
        props.bgColor === "purple" ? "#3C065E" : props.bgColor};
`;
