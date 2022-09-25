import { StyledBgContainer, StyledRow } from "./AnimationBackground.styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb, faHeart, faCar, faMugHot, faGift, faRocket, faGhost, faPlane, faSnowflake, faEarthAmericas, faPalette, faBug, faGamepad, faUserSecret, faBath, faMoon, faWineBottle, faGuitar, faStar, faMusic } from "@fortawesome/free-solid-svg-icons";

function AnimationBackground() {
    return (
        <StyledBgContainer>
            {Array(20).fill("1").map(()=>(
                <StyledRow>
                    {Array(2).fill(2).map(()=>(
                        <div>
                        <FontAwesomeIcon icon={faBomb} />
                        <FontAwesomeIcon icon={faHeart} />
                        <FontAwesomeIcon icon={faCar} />
                        <FontAwesomeIcon icon={faMugHot} />
                        <FontAwesomeIcon icon={faGift} />
                        <FontAwesomeIcon icon={faRocket} />
                        <FontAwesomeIcon icon={faGhost} />
                        <FontAwesomeIcon icon={faPlane} />
                        <FontAwesomeIcon icon={faSnowflake} />
                        <FontAwesomeIcon icon={faEarthAmericas} />
                        <FontAwesomeIcon icon={faPalette} />
                        <FontAwesomeIcon icon={faBug} />
                        <FontAwesomeIcon icon={faGamepad} />
                        <FontAwesomeIcon icon={faUserSecret} />
                        <FontAwesomeIcon icon={faBath} />
                        <FontAwesomeIcon icon={faMoon} />
                        <FontAwesomeIcon icon={faWineBottle} />
                        <FontAwesomeIcon icon={faGuitar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faMusic} />
                    </div>
                    ))}
            </StyledRow>
            ))}
        </StyledBgContainer>
    )
}

export default AnimationBackground