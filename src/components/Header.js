import styled from "styled-components";
import { useNavigate } from "react-router";
import {isMobile} from 'react-device-detect';

function Header() {

  const options = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];

  const handleMenuChange = (e) => {
    {e.target.value === "HOME" ? navigate('/') : 
    navigate(`./${e.target.value.toLowerCase()}`)}
  };

    let navigate = useNavigate();

      const toProjects = () => {
    navigate("/projects");
  };

  const toHome = () => {
    navigate("/");
  };

  const toAbout = () => {
    navigate("/about");
  };

  const toContact = () => {
      navigate("/contact");
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
</div>
:
<div>
        <select onChange={handleMenuChange} className='select'>
          {options.map((option) => (
            <option>{option}</option>
          ))}
        </select>
  </div>
}
      </div>
    )
}


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
