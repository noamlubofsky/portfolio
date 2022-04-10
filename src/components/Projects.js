import Demo from "./Demo"
import styled from "styled-components";
import React, { useState } from "react";

function Projects({projects}) {
    const [selected, setSelected] = useState({})
    
    const firstHalf = projects.slice(0, 3);
    const secondHalf = projects.slice(-3);


    return(
        <div>
        <Container>
        <Heading>MY</Heading> <Heading2>PROJECTS</Heading2>
        <br/>
        {/* {!selected.id ? null :
            <iframe id="inlineFrameExample"
    title="Inline Frame Example"
    src={selected.link}>
</iframe>} */}
            {!selected.id ?
        <ProjectsContainer>
        {projects.map(project => {
            return(
            <Demo project={project} selected={selected} setSelected={setSelected}/>
            )
        })}
        </ProjectsContainer>
        :
        <div>
            <TestContainer>
            <LeftProjectsContainer>
        {firstHalf.map(project => {
            return(
            <Demo project={project} selected={selected} setSelected={setSelected}/>
            )
        })}
        </LeftProjectsContainer>
        <div class="holds-the-iframe">
        {/* <div class="loader"> */}
  {/* <div class="loaderBar"></div> */}
{/* </div> */}
            <iframe id="inlineFrameExample"
    title="Inline Frame Example"
    src={selected.link}></iframe>
    </div>
        <RightProjectsContainer>
        {secondHalf.map(project => {
            return(
            <Demo project={project} selected={selected} setSelected={setSelected}/>
            )
        })}
        </RightProjectsContainer>
        </TestContainer>
        </div>
        }
        </Container>
        </div>
    )
}

const Heading = styled.h1`
color: white;
font-size: 6em;
display: inline-block;
margin: 0;
margin-top: 20px;
`;

const Heading2 = styled.h1`
color: #202124;
font-size: 6em;
position: relative;
display: inline-block;
margin: 0;

`;

const Container = styled.div`
// background-color: grey;
justify-content: center;
text-align: center;
align-items: center;
min-height: 100vh;
background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW53Rhtwtr19G8gxo7Jjsewdzpl5fCDAf-Z1VYH2Q07_k8ww8To0yu2SH7jVdJT_yfn-o&usqp=CAU);
background-repeat: no-repeat;
background-size: cover;
`;

const ProjectsContainer = styled.div`
display: grid;
grid-template-columns: auto auto auto;
justify-content: center;
text-align: center;
padding: 50px;
`;

const LeftProjectsContainer = styled.div`
display: grid;
// justify-content: center;
// text-align: center;
float: left;
position: absolute;
margin-left: 10vw;
`;

const RightProjectsContainer = styled.div`
display: grid;
// justify-content: center;
// text-align: center;
float: right;
right: 0;
position: absolute;
margin-right: 10vw;

`;

const TestContainer = styled.div`
display: grid;
grid-template-columns: auto auto auto;
justify-content: center;
text-align: center;
// padding: 100px;
align-self: center;
// margin-left: 15vw;
`;

export default Projects;