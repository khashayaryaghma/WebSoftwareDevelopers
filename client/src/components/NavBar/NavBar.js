import { NavLink } from "react-router-dom";
import { StyledNav, StyledUl } from "./NavBar.styles";
import { v4 as uuidv4 } from "uuid";

function NavBar({ bgColor, navItems, activeStyle }) {
    return (
        <StyledNav bgColor={bgColor}>
            <StyledUl>
                {navItems.map((item) => {
                    return (
                        <li key={uuidv4()}>
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
