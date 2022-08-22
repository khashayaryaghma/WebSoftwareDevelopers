import {
    StyledBox,
    StyledContainer,
    StyledImageBox,
    StyledSecondSection,
} from "./SecondSection.styles";
import secondSectionImage from "../../assets/images/secondSection.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";

function SecondSection() {
    return (
        <StyledSecondSection>
            <h2 className="heading">Key Features</h2>
            <p className="para">
                Sample text. Click to select the text box. Click again or double
                click to start editing the text.
            </p>
            <StyledContainer>
                <StyledImageBox
                    gRow="1 / span 2"
                    bg={secondSectionImage}
                ></StyledImageBox>
                <StyledBox bgColor="#29B7DD">
                    <FontAwesomeIcon icon={faCode} />
                    <p>Development</p>
                </StyledBox>
                <StyledBox bgColor="#8B72EE">
                    <FontAwesomeIcon icon={faBriefcase} />
                    <p>Top Skills</p>
                </StyledBox>
                <StyledBox bgColor="#5D3BE7">
                    <FontAwesomeIcon icon={faPalette} />
                    <p>Design</p>
                </StyledBox>
                <StyledBox bgColor="#BD72EF">
                    <FontAwesomeIcon icon={faLaptop} />
                    <p>Responsive</p>
                </StyledBox>
            </StyledContainer>
            <p className="para">
                Image from
                <a href="https://www.freepik.com/vectors/computer"> Freepik</a>
            </p>
        </StyledSecondSection>
    );
}

export default SecondSection;
