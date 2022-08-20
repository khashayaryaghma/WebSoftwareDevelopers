import styled from "styled-components";

export const StyledButton = styled.button.attrs(() => ({
    onclick: null,
}))`
    color: ${(props) => props.color};
    background-color: ${(props) => props.bgColor};
    font-size: ${(props) => props.fSize};
    border: ${(props) => props.border || "none"};
`;
