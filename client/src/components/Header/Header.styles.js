import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${(props) =>
        props.bgColor === "purple" ? "#3C065E" : props.bgColor};
    padding:${(props)=>props.pd} ;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
