import { StyledSeventhSection, StyledArticle } from "./SeventhSection.style"
import Button from "../Button/Button";
import Image from "../Image/Image";

function SeventhSection({ bgColor }) {
  return (
    <StyledSeventhSection bgColor={bgColor}>
      <StyledArticle>
        <h2 className="heading">Web Analytics</h2>
        <p className="para">
          <em>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore</em>
        </p>
        <p className="para">
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
          pd="0.5rem 3.2rem"
          fSize="1.5rem"
        >
          R E A D M O R E
        </Button>
      </StyledArticle>
    </StyledSeventhSection>
  )
}

export default SeventhSection