import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../App.css"

const NavList = styled.div`
    display:flex;
    flex-direction: row;
    padding-top: 20px;
    padding-left:120px;
    flex-wrap: wrap;
    
   
`

const ListItem = styled.li`
    flex: 200px;
    font-family: Roboto, sans-serif;
    list-style-type: none;
    font-size: 25px;
    font-weight: bolder;
    color: ${props => props.color};


`

const NavBar = () => {
    return (
        <>
            <NavList>
                <ListItem color="black">
                    <Link to="/portfolio_webpage">Home</Link>
                </ListItem>
                <ListItem color="black">
                    <Link to="/python">Python</Link>
                </ListItem>
                <ListItem color="black">
                    <Link to="/javascript">JavaScript</Link>
                </ListItem>
                <ListItem color="black">
                    <Link to="/java">Java</Link>
                </ListItem>
            </NavList>
        </>
    )
};

export default NavBar;