import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import {isMobile} from 'react-device-detect';
import menu from "../menu.png";

function Header() {
  const [drop, setDrop] = useState(false)

  const options = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];

  const handleMenuChange = (e) => {
    {e.target.value === "HOME" ? navigate('/') : 
    navigate(`./${e.target.value.toLowerCase()}`)}
  };

    let navigate = useNavigate();

      const toProjects = () => {
    navigate("/projects");
    setDrop(false)
  };

  const toHome = () => {
    navigate("/");
    setDrop(false)
  };

  const toAbout = () => {
    navigate("/about");
    setDrop(false)
  };

  const toContact = () => {
      navigate("/contact");
      setDrop(false)
  }

    return(
      <div>
      {!isMobile ?
        <div>
          <Container>
            <Buttons>
<button className="glow-on-hover" onClick={toProjects}>
  Projects
</button> 
<button className="glow-on-hover" onClick={toAbout}>
  About
</button>
<button className="glow-on-hover" onClick={toContact}>
  Contact
</button>
</Buttons> 
<Home>
<button className="glow-on-hover" onClick={toHome}>
  Noam Lubofsky
</button> 
</Home>

</Container>
<div>

</div>
</div>
:
<div>
        {/* <select onChange={handleMenuChange} className='select'>
          {options.map((option) => (
            <option>{option}</option>
          ))}
        </select> */}
        <Container>
        <MenuIcon src={menu} onClick={() => setDrop(!drop)} alt='menu'/>
        </Container>
        {!drop ? null :
<Dropdown>
  <Dropitem onClick={toHome}>HOME</Dropitem>
  <Dropitem onClick={toAbout}>ABOUT</Dropitem>
  <Dropitem onClick={toProjects}>PROJECTS</Dropitem>
  <Dropitem onClick={toContact}>CONTACT</Dropitem>
</Dropdown>
}
  </div>
}
      </div>
    )
}

const Dropitem = styled.div`

  background-color: grey;
  padding: 10px;
`;

const Dropdown = styled.div`
  justify-content: right;
  align-items: right;
  text-align: right;
  font-size: 1.5em;
  color: white;
  line-height: 30px;
  font-weight: bold;
  position: absolute;
  float: right;
  right: 0;
`;

const MenuIcon = styled.img`
    height: 50px;
    float: right;
    margin: 10px;
`;


const Container = styled.div`
    // background-color: #202124;
    background-color: #35363A;

    height: 10vh;
    // margin-bottom: 20vh;
`;

const Buttons = styled.div`
    float: right;
    display: flex;
    margin-right: 5vw;
`;

const Home = styled.div`
    float: left;
    display: flex;
    margin-left: 5vw;
`;


const Heading = styled.h1`
color: white;
font-size: 6em;
position: relative;

`;

const SubHeading = styled.h1`
color: white;
font-size: 4em;
`;

export default Header
