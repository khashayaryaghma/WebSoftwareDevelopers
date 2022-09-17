import styled from "styled-components";

export const StyledEighthSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding-top: 4rem;
    padding-bottom: 4rem;
`

export const StyledH2 = styled.h2`
    font-size: 50px;
    width: 30rem;
    padding: 2rem;
    position: relative;
    font-weight: normal;
    &:before{
            content: "";
            position: absolute;
            left: 2rem;
            bottom: 0;
            height: 5px;
            width: 18%;
            border-bottom: 5px solid #29B7DD;
        }
`

export const StyledArticle = styled.article`
    padding: 2rem;
    display: flex;
    width: 36rem;
    min-height: 21rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    & > * {
    margin: 1rem;
  }
`