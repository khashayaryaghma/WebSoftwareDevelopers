import {
    GridContainer,
    StyledBox,
    StyledDiv,
    StyledFifthSection,
} from "./FifthSection.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faComputer,
    faGlobe,
    faRobot,
    faWrench,
} from "@fortawesome/free-solid-svg-icons";

function FifthSection({ bgColor }) {
    return (
        <StyledFifthSection bgColor={bgColor}>
            <GridContainer>
                <StyledBox>
                    <StyledDiv>
                        <FontAwesomeIcon icon={faComputer} />
                    </StyledDiv>
                    <p className="para">DEVELOPMENT</p>
                </StyledBox>
                <StyledBox>
                    <StyledDiv>
                        <FontAwesomeIcon icon={faGlobe} />
                    </StyledDiv>
                    <p className="para">5G NETWORK</p>
                </StyledBox>
                <StyledBox>
                    <StyledDiv>
                        <FontAwesomeIcon icon={faRobot} />
                    </StyledDiv>
                    <p className="para">AI PRODUCTS</p>
                </StyledBox>
                <StyledBox>
                    <StyledDiv>
                        <FontAwesomeIcon icon={faWrench} />
                    </StyledDiv>
                    <p className="para">AUTOMATION</p>
                </StyledBox>
            </GridContainer>
        </StyledFifthSection>
    );
}

export default FifthSection;
