import { Link } from "react-router-dom";
import { StyledHeader, StyledImg } from "./Header.styles";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header({ bgColor, imgSrc , pd}) {
    return (
        <StyledHeader bgColor={bgColor} pd={pd}>
            <Link to={"/"}>
                <StyledImg imgSrc={imgSrc} />
            </Link>
            <Button color="white" fSize="1.75rem" bgColor="inherit">
                <FontAwesomeIcon icon={faBars} />
            </Button>
        </StyledHeader>
    );
}

export default Header;
