import styled from "styled-components";

export const StyledImage = styled.img.attrs((props) => ({
    src: props.imgSrc,
    alt: props.alt,
}))`
    width: ${(props) => props.size};
    border-radius: ${(props) => props.brRadius};
`;
