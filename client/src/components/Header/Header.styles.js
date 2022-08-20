import styled from "styled-components";
import logo from "../../assets/images/logo.png"

export const StyledHeader = styled.header`
    background-color: ${(props) =>
        props.bgColor === "purple" ? "#3C065E" : props.bgColor};
    display: flex;
`;

export const StyledImg = styled.img.attrs((props) => ({ src: props.imgSrc ||logo}))`
    width:9rem
`;
