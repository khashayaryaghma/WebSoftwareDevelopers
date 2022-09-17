import { StyledArticle, StyledEighthSection, StyledH2 } from "./EighthSection.style"
import Button from "../Button/Button";

function EighthSection() {
  return (
    <StyledEighthSection>
      <StyledH2>
        We are directly involved in t​he process
      </StyledH2>
      <StyledArticle>
        <p className="para" style={{color: "#808080"}}>
          Nibh tortor id aliquet lectus. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. In hac habitasse platea dictumst quisque.
        </p>
        <p className="para">
          Non quam lacus suspendisse faucibus interdum. Tempor nec feugiat nisl pretium. Mi in nulla posuere sollicitudin aliquam ultrices. Quisque egestas diam in arcu cursus euismod quis. Libero volutpat sed cras ornare arcu dui vivamus arcu.
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
      </StyledArticle>
    </StyledEighthSection>
  )
}

export default EighthSection;