import { Link } from "react-router-dom";
import { StyledHeader } from "./Header.styles";
// import Button from "../Button/Button";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "../Image/Image";
import NavBar from "../NavBar/NavBar";
import { navItems } from "../../constants/navItems";

function Header({ bgColor, imgSrc, pd }) {
    return (
        <StyledHeader bgColor={bgColor} pd={pd}>
            <Link to={"/"}>
                <Image imgSrc={imgSrc} size="7rem" alt="Logo" />
            </Link>
            {/* <Button color="white" fSize="1.75rem" bgColor="inherit">
                <FontAwesomeIcon icon={faBars} />
            </Button> */}
            <NavBar navItems={navItems} />
        </StyledHeader>
    );
}

export default Header;
