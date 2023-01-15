import React from "react";
import profileImage from "../images/profileImage.jpg";
import styled from "styled-components";
import "../App.css"

const Home = () => {

    const onImageError = (e) => {
        e.target.src = profileImage
    }
    const HomeDiv = styled.div`
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
    const ImageStyle = styled.img`
        border-radius: 50%;
        width: 300px;
        height: 300px;
        border: 4px solid black;
       
       
    
    `
    const Title = styled.h4`

    `
    return (
    <HomeDiv>
        <ImageStyle src={profileImage} alt="profile_image" onError={onImageError}/>
        <Title>Hello! I'm Joshua Mackie and welcome to my portfolio.</Title>
    </HomeDiv>
    )
};

export default Home;