import {
    GridContainer, StyledBBgImage, StyledBgImage, StyledBox, StyledDiv, StyledFifthSection
} from "./FifthSection.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, faGlobe, faRobot, faWrench } from "@fortawesome/free-solid-svg-icons";
import Image from "../Image/Image";
import fifthSectionImage from "../../assets/images/fifthSection.jpg"
import sbg from "../../assets/images/sbg.png"

function FifthSection({ bgColor }) {
    return (
        <StyledFifthSection bgColor={bgColor}>
            <StyledBgImage>
                <Image imgSrc={fifthSectionImage} size="49vmax"/>
                <StyledBBgImage>
                <Image imgSrc={sbg} size="26vmax"/>
                <Image imgSrc={sbg} size="26vmax"/>
                </StyledBBgImage>
            <GridContainer>
                <StyledBox>
                    <StyledDiv>
                        <FontAwesomeIcon icon={faComputer} />
                    </StyledDiv>
                    <p style={{ fontSize: "1.2vmax" }}>DEVELOPMENT</p>
                </StyledBox>
                <StyledBox>
                    <StyledDiv>
                        <FontAwesomeIcon icon={faGlobe} />
                    </StyledDiv>
                    <p style={{ fontSize: "1.2vmax" }}>5G NETWORK</p>
                </StyledBox>
                <StyledBox>
                    <StyledDiv>
                        <FontAwesomeIcon icon={faRobot} />
                    </StyledDiv>
                    <p style={{ fontSize: "1.2vmax" }}>AI PRODUCTS</p>
                </StyledBox>
                <StyledBox>
                    <StyledDiv>
                        <FontAwesomeIcon icon={faWrench} />
                    </StyledDiv>
                    <p style={{ fontSize: "1.2vmax" }}>AUTOMATION</p>
                </StyledBox>
            </GridContainer>
            </StyledBgImage>
        </StyledFifthSection>
    );
}

export default FifthSection;
