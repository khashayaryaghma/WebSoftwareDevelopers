import styled from "styled-components";

export const StyledFifthSection = styled.section`
    background-color: ${(props) =>
        props.bgColor === "purple" ? "#3C065E" : props.bgColor};
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 55vmax;
    position:relative;
    z-index: -2;
`;

export const GridContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.2vmax;
    position: absolute;
    bottom: -5vmax;
    right: -5vmax;
    @media (max-width: 450px) {
        right: -1vmax;
    }
`;
export const StyledBox = styled.div`
    background-color: white;
    width: 11vmax;
    height: 7vmax;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledDiv = styled.div`
    font-size: 1.3vmax;
    border-radius: 50%;
    margin-bottom: 0.5vmax;
    padding: 0.5vmax;
    background-color: #29b7dd;
    color: white;
`;

export const StyledBgImage = styled.div`
    position: relative;
    
`

export const StyledBBgImage = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: -2vmax;
    right: -4vmax;
    z-index: -1;
    @media (max-width: 450px) {
        right: -2vmax;
    }
`