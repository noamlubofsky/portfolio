import styled from "styled-components";

function Footer() {


    return(
        <div>
        <Container>
            {/* <Buttons>
        <button className="glow-on-hover" onClick={toAbout}>
  About
</button>  
<button className="glow-on-hover" onClick={toProjects}>
  Projects
</button> 
</Buttons> 
<Home>
<button className="glow-on-hover" onClick={toHome}>
  Noam Lubofsky
</button> 
</Home> */}
</Container>
</div>
    )
}


const Container = styled.div`
    // background-color: #202124;
    background-color: #35363A;
    height: 10vh;
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

export default Footer
