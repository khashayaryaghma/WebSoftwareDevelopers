import { StyledInput, StyledLabel } from "./Input.style"


function Input({ label, placeHolder, type }) {
    return (
        <StyledLabel>
            {label}
            <StyledInput placeholder={placeHolder} type={type} />
        </StyledLabel>
    )
}

export default Input;