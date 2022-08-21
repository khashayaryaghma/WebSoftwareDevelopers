import { StyledArticle, StyledFSection } from "./FirstSection.styles";
import Button from "../Button/Button";
import firstSection from "../../assets/images/firstSection.jpg";
import Image from "../Image/Image";

function FirstSection({ bgColor }) {
    return (
        <StyledFSection bgColor={bgColor}>
            <StyledArticle>
                <h1 style={{ fontSize: "55px" }}>Web Software Developers</h1>
                <p style={{ fontSize: "22px" }}>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                </p>
                <p style={{ fontSize: "22px" }}>
                    Image from
                    <a
                        href="https://www.freepik.com/vectors/computer"
                        style={{ color: "white" }}
                    >
                        {" "}
                        Freepik
                    </a>
                </p>
                <Button
                    bgColor="#29B7DD"
                    color="white"
                    brRadius="30px"
                    pd="0.5rem 3.2rem"
                    fSize="1.5rem"
                >
                    R E A D M O R E
                </Button>
            </StyledArticle>
            <Image imgSrc={firstSection} size="35vmax" />
        </StyledFSection>
    );
}

export default FirstSection;
