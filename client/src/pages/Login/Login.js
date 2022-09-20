import { StyledForm, StyledH1, StyledLogin } from "./Login.styles"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button" 
function Login() {
  return (
    <StyledLogin>
      <StyledForm>
        <StyledH1>Login</StyledH1>
        <Input label="Username" type="text"/>
        <Input label="Password" type="password"/>
          <Button
              bgColor="#29B7DD"
              color="white"
              brRadius="2px"
              pd="0.5rem 3.2rem"
              fSize="1.5rem"
          >
              L O G I N
          </Button>
      </StyledForm>
    </StyledLogin>
  )
}

export default Login