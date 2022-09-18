import styled from "styled-components";

export const StyledSeventhSection = styled.section`
    background-color: ${(props) =>
        props.bgColor === "purple" ? "#3C065E" : props.bgColor};
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 47vmax;
        z-index: -4;
`

export const StyledArticle = styled.article`
    max-width: 24vmax;
    padding: 2.2vmax;
    padding-right:2.7vmax;
    padding-left:2.7vmax ;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    position: relative;
    z-index:10;
    & > * {
    margin: 0.7vmax;
  }
`;

export const StyledContainerImage = styled.div`
  position: relative;
  z-index: 5;
  top: -7vmax;
  right: 5vmax;
`

export const StyledBBg = styled.div`
  position: absolute;
  z-index: -2;
  background-color: #5D3BE7;
  width: 37vmax;
  height: 26vmax;
  bottom: -2.75vmax;
  right: -2.75vmax;
`

export const StyledContainerArticle = styled.div`
  position: relative;
  bottom: -4vmax;
  right: -5vmax;
`

export const StyledSbgContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 5;
  top: -4vmax;
  right: -2.5vmax;
`
