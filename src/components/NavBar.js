import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../App.css"

const NavList = styled.div`
    display:flex;
    flex-direction: row;
    padding-top: 20px;
    padding-left: 60px;
    flex-wrap: wrap;
    
   
`

const ListItem = styled.li`
    flex: 200px;
    font-family: Roboto, sans-serif;
    list-style-type: none;
    font-size: 25px;
    font-weight: bolder;

`

const NavBar = () => {
    return (
        <>
            <NavList>
                <ListItem>
                    <Link to="/">Home</Link>
                </ListItem>
                <ListItem>
                    <Link to="/python">Python</Link>
                </ListItem>
                <ListItem>
                    <Link to="/javascript">JavaScript</Link>
                </ListItem>
                <ListItem>
                    <Link to="/java">Java</Link>
                </ListItem>
            </NavList>
        </>
    )
};

export default NavBar;