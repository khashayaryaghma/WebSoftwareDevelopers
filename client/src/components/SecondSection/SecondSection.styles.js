import styled from "styled-components";

export const StyledSecondSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-height: 53rem;
    @media (max-width: 1000px) {
        min-height: 42rem;
    }
    padding: 1rem;
`;

export const StyledContainer = styled.section`
    display: grid;
    grid-gap: 1.2vmax;
    grid-template-columns: 2fr 1fr 1fr;
    @media (max-width: 560px) {
        grid-template-columns: 2fr 1fr;
    }
`;

export const StyledBox = styled.div`
    background-color: ${(props) => props.bgColor};
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.7vmax;
    line-height: 4vmax;
    min-width: 14vmax;
    min-height: 11vmax;
`;

export const StyledImageBox = styled.div`
    grid-row: ${(props) => props.gRow};
    background: url(${(props) => props.bg});
    background-size: cover;
    background-position: center;
    min-width: 31vmax;
    min-height: 28vmax;
`;
