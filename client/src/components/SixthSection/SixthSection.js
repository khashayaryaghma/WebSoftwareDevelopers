import { StyledSixthSection, StyledSixthArticle } from "./SixthSection.style"
import Button from "../Button/Button";
import Image from "../Image/Image";
import sixthSection from "../../assets/images/sixthSection.jpg"

function SixthSection() {
    return (
        <StyledSixthSection>
            <Image imgSrc={sixthSection} size="42vmax" />
            <StyledSixthArticle>
                <h1 className="heading" style={{ color: "#29B7DD" }}>
                    IT solutions
                </h1>
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
                    pd="0.5rem 3.5rem"
                    fSize="1.5rem"
                >
                    L E A R N M O R E
                </Button>
            </StyledSixthArticle>
        </StyledSixthSection>
    )
}

export default SixthSection