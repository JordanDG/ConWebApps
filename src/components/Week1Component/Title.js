import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`;

const TitleText = styled.h1`
    color: #BC9CFF;
    font-weight: 300;
    font-size: 42px;
    margin-top: 10px;
`;

function Title(props) {
    const { Text } = props; 
    return (
        <TitleContainer>
            <TitleText>{Text}</TitleText>
        </TitleContainer>
    );
};

export default Title;