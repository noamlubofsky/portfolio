import styled from "styled-components";
import headshot from "../headshot.png";

function About() {

const aboutme = "After working as a teacher for 4 years and receiving my master's degree in education, I have made the switch to software engineering and graduated from Flatiron school’s software engineering program. The program required me to learn a ton of material in a short period of time and was easily the hardest thing I’ve ever done. Although it was rigorous, I immensely enjoyed the program and developed a real passion for engineering beautiful full-stack applications that function seamlessly. Although I have learned a lot thus far, I know that there is still an infinite amount for me to learn and grow as a software engineer. My goal is to find a job where I can utilize the foundation of skills I have already acquired while learning and growing as an engineer from my colleagues and higher-ups every day."
let aboutArr = aboutme.split(' ')

const subheading = "Former teacher turned software engineer with a passion for front end development"
let subArr = subheading.split(' ')

    return(
        <Container>
       <div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW53Rhtwtr19G8gxo7Jjsewdzpl5fCDAf-Z1VYH2Q07_k8ww8To0yu2SH7jVdJT_yfn-o&usqp=CAU'          />
          <img
            class="img img1"
src={headshot}          />
        </div>
      </div>
    </div>            <AboutContainer>
            <Heading>ABOUT</Heading> <Heading2>ME</Heading2>
        <br/>
        {subArr.map(word => {
            let spaced = word + '\xa0'
            return(
                <SubWord>{spaced}</SubWord>
            )
        })}        <br/>
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
transition: 0.3s;
text-shadow: 2px 2px 4px #000000;

&:hover{
    // color: #202124;
    text-shadow: 2px 2px 4px #89BEE0;
    font-size: 2em;

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

const SubWord = styled.h1`
color: #202124;
font-size: 2em;
margin-top: 20px;
display: inline-block;
transition: 0.3s;
text-shadow: 2px 2px 4px white;

&:hover{
    font-size: 2.5em;
    // color: white;
    text-shadow: 2px 2px 4px #89BEE0;

}

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
