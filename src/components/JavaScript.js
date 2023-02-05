import React from 'react';
import styled from 'styled-components';
import logoImage from '../images/logo.png';
import homeImage from '../images/landing.png';
import editImage from '../images/entry.png';
import barChartImage from '../images/barchart.png';
import radarImage from '../images/radargraph.png';

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
    const ProjectImage = styled.img`
        border-radius: 5%;
        width: 400px;
        height: 400px;
        margin: 160px;
        transform: scale(1.6);
        transition: transform 0.3s ease-in-out;
    `
    const ImageDiv = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
        padding: 20px;
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
    </JavaScriptDiv>
    <ImageDiv>
    <ProjectImage src={homeImage} alt="homepage_image" onError={onImageError}/>
    <ProjectImage src={editImage} alt="entry_image" onError={onImageError}/>
    <ProjectImage src={barChartImage} alt="barchart_image" onError={onImageError}/>
    <ProjectImage src={radarImage} alt="radar_image" onError={onImageError}/>
    </ImageDiv>
    </>
    )
};

export default JavaScript;