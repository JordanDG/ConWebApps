import React from "react";
import styled from "styled-components";

const ProgressBarMainContainer = styled.div`
    width: 100%;
    margin-top: 1.5vh;
    height: 2.5vh;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
`;

const ProgressBarMain = styled.div`
    height: 70%;
    margin-left: 1vw;
    width: ${props => props.ComponentWidth};
    background: rgb(144,163,249);
    background: linear-gradient(0deg, rgba(144,163,249,1) 0%, rgba(201,178,254,1) 100%);
    border-radius: 15px;
`;

function HorizontalProgressBar() {
    return (
        <ProgressBarMainContainer>
            <ProgressBarMain ComponentWidth="175px" />
        </ProgressBarMainContainer>
    );
};

export default HorizontalProgressBar;