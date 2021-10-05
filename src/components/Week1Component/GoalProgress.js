import React from "react";
import styled from "styled-components";

const GoalContainer = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding-bottom: 1vh;
`;

const GoalText = styled.p`
    color: #333;
    font-weight: 300;
    font-size: 16px;
    text-transform: uppercase;
    margin-left: 1vw;
    margin-top: 0px;
`;

const Bold = styled.div`
    font-weight: 700;
`;

function GoalProgress(props) {
    return (
        <GoalContainer>
            <GoalText><Bold>{props.CompletionPercentage}</Bold>TO GOAL</GoalText>
        </GoalContainer>
    );
};

export default GoalProgress;