import { StyledArticle, StyledContactUs, StyledFooter, StyledH3, StyledIconContainer, StyledPara } from "./Footer.style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";

function Footer({ bgColor }) {
    return (
        <StyledFooter bgColor={bgColor}>
            <StyledContactUs>
                <div>
                    <FontAwesomeIcon icon={faGuitar} />
                    <StyledH3>OUR MAIN OFFICE</StyledH3>
                    <StyledPara>SoHo 94 New York, NY 1001</StyledPara>
                </div>
                <div>
                    <FontAwesomeIcon icon={faGuitar} />
                    <StyledH3>PHONE NUMBER</StyledH3>
                    <StyledPara>234-9876-5400</StyledPara>
                </div>
                <div>
                    <FontAwesomeIcon icon={faGuitar} />
                    <StyledH3>EMAIL</StyledH3>
                    <StyledPara><a href="mailto:khashayaryaghma@gmail.com" style={{color:"#3C065E"}}>khashayaryaghma@gmail.com</a></StyledPara>
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
        </StyledFooter>
    )
}

export default Footer