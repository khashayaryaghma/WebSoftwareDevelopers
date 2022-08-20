import { NavLink } from "react-router-dom";
import { StyledNav, StyledUl } from "./NavBar.styles";

function NavBar({ bgColor, navItems, activeStyle }) {
    return (
        <StyledNav bgColor={bgColor}>
            <StyledUl>
                {navItems.map((item) => {
                    return (
                        <li>
                            <NavLink
                                to={item.route}
                                style={({ isActive }) =>
                                    isActive
                                        ? activeStyle
                                        : {
                                              color: "white",
                                              fontSize: "1.5rem",
                                              padding: "0 1rem",
                                          }
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    );
                })}
            </StyledUl>
        </StyledNav>
    );
}

export default NavBar;
