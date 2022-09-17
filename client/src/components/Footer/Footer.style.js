import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${(props) =>
        props.bgColor === "purple" ? "#3C065E" : props.bgColor};
`