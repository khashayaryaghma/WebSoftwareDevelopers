import { NavLink } from "react-router-dom";
import { StyledUl } from "./NavBar.styles";

function NavBar({ navItems }) {
    return (
        <nav>
            <StyledUl>
                {navItems.map((item) => {
                    return (
                        <li key={item.id}>
                            <NavLink to={item.route} >
                                {
                                item.name === "Login" ? item.name + " " : ""
                                }
                                {item.icon}
                            </NavLink>
                        </li>
                    );
                })}
            </StyledUl>
        </nav>
    );
}

export default NavBar;
