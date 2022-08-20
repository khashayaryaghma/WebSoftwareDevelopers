import { StyledButton } from "./Button.styles";

function Button({ color, bgColor, children, fSize, ...rest }) {
    return (
        <StyledButton color={color} bgColor={bgColor} fSize={fSize} {...rest}>
            {children}
        </StyledButton>
    );
}

export default Button;
