import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${(props) =>
    props.bgColor === "purple" ? "#3C065E" : props.bgColor};
        color: white;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        position: relative;
        padding-top: 8rem;
        padding-bottom: 6rem;
`

export const StyledArticle = styled.article`
    display: flex;
    flex-direction: column;
    width: 28rem;
    margin: 2rem;
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
    font-size: 7vmin;
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
  font-size: 2.2vmin;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem;
`

export const StyledDiv = styled.div`
  display: flex;
  flex-wrap:wrap;
`

export const StyledTextArea = styled.textarea`
  display: block;
  background-color: transparent;
  border: none;
  border-bottom: 2px white solid;
  color: white;
  font-size: 1.5rem;
  padding: 10px;
  margin-bottom: 2rem;
  resize: none;
  width: 100%;
  height: 8rem;
  &:focus {
        outline: none;
    }
`