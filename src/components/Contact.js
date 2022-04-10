import styled from "styled-components";
import React, { useState } from "react";

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

<div >
<div class="row" >
  <div class="wrap"  >
    <div class="left">Name</div>
    <div class="right" onClick={copyToClipboard}>Noam Lubofsky</div>  
    </div>
</div>
</div>

  
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
  <div class="wrap" >
    <div class="left" >LinkedIn</div>
    <div class="right" onClick={copyToClipboard} >https://www.linkedin.com/in/noam-lubofsky-0120b627/</div>  
    </div>
</div>
  
  <div class="row">
  <div class="wrap">
    <div class="left">Medium</div>
    <div class="right" onClick={copyToClipboard}>https://noamlubofsky.medium.com
</div>  
    </div>
</div>  
  
  </div>
  {!copied ? null : <Copied>Copied!</Copied>}

        </Container>
    )
}


const Container = styled.div`
// background-image: url(https://img5.goodfon.com/wallpaper/nbig/2/6f/avstraliia-skaly-okean-1.jpg);
// background-image: url(https://data.1freewallpapers.com/download/rocks-on-the-shore.jpg);
// background-image: url(https://images.wallpaperscraft.com/image/single/rocks_ocean_aerial_view_135764_1920x1080.jpg);
background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW53Rhtwtr19G8gxo7Jjsewdzpl5fCDAf-Z1VYH2Q07_k8ww8To0yu2SH7jVdJT_yfn-o&usqp=CAU);

background-repeat: no-repeat;
background-size: cover;
height: 650px;
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
font-size: 3em;
margin: 0px;
padding: 0px;
text-transform: uppercase;
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

export default Contact
