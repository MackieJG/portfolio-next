import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../App.css"



const BackgroundNav = styled.div`
    background-color: #eab676;
    height: 80px;
`
const NavList = styled.div`
    display:flex;
    flex-direction: row;
    padding-top: 20px;
    padding-left:120px;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
`

const ListItem = styled.li`
    flex: 200px;
    font-family: Roboto, sans-serif;
    list-style-type: none;
    font-size: 25px;
    font-weight: bolder;
    color: ${props => props.color};
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: black;
  border-style: solid;
  border-width:5px;
  border-radius: 10px;
  padding: 5px;
`



const NavBar = () => {
    return (
        <>  
        <BackgroundNav>
            <NavList>
                <ListItem color="black">
                    <StyledLink to="/portfolio_webpage">Home</StyledLink>
                </ListItem>
                <ListItem color="black">
                    <StyledLink to="/python">Python</StyledLink>
                </ListItem>
                <ListItem color="black">
                    <StyledLink to="/javascript">JavaScript</StyledLink>
                </ListItem>
                <ListItem color="black">
                    <StyledLink to="/java">Java</StyledLink>
                </ListItem>
            </NavList>
        </BackgroundNav>
        </>
    )
};

export default NavBar;