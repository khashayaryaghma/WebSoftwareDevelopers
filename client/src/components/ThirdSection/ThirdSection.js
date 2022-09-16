import Image from "../Image/Image";
import {
    StyledDiv,
    StyledLi,
    StyledOl,
    StyledThirdSection,
    FStyledDiv,
} from "./ThirdSection.styles";
import thirdSectionImage from "../../assets/images/thirdSection.jpg";

function ThirdSection({ bgColor }) {
    return (
        <StyledThirdSection bgColor={bgColor}>
            <FStyledDiv>
                <h2 style={{ fontSize: "4.5rem", marginLeft: "1rem", marginRight: "1rem" }}>Data Visualization</h2>
                <Image imgSrc={thirdSectionImage} size="38vmax" />
                <p className="para">
                    Image from
                    <a
                        href="https://www.freepik.com/vectors/computer"
                        style={{ color: "white" }}
                    >
                        {" "}
                        Freepik
                    </a>
                </p>
            </FStyledDiv>
            <StyledOl>
                <StyledDiv>
                    <StyledLi> GOALS</StyledLi>
                    <p className="para">
                        Sample text. Click to select the text box. Click again
                        or double click to start editing the text.
                    </p>
                    <a href="/" style={{ color: "white", fontSize: "1.6rem" }}>
                        MORE
                    </a>
                </StyledDiv>
                <StyledDiv>
                    <StyledLi> STRATEGY</StyledLi>
                    <p className="para">
                        Sample text. Click to select the text box. Click again
                        or double click to start editing the text.
                    </p>
                    <a href="/" style={{ color: "white", fontSize: "1.6rem" }}>
                        MORE
                    </a>
                </StyledDiv>
            </StyledOl>
        </StyledThirdSection>
    );
}

export default ThirdSection;
