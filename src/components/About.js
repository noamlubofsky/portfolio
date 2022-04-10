import styled from "styled-components";
import headshot from "../headshot.png";

function About() {

const aboutme = "After working as a teacher for 4 years and receiving my master's degree in education, I have made the switch to software engineering and graduated from Flatiron school’s software engineering program. The program required me to learn a ton of material in a short period of time and was easily the hardest thing I’ve ever done. Although it was rigorous, I immensely enjoyed the program and developed a real passion for engineering beautiful full-stack applications that function seamlessly. Although I have learned a lot thus far, I know that there is still an infinite amount for me to learn and grow as a software engineer. My goal is to find a job where I can utilize the foundation of skills I have already acquired while learning and growing as an engineer from my colleagues and higher-ups every day."
let aboutArr = aboutme.split(' ')

    return(
        <Container>
            <Img src={headshot}/>
            <AboutContainer>
            <Heading>ABOUT</Heading> <Heading2>ME</Heading2>
        <br/>
        <SubHeading>Former teacher turned software engineer with a passion for front end development</SubHeading>
        <br/>
        {/* <Paragraph>
        After working as a teacher for 4 years and receiving my master's degree in education, I have made the switch to software engineering and graduated from Flatiron school’s software engineering program. The program required me to learn a ton of material in a short period of time and was easily the hardest thing I’ve ever done. Although it was rigorous, I immensely enjoyed the program and developed a real passion for engineering beautiful full-stack applications that function seamlessly. Although I have learned a lot thus far, I know that there is still an infinite amount for me to learn and grow as a software engineer. My goal is to find a job where I can utilize the foundation of skills I have already acquired while learning and growing as an engineer from my colleagues and higher-ups every day. 
        </Paragraph> */}
        {aboutArr.map(word => {
            let spaced = word + '\xa0'
            return(
                <Word>{spaced}</Word>
            )
        })}
        </AboutContainer>
        </Container>
    )
}

const Word = styled.h5`
color: white;
font-size: 1.5em;
margin-top: 20px;
display: inline-block;
transition-all: 1s;
&:hover{
    // font-size: 2.5em;
    // transition-all: 1s;
    color: #202124;

}
`;

const Paragraph = styled.h5`
color: white;
font-size: 1.5em;
margin-top: 20px;

`;


const Heading = styled.h1`
color: white;
font-size: 6em;
display: inline-block;
margin-top: 20px;
margin-bottom: 20px;

`;

const Heading2 = styled.h1`
color: #202124;
font-size: 6em;
position: relative;
display: inline-block;
margin-top: 20px;
margin-bottom: 20px;

`;

const SubHeading = styled.h1`
color: #202124;
font-size: 2em;
position: relative;
display: inline

`;

const SubHeading2 = styled.h1`
color: #202124;
font-size: 4em;
position: relative;
display: inline
`;

const Img = styled.img`
float: right;
float: bottom;
margin-top: 21vh;
`;


const Container = styled.div`
background-color: grey;
justify-content: center;
// text-align: center;
min-height: 90vh;
`;

const AboutContainer = styled.div`
padding: 20px;
`;

export default About
