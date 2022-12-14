import {
    StyledFourthSection,
    StyledSecondArticle,
} from "./FourthSection.styles";
import Button from "../Button/Button";
import Image from "../Image/Image";
import fourthImage from "../../assets/images/fourthSection.jpg";

function FourthSection() {
    return (
        <StyledFourthSection>
            <StyledSecondArticle>
                <h2 className="heading" style={{ color: "#29B7DD" }}>
                    IT solutions
                </h2>
                <p className="para">
                    We collaborate with you to create new value through digital
                    transformation. We have hundreds of specialists at your
                    service.
                </p>
                <p className="para">
                    Image from
                    <a href="https://www.freepik.com/vectors/computer">
                        {" "}
                        Freepik
                    </a>
                </p>
                <Button
                    bgColor="#29B7DD"
                    color="white"
                    brRadius="30px"
                    pd="0.5rem 3.2rem"
                    fSize="1.2rem"
                >
                    L E A R N M O R E
                </Button>
            </StyledSecondArticle>
            <Image imgSrc={fourthImage} size="43vmax" />
        </StyledFourthSection>
    );
}

export default FourthSection;
