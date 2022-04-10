import styled from "styled-components";

function Home() {
    return(
        <Container>
            <Header>
        <Heading>Noam</Heading> <Heading2>Lubofsky</Heading2>
        <br/>
        <SubHeading>Front end</SubHeading> <SubHeading2>developer</SubHeading2>
        </Header>
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
margin: 0;
padding: 0;
border: 0;
outline: 0;
font-size: 100%;
position: relative;
justify-content: center;
align-items: center;
text-align: center;
display: flex;
  display: grid;
  place-content: center;

`;

const Header = styled.div`
text-transform: uppercase;
justify-content: center;
align-items: center;
text-align: center;
min-height: 70vh;
display: inline-block;
align-self: center;
`;

const Heading = styled.h1`
color: white;
font-size: 6em;
display: inline-block;

`;

const Heading2 = styled.h1`
color: #202124;
font-size: 6em;
position: relative;
display: inline-block;
`;

const SubHeading = styled.h1`
color: white;
font-size: 4em;
position: relative;
display: inline
`;

const SubHeading2 = styled.h1`
color: #202124;
font-size: 4em;
position: relative;
display: inline
`;

export default Home