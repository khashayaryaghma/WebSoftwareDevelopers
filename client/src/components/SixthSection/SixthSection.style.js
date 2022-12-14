import styled from "styled-components";

export const StyledSixthSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    min-height: 38rem;
    padding-top: 1rem;
    padding-bottom: 3vmax;
`

export const StyledSixthArticle = styled.article`
    margin: 2rem;
    width: 19rem;
    min-height: 25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-evenly;
    text-align: right;
    & > * {
    margin: 1rem;
  }
`;