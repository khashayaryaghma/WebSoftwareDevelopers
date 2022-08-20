import { Link } from "react-router-dom"
import { StyledHeader, StyledImg } from "./Header.styles"

function Header({bgColor,imgSrc}) {
  return (
      <StyledHeader bgColor={bgColor}>
          <Link to={"/"}>
              <StyledImg imgSrc={imgSrc} />
          </Link>
      </StyledHeader>
  );
}

export default Header