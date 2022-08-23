import styled from "styled-components";

export const StyledFifthSection = styled.section`
    background-color: ${(props) =>
        props.bgColor === "purple" ? "#3C065E" : props.bgColor};
    display: flex;
`;

export const GridContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.2vmax;
`;
export const StyledBox = styled.div`
    background-color: white;
    width: 10rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledDiv = styled.div`
    font-size: 2rem;
    border-radius: 50%;
    margin-bottom: 1rem;
    padding: 0.5rem;
    background-color: #29b7dd;
    color: white;
`;
