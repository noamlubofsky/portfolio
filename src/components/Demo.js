import React, { useState } from "react";
import styled from "styled-components";
import {isMobile} from 'react-device-detect';

function Demo({project, selected, setSelected}){
    const [viewing, setViewing] = useState(false)

    const handleSelect = () => {
        if(selected.id === project.id){
            setSelected({})
            window.scrollTo(0, 0)
        }else{
            setSelected(project)
            window.scrollTo(0, 0)
        }
    }

    return(
        <DemoContainer project={project}>
            <TextContainer onClick={handleSelect} className={isMobile ? "mobile-demo" : "display-on-hover"}>
            {/* <Title>{project.title}</Title> */}
            <Icon src={project.icon}/>
            {/* <h3>{project.description}</h3> */}
            </TextContainer>
            {/* {!viewing ? null :
            <iframe id="inlineFrameExample"
    title="Inline Frame Example"
    src={project.link}>
</iframe>} */}
        </DemoContainer>
    )
}

const Icon = styled.img`
${!isMobile ? `height: 175px;` : `height: 100px;`};
${!isMobile ? `width: 175px;` : `width: 100px;`};

margin-top: 30px;
`;

const Title = styled.div`
justify-content: center;
align-items: center;
text-align: center;
color: white;
font-size: 3em;
`;

const TextContainer = styled.div`
white-space: pre-line;
justify-content: center;
align-items: center;
text-align: center;

`;

const DemoContainer = styled.div`
// width: 300px;
// height: 50px;
// background: grey;
color: white;
white-space: pre-line
justify-content: center;
align-items: center;
text-align: center;
padding: 10px;
border-radius: 50%;
// background-image: url(${props => props.project.icon});
// background-repeat: no-repeat;
// background-size: cover;
`;

export default Demo