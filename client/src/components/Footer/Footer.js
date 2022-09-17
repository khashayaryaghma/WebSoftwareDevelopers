import { StyledArticle, StyledContactUs, StyledDiv, StyledFooter, StyledForm, StyledH3, StyledIconContainer, StyledPara, StyledTextArea } from "./Footer.style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
import Input from "../Input/Input";
import Button from "../Button/Button";

function Footer({ bgColor }) {
    return (
        <StyledFooter bgColor={bgColor}>
            <StyledContactUs>
                <div>
                    <FontAwesomeIcon icon={faGuitar} />
                    <StyledH3>OUR MAIN OFFICE</StyledH3>
                    <StyledPara>SoHo 9 NewYork, NY 1001</StyledPara>
                </div>
                <div>
                    <FontAwesomeIcon icon={faGuitar} />
                    <StyledH3>PHONE NUMBER</StyledH3>
                    <StyledPara>234-9876-5400</StyledPara>
                </div>
                <div>
                    <FontAwesomeIcon icon={faGuitar} />
                    <StyledH3>EMAIL</StyledH3>
                    <StyledPara><a href="mailto:khashayaryaghma@gmail.com" style={{ color: "#3C065E" }}>khashayaryaghma@gmail.com</a></StyledPara>
                </div>
            </StyledContactUs>
            <StyledArticle>
                <h2 className="heading">
                    Get in touch
                </h2>
                <p className="para"><strong><em>We can ensure reliability, low cost fares and most important, with safety and comfort in mind.</em></strong></p>
                <p className="para">Etiam sit amet convallis erat – class aptent taciti sociosqu ad litora torquent per conubia! Maecenas gravida lacus. Lorem etiam sit amet convallis erat.</p>
                <StyledIconContainer>
                    <FontAwesomeIcon icon={faGuitar} />
                    <FontAwesomeIcon icon={faGuitar} />
                    <FontAwesomeIcon icon={faGuitar} />
                    <FontAwesomeIcon icon={faGuitar} />
                </StyledIconContainer>
            </StyledArticle>
            <StyledForm>
                <StyledDiv>
                    <Input type="email" placeHolder="Enter a valid email address" label="Email" />
                    <Input type="text" placeHolder="Enter your Name" label="Name" />
                </StyledDiv>
                <label style={{fontSize: "1.5rem"}}>
                    Message
                    <StyledTextArea placeholder="Enter your message" />

                </label>
                <Button
                    bgColor="#29B7DD"
                    color="white"
                    brRadius="2px"
                    pd="0.5rem 3.2rem"
                    fSize="1.5rem"
                >
                    S U B M I T
                </Button>
            </StyledForm>

        </StyledFooter>
    )
}

export default Footer