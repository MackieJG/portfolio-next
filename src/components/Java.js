import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const Java = () => {

    const JavaDiv = styled.div`
        font-family: Roboto, sans-serif;
        font-size: 25px;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        min-height: 0;
        min-width: 0;
        overflow: hidden;
        align-items: center;
        padding-top: 40px;
    `
      const Paragraph1 = styled.p`
      font-size: 17px;
    `

    const List1 = styled.li`
      font-size: 17px;
    `
     const GitHub = styled.a`
     text-decoration: none;
     color: #4272bd;
     border-style: solid;
     border-width: 5px;
     border-radius: 10px;
     padding: 5px;
    `
    return (
        <JavaDiv>
            <h4>Rise Budgeting App</h4>
            <GitHub href="https://github.com/MackieJG/RiseBudgetReact" target="_blank">Github Link!</GitHub>
            <Paragraph1>TypeScript/JavaScript/React/RestApi/Java/PostgreSQL</Paragraph1>
            <List1>
                CRUD Functionality with dynamic visual representation of expenses
            </List1>
            <ReactPlayer url="https://youtu.be/QDKnOq5sEZI" controls />
        </JavaDiv>
    )
};

export default Java;