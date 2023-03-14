import React from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player'

const Python = () => {

    const Title = styled.h4`
        
    `
    const PythonDiv = styled.div`
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
        <div>
            <PythonDiv>
                <Title>Inventory Management App</Title>
                <GitHub href="https://github.com/MackieJG/Project_Python_W5" target="_blank">Github Link!</GitHub>
                <Paragraph1>Python/Flask/PostGreSQL
                </Paragraph1>
                <List1>
                    Create, Update, and Delete Equipment, Coffee and Producers.
                </List1>
                <ReactPlayer url="https://youtu.be/nWTkNJm1lsY" controls />
            </PythonDiv>

        </div>
    );
};

export default Python;