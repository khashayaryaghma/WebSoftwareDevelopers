import { StyledSeventhSection, StyledArticle, StyledContainerImage, StyledBBg, StyledContainerArticle, StyledSbgContainer } from "./SeventhSection.style"
import Button from "../Button/Button";
import Image from "../Image/Image";
import seventhImage from "../../assets/images/seventhSection.jpg"
import sbg from "../../assets/images/sbg.png"

function SeventhSection({ bgColor }) {
  return (
    <StyledSeventhSection bgColor={bgColor}>
      <StyledContainerArticle>
        <StyledSbgContainer>
          <Image imgSrc={sbg} size="20vmax" />
          <Image imgSrc={sbg} size="20vmax" />
        </StyledSbgContainer>
        <StyledArticle>
          <h2 style={{ color: "#3C065E",fontSize:"2.5vmax" }}>Web Analytics</h2>
          <p style={{fontSize:"1.1vmax"}}>
            <em>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore</em>
          </p>
          <p style={{fontSize:"1.1vmax"}}>
            Image from
            <a
              href="https://www.freepik.com/vectors/computer"
            >
              {" "}
              Freepik
            </a>
          </p>
          <Button
            bgColor="#29B7DD"
            color="white"
            brRadius="30px"
            pd="0.5vmax 3vmax"
            fSize="0.8vmax"
          >
            R E A D M O R E
          </Button>
        </StyledArticle>
      </StyledContainerArticle>
      <StyledContainerImage>
        <Image imgSrc={seventhImage} size="37vmax" />
        <StyledBBg />
      </StyledContainerImage>
    </StyledSeventhSection>
  )
}

export default SeventhSection