import styled from "styled-components";

export const StyledSeventhSection = styled.section`
    background-color: ${(props) =>
        props.bgColor === "purple" ? "#3C065E" : props.bgColor};
`

export const StyledArticle = styled.article`
    max-width: 28rem;
    min-height:26rem ;
    padding: 3rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    & > * {
    margin: 1rem;
  }
`;