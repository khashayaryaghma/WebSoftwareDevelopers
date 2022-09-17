import styled from "styled-components";

export const StyledThirdSection = styled.section`
    background-color: ${(props) =>
        props.bgColor === "purple" ? "#3C065E" : props.bgColor};
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom:2rem ;
`;

export const StyledOl = styled.ol`
    list-style-type: decimal-leading-zero;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 6rem;
    @media (max-width: 1055px) {
        flex-direction:row;
        width:50rem;
        justify-content: space-around;
        flex-wrap:wrap;
        margin-left:3rem;
    }
`;

export const StyledLi = styled.li`
    font-size: 1.8rem;
    font-weight: bold;
`;

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    justify-content: space-around;
    min-height: 13rem;
    width: 16rem;
`;
export const FStyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 44rem;
    margin: 1rem;
    @media (max-width: 1055px) {
       align-items: center;
       min-height: 30rem;
    }
`;

