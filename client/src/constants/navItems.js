import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export const navItems =[
    {
        name:"Login",
        route:"/login",
        icon:<FontAwesomeIcon icon={faRightToBracket} />,
        id: 12345
    },{
        name:"Home",
        route:"/",
        icon: <FontAwesomeIcon icon={faHouse} />,
        id: 1234
    }
]