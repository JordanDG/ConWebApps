import React from "react";
import styled from "styled-components";

const ProgressContainer = styled.div`
    width: 80%;
    margin-left: 10%;
    height: 6vh;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
`;

const ProgressBarBlock = styled.div`
    width: 5.5vw;
    height: ${props => props.ComponentHeight};
    border-radius: 5px;
    background: rgb(102,210,231);
    background: linear-gradient(0deg, rgba(102,210,231,1) 0%, rgba(111,207,154,1) 100%);
`;

function ProgressBar() {
    return (
        <ProgressContainer>
            <ProgressBarBlock ComponentHeight="25px" />
            <ProgressBarBlock ComponentHeight="35px" />
            <ProgressBarBlock ComponentHeight="45px" />
            <ProgressBarBlock ComponentHeight="35px" />
            <ProgressBarBlock ComponentHeight="0px" />
            <ProgressBarBlock ComponentHeight="25px" />
            <ProgressBarBlock ComponentHeight="20px" />
            <ProgressBarBlock ComponentHeight="30px" />
            <ProgressBarBlock ComponentHeight="45px" />
            <ProgressBarBlock ComponentHeight="35px" />
        </ProgressContainer>
    );
};

export default ProgressBar;