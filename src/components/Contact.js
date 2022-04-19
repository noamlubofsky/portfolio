import styled from "styled-components";
import React, { useState } from "react";
import bars2 from "../bars2.png";
import resume from "../resume.pdf";

function Contact() {
    const [copied, setCopied] = useState(false)

    const copyToClipboard = (e) => {
        const text = e.target.innerText
        navigator.clipboard.writeText(text).then(function() {
            setCopied(true)
            setTimeout(() => setCopied(false), 1000)
          })      };


    return(
        <Container>
             <Heading>CONTACT</Heading> <Heading2>ME</Heading2>

<div id="pillar">

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
    <div class="right" onClick={copyToClipboard}>https://github.com/noamlubofsky</div>  
    </div>
</div>
  
  <div class="row">
  <div class="wrap">
    <div class="left">Medium</div>
    <div class="right" onClick={copyToClipboard}>https://noamlubofsky.medium.com
</div>  
    </div>
</div>

<div class="row">
  <div class="wrap" >
    <div class="left" >LinkedIn</div>
    <div class="right" onClick={copyToClipboard} >https://www.linkedin.com/in/noam-lubofsky-0120b627/
    </div>  
    </div>
</div>

<div class="row">
  <div class="wrap" >
    <div class="left" >Resume</div>
    <div class="right"><a href={resume} download={resume}>Download</a>

    </div>  
    </div>
</div>
  
  </div>
  {!copied ? null : <Copied>Copied!</Copied>}
  <br />
        <Test>
  <img src={bars2}/>
  </Test>

        </Container>
    )
}

const Test = styled.div`
background-color: white;
bottom: 0px;
position: absolute;
`;

const Container = styled.div`
// background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW53Rhtwtr19G8gxo7Jjsewdzpl5fCDAf-Z1VYH2Q07_k8ww8To0yu2SH7jVdJT_yfn-o&usqp=CAU);

// background-repeat: no-repeat;
// background-size: cover;
min-height: 800px;
margin-bottom: 0px;
padding: 0;
border: 0;
outline: 0;
font-size: 100%;
position: relative;
justify-content: center;
align-items: center;
text-align: center;
// display: flex;
//   display: grid;
//   place-content: center;

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
font-size: 6em;
display: inline-block;
margin-top: 20px;
margin-bottom: 20px;

`;

const Heading2 = styled.h1`
color: #54A09E;
font-size: 6em;
position: relative;
display: inline-block;
margin-top: 20px;
margin-bottom: 20px;

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
