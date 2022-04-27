import styled from "styled-components";
import headshot from "../headshot.png";
import React, { useState } from "react";
import bars1 from "../bars1.png";
import bottom from "../bottomt.png";
import {isMobile} from 'react-device-detect';

function About({drop}) {
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

const aboutme1 = "While I started my career as a teacher (after receiving a master's degree in education), through conversations with peers and the STEM teachers at my school, I discovered a newfound passion for software engineering. I decided to make a career change and enrolled in the Flatiron school’s software engineering program. The rigorous program sparked my passion for front-end development. The combination of creative problem solving and data manipulation with the necessary eye for styling and design fit my skillset so perfectly which has led to a true enjoyment of coding." 

const aboutme2 = "The rigorous program sparked my passion for front-end development. The combination of creative problem solving and data manipulation with the necessary eye for styling and design fit my skillset so perfectly which has led to a true enjoyment of coding." 

const aboutme3 = "I am devoted to continuing my journey towards becoming a professional software engineer and towards creating beautiful full-stack applications that function seamlessly. My goal is to find a job where I can utilize the foundation of skills I have already acquired while learning and growing as an engineer from my colleagues and superiors every day. As a teacher, I strived to instill a thirst for knowledge and love of learning that went beyond the classroom. This drive is something I have harnessed into the next chapter of my career, and I am excited to continue learning."

let aboutArr1 = aboutme1.split(' ')
let aboutArr2 = aboutme2.split(' ')
let aboutArr3 = aboutme3.split(' ')


const subheading1 = "Former teacher turned software engineer"
let subArr1 = subheading1.split(' ')

const subheading2 = "with a passion for front-end development"
let subArr2 = subheading2.split(' ')

// const emoji = () => {
//     if (emojiText.toLowerCase() === 'teacher'){
//         return apple
//     }
//     if (emojiText.toLowerCase() === `master's` || emojiText.toLowerCase() === 'degree'){
//         return grad
//     }
//     if (emojiText.toLowerCase() === `job`){
//         return job
//     }
//     if (emojiText.toLowerCase() === `journey`){
//         return journey
//     }
//     if (emojiText.toLowerCase() === `flatiron`){
//         return flatiron
//     }
//     if (emojiText.toLowerCase() === `learn` || emojiText.toLowerCase() === 'learning' || emojiText.toLowerCase() === 'learned' || emojiText.toLowerCase() === 'growing'){
//         return learn
//     }
//     if (emojiText.toLowerCase() === `software` || emojiText.toLowerCase() === 'engineer' || emojiText.toLowerCase() === 'engineering'){
//         return laptop
//     }
// }

    return(
        <Container drop={drop}>
            {isMobile ? null : 
       <div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
// src='https://www.teahub.io/photos/full/179-1794929_white-abstract-high-definition-wallpapers-abstract-wallpaper-1920x1080.jpg'          
src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/1024px-Solid_white.svg.png'
/>
          <img
            class="img img1"
src={headshot}          />
        </div>
      </div>
    </div>   
}  
    {/* <div class="wrapper">
  <div class="moving">
    <img className='emoji' src={emoji()}/>
  </div>
</div>        */}
    <AboutContainer>
            <Heading>ABOUT</Heading> <Heading2>ME</Heading2>
        <br/>
        <SubParagraph>
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
        </SubParagraph>

        <br/>
        <Paragraph>
        {aboutArr1.map(word => {
            let spaced = word + '\xa0'
            return(
                <Word onMouseOver={() => setEmojiText(word)}>{spaced}</Word>
            )
        })} 
                        </Paragraph>

                <br/>
                {/* <Paragraph>
                {aboutArr2.map(word => {
            let spaced = word + '\xa0'
            return(
                <Word onMouseOver={() => setEmojiText(word)}>{spaced}</Word>
            )
        })} 
        </Paragraph> */}

                <br/>
                <Paragraph>
                {aboutArr3.map(word => {
            let spaced = word + '\xa0'
            return(
                <Word onMouseOver={() => setEmojiText(word)}>{spaced}</Word>
            )
        })} 
                </Paragraph>

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
        <br />
        {!isMobile ? null : 
       <div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
// src='https://www.teahub.io/photos/full/179-1794929_white-abstract-high-definition-wallpapers-abstract-wallpaper-1920x1080.jpg'          
src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/1024px-Solid_white.svg.png'
/>
          <img
            class="img img1"
src={headshot}          />
        </div>
      </div>
    </div>   
}  
  <img className={isMobile ? 'mobilebottom' : 'bottom'} src={bottom}/>
        </Container>
    )
}

const Test = styled.div`
background-color: white;
`;

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

const Word = styled.p`
color: white;
font-size: 1.2em;
margin-top: 20px;
display: inline-block;
transition: 0.3s;
text-shadow: 2px 2px 4px #000000;

// &:hover{
//     // color: #202124;
//     text-shadow: 2px 2px 4px #54A09E;
//     font-size: 2em;

// }
`;

const Paragraph = styled.div`
// margin-top: 2px;
// margin-bottom: 2px;
line-height: 10px;
`;

const SubParagraph = styled.div`
// margin-top: 2px;
// margin-bottom: 2px;
line-height: 20px;
`;


const Heading = styled.h1`
color: white;
${!isMobile ? `font-size: 6em` : `font-size: 3em`};
display: inline-block;
margin-top: 0px;
margin-bottom: 10px;

`;

const Heading2 = styled.h1`
color: #54A09E;
${!isMobile ? `font-size: 6em` : `font-size: 3em`};
// position: relative;
display: inline-block;
margin-top: 0px;
margin-bottom: 10px;

`;

const SubWord = styled.h1`
color: #54A09E;
${!isMobile ? `font-size: 1.7em` : `font-size: 1.5em`};
margin-top: 10px;
display: inline-block;
transition: 0.3s;
// text-shadow: 2px 2px 4px white;
text-transform: uppercase;
&:hover{
    font-size: 2.5em;
    // color: white;
    text-shadow: 2px 2px 4px #35363A;

}

`;

const SubHeading2 = styled.h1`
color: #54A09E;
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
margin-bottom: 5vh;
${props => props.drop ? 'opacity: 50%;' : null}
transition: all .5s;
`;

const AboutContainer = styled.div`
padding: 20px;
`;

export default About
