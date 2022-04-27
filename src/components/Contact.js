import styled from "styled-components";
import React, { useState } from "react";
import bars2 from "../bars2.png";
import resume from "../resume.pdf";
import bottom from "../bottomt.png";
import {isMobile} from 'react-device-detect';

function Contact({drop}) {
    const [copied, setCopied] = useState(false)

    const copyToClipboard = (e) => {
        const text = e.target.innerText
        navigator.clipboard.writeText(text).then(function() {
            setCopied(true)
            setTimeout(() => setCopied(false), 1000)
          })      
        };

        const toGit = () => {
          window.open(
            "https://github.com/noamlubofsky", "_blank");
        }

        const toLinked = () => {
          window.open(
            "https://www.linkedin.com/in/noam-lubofsky-0120b627/", "_blank");
        }

        const toMedium = () => {
          window.open(
            "https://noamlubofsky.medium.com", "_blank");
        }


    return(
        <Container drop={drop}>
            <Heading>CONTACT</Heading> <Heading2>ME</Heading2>
            <Info>
<div id={!isMobile ? "pillar" : "mobilepillar"}>

{/* <Line>
<Box></Box> */}
<div class="row" >
  <div class="wrap"  >
    <div class="left">Name</div>
    <div class="right" onClick={copyToClipboard}>Noam Lubofsky</div>  
    </div>
</div>
{/* <Box></Box>
</Line> */}
  
  <div class="row">
  <div class="wrap">
    <div class="left">Email</div>
    <div class="right" onClick={copyToClipboard}>noamlubofsky@gmail.com</div>  
    </div>
</div>
  
  <div class="row" >
  <div class="wrap" >
    <div class="left" >Phone</div>
    <div class="right" onClick={copyToClipboard} >914-462-8475</div>  
    </div>
</div>
  
  <div class="row">
  <div class="wrap">
    <div class="left">Github</div>
    <div class="right" onClick={toGit}>https://github.com/noamlubofsky</div>  
    </div>
</div>
  
  <div class="row">
  <div class="wrap">
    <div class="left">Medium</div>
    <div class="right" onClick={toMedium}>https://noamlubofsky.medium.com
</div>  
    </div>
</div>

<div class="row">
  <div class="wrap" >
    <div class="left" >LinkedIn</div>
    <div class="right" onClick={toLinked} >https://www.linkedin.com/in/noam-lubofsky-0120b627/
    </div>  
    </div>
</div>

<div class="row">
  <div class="wrap" >
    <div class="left" >Resume</div>
    <div class="right"><a href={resume} download='Noam Lubofsky Resume'>Download</a>

    </div>  
    </div>
</div>
  
  </div>
  {!copied ? null : <Copied>Copied!</Copied>}
  </Info>
  <br />

        <Bottom>
        <img className='bottom' src={bottom}/>
  </Bottom>

        </Container>
    )
}

const Bottom = styled.div`
// bottom: 0px;
margin-bottom: 20px;
`;

const Container = styled.div`
// background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW53Rhtwtr19G8gxo7Jjsewdzpl5fCDAf-Z1VYH2Q07_k8ww8To0yu2SH7jVdJT_yfn-o&usqp=CAU);

// background-repeat: no-repeat;

justify-content: center;
align-items: center;
text-align: center;
${props => props.drop ? 'opacity: 50%;' : null}
transition: all .5s;
`;

const Copied = styled.h1`
color: white;
font-size: 2em;
margin: 0px;
padding: 0px;
text-transform: uppercase;
margin-top: 20px;
`;

const Heading = styled.h1`
color: white;
${!isMobile ? `font-size: 6em` : `font-size: 3em`};
display: inline-block;
margin-top: 20px;
margin-bottom: 20px;

`;

const Heading2 = styled.h1`
color: #54A09E;
${!isMobile ? `font-size: 6em` : `font-size: 3em`};
display: inline-block;
margin-top: 20px;
margin-bottom: 20px;

`;

const Info = styled.div`
height: 55vh;
`;

const Line = styled.div`
display: grid;
grid-template-columns: auto auto auto;
`;

const Box = styled.div`
background-color: grey;
height: 20px;
width: 150px;
display: inline-block;

`;

export default Contact
