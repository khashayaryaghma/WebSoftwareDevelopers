import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${(props) =>
        props.bgColor === "purple" ? "#3C065E" : props.bgColor};
        color: white;
        display: flex;
        justify-content: center;
        position: relative;
        padding-top: 8rem;
        padding-bottom: 4rem;
`

export const StyledArticle = styled.article`
    display: flex;
    flex-direction: column;
    width: 28rem;
    margin: 1rem;
    & > * {
    margin: 1rem;
  }
`

export const StyledIconContainer = styled.div`
    display: flex;
    font-size: 2rem;
    & > * {
    margin-right: 1rem;
  }
`

export const StyledContactUs = styled.div`
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    z-index: 1;
    top: -7rem;
    width: 100%;
    @media (max-width: 1500px) {
        top:-3.5rem;
    }
    & > * {
    width: 27vmin;
    height: 24vmin;
    background-color: white;
    box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px 0px;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 5vmin;
    color: #3C065E;
    & > * {
      margin: 1vmin;  
    }
  }
`

export const StyledH3 = styled.h3`
    font-size: 3vmin;
    color: black;
    font-weight: normal;
`

export const StyledPara = styled.p`
  font-size: 2vmin;
`