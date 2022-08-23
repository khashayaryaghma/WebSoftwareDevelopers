import styled from "styled-components";

export const StyledFSection = styled.section`
    background-color: ${(props) =>
        props.bgColor === "purple" ? "#3C065E" : props.bgColor};
    color: white;
    display: flex;
    flex-wrap: wrap-reverse;
    align-items: center;
    justify-content: center;
`;

export const StyledArticle = styled.article`
    margin: 2rem;
    width: 25rem;
    min-height:28rem ;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
`;