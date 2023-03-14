import React from 'react';
import styled from 'styled-components';
import logoImage from '../images/logo.png';
import ReactPlayer from 'react-player';

const JavaScript = () => {


    const onImageError = (e) => {
        e.target.src = logoImage
    }
    
    const JavaScriptDiv = styled.div`
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
    const LogoImage = styled.img`
        border-radius: 50%;
        width: 300px;
        height: 300px;
    `
   


    return(
        <>
        <JavaScriptDiv>
            <LogoImage src={logoImage} alt="project_logo" onError={onImageError}/>
            <h4>CodeClan Journal App</h4>
            <GitHub href="https://github.com/MackieJG/codeclanJournalApp" target="_blank">Github Link!</GitHub>
            <Paragraph1>JavaScript/React/RestApi/MongoDB
            </Paragraph1>
             <List1>
                CRUD Functionality with dynamic visual representation.
            </List1>
            <ReactPlayer url="https://youtu.be/e27rc_Zbops" controls />
    </JavaScriptDiv>
  
    </>
    )
};

export default JavaScript;