import { StyledImage } from "./Image.styles";

function Image({ imgSrc, alt, size, brRadius, ...rest }) {
    return (
        <StyledImage
            imgSrc={imgSrc}
            alt={alt}
            size={size}
            brRadius={brRadius}
            {...rest}
        />
    );
}

export default Image;
