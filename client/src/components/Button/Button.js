import { StyledButton } from "./Button.styles";

function Button({
    color,
    bgColor,
    children,
    fSize,
    cursor,
    brRadius,
    pd,
    ...rest
}) {
    return (
        <StyledButton
            color={color}
            bgColor={bgColor}
            fSize={fSize}
            cursor={cursor}
            brRadius={brRadius}
            pd={pd}
            {...rest}
        >
            {children}
        </StyledButton>
    );
}

export default Button;
