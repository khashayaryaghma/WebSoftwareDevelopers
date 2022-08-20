import { StyledButton } from "./Button.styles";

function Button({ color, bgColor, children, fSize, cursor, ...rest }) {
    return (
        <StyledButton
            color={color}
            bgColor={bgColor}
            fSize={fSize}
            cursor={cursor}
            {...rest}
        >
            {children}
        </StyledButton>
    );
}

export default Button;
