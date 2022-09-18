import styled from "styled-components";

export const StyledImage = styled.img.attrs((props) => ({
    src: props.imgSrc,
    alt: props.alt,
    draggable: false
}))`
    width: ${(props) => props.size};
    border-radius: ${(props) => props.brRadius};
`;
