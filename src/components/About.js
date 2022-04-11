import styled from "styled-components";
import headshot from "../headshot.png";
import React, { useState } from "react";

function About({apple, grad, job, journey, flatiron, learn, laptop}) {
    const [emojiText, setEmojiText] = useState('')

    const aboutArray = [
        {
            title: "Background",
            details: "After working as a teacher for four years, I decided to make the exciting switch to software engineering. "
        }, {
            title: "Education",
            details: 
            `Fairleigh Dickinson University: Bachelor of Arts - Individualized Studies	
            Specialization: Business
            Azrieli Graduate School of Education & Administration - Master’s Degree in Education
            Flatiron School - Full Stack Web Development, Ruby on Rails and JavaScript program
            `
        }, {
            title: "Hobbies",
            details: `Music: Guitar & Piano 
                        Sports: Basketball
                        Other: Woodworking
            `
        }
    ]

const aboutme = "While working as a teacher and receiving a master's degree in education, I simultaneously discovered a newfound passion for software engineering. I followed my excitement and attended the Flatiron school’s software engineering program. The program was rigorous but I enjoyed every moment and every new thing I learned. I am devoted to continue my journey towards becomming a professional software engineer and towards creating beautiful full-stack applications that function seamlessly. My goal now is to find a job where I can utilize the foundation of skills I have already acquired while learning and growing as an engineer from my colleagues and superiors every day. As a teacher, I strived to instill a thirst for knowledge and love of learning that went beyond the classroom. This drive is something I value and possess in all walks of life, and I am so excited to continue learning."
let aboutArr = aboutme.split(' ')

const subheading1 = "Former teacher turned software engineer"
let subArr1 = subheading1.split(' ')

const subheading2 = "with a passion for front end development"
let subArr2 = subheading2.split(' ')

const emoji = () => {
    if (emojiText.toLowerCase() === 'teacher'){
        return apple
    }
    if (emojiText.toLowerCase() === `master's` || emojiText.toLowerCase() === 'degree'){
        return grad
    }
    if (emojiText.toLowerCase() === `job`){
        return job
    }
    if (emojiText.toLowerCase() === `journey`){
        return journey
    }
    if (emojiText.toLowerCase() === `flatiron`){
        return flatiron
    }
    if (emojiText.toLowerCase() === `learn` || emojiText.toLowerCase() === 'learning' || emojiText.toLowerCase() === 'learned' || emojiText.toLowerCase() === 'growing'){
        return learn
    }
    if (emojiText.toLowerCase() === `software` || emojiText.toLowerCase() === 'engineer' || emojiText.toLowerCase() === 'engineering'){
        return laptop
    }
}

    return(
        <Container>
       <div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
src='https://www.teahub.io/photos/full/179-1794929_white-abstract-high-definition-wallpapers-abstract-wallpaper-1920x1080.jpg'          />
          <img
            class="img img1"
src={headshot}          />
        </div>
      </div>
    </div>            <AboutContainer>
            <Heading>ABOUT</Heading> <Heading2>ME</Heading2>
        <br/>
        {/* <div class="wrapper">
  <div class="moving">
    <img className='emoji' src={emoji()}/>
  </div> */}
  {/* <div class="moving2">
    <img className='emoji' src={emoji()}/>
  </div> */}
{/* </div> */}
        {subArr1.map(word => {
            let spaced = word + '\xa0'
            return(
                <SubWord>{spaced}</SubWord>
            )
        })}
                <br/>

                {subArr2.map(word => {
            let spaced = word + '\xa0'
            return(
                <SubWord>{spaced}</SubWord>
            )
        })}          
        
        <br/>

        {aboutArr.map(word => {
            let spaced = word + '\xa0'
            return(
                <Word onMouseOver={() => setEmojiText(word)}>{spaced}</Word>
            )
        })} 


        {/* {aboutArray.map(section => {
            return(
                <Sections>
                <div className='SectionContainer'>
                    <div className='SectionTitle'>{section.title}</div>
                    <div className='SectionDetails'>{section.details}</div>
                </div>
                </Sections>
            )
        })} */}

        </AboutContainer>
        </Container>
    )
}

const Sections = styled.div`
display: grid;
grid-template-columns: auto auto auto;
`;

const SectionContainer = styled.div`
background-color: grey;
width: 20vw;
display: inline-block;
&:hover:SectionDetails{
    color: black;
}
`;

const SectionTitle = styled.h1`
color: black;
`;

const SectionDetails = styled.h4`
color: transparent;
`;

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
text-transform: uppercase;
&:hover{
    font-size: 2.5em;
    // color: white;
    // text-shadow: 2px 2px 4px #89BEE0;

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
// background-color: grey;
justify-content: center;
// text-align: center;
min-height: 90vh;
`;

const AboutContainer = styled.div`
padding: 20px;
`;

export default About
