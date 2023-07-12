import React from 'react';
import styled from 'styled-components';

function Detail() {
  return (
    <Container>
      <Background>
        <img src="DisneyBg.jpg" alt="bg" />
      </Background>

      <Imagetitle>
        <img src="Bg.png" alt="tt" />
      </Imagetitle>

      <Controls>
        <Playbutton>
            <img src="play-icon-black.png" alt="b" />
            <span>PLAY</span>
        </Playbutton>
        <TrailerButton>
        <img src="play-icon-white.png" alt="b" />
            <span>Trailer</span>
        </TrailerButton>

        <AddButton>
            <span>+</span>
        </AddButton>

        <GroupWatchButton>
            <img src="group-icon.png" alt="g" />
        </GroupWatchButton>

      </Controls>

      <SubTitle>
        2018 . 7m . Family , Fantasy, kids, Animation.
      </SubTitle>
      <Description>
      Disney Plus is an on-demand streaming service created by <br/> The Walt Disney Company. Subscribers can watch thousands of <br/> Disney movies and shows from all of the studio's brands, <br/> including Pixar, Marvel, Star Wars, National Geographic,  <br/> and 20th Century Studios.
      </Description>
    </Container>
  )
}

export default Detail


const Container=styled.div`
   min-height:calc(100vh-70px);
   padding: 0 calc(3.5vw+5px);
   position:relative;
   padding:36px;
   

`

const Background=styled.div`
position:fixed;
top:0;
left:0;
bottom:0;
right:0;
z-index:-1;
opacity:0.5;

  img{
    width:100%;
    height:100%;
    object-fit:cover;
  }

`

const Imagetitle=styled.div`
margin-top:30px;
height:45vh;
width:90vw;
min-height:200px;
min-width:250px;
margin-bottom:20px;

img{
    width:50%;
    height:100%;
    object-fit:cover;
}

`


const Controls=styled.div`
 display:flex;
 align-items:center;
 margin-left:65px;

`


const Playbutton=styled.button`
border-radius:4px;
font-size:15px;
display:flex;
align-items:center;
height:52px;
background:rgb(249, 249, 249);
border:none;
padding:0px 24px;
margin-right:23px;
letter-spacing:2px;
cursor:pointer;

&:hover{
    border:4px solid white;
    background:transparent;
    color:burlywood;
    font-weight:800;
}

`

const TrailerButton=styled.div`
background:rgba(0, 0, 0, 0.1);
border-radius:4px;
font-size:15px;
display:flex;
align-items:center;
height:52px;
color:rgb(249, 249, 249);
border:1px solid rgb(249, 249, 249);
padding:0px 24px;
margin-right:23px;
letter-spacing:2px;
cursor:pointer;

&:hover{
    background:rgb(190, 190, 190);
}
`

const AddButton=styled.button`
width:44px;
height:44px;
display:flex;
align-item:center;
justify-content:center;
font-weight:800;
border-radius:50%;
border:2px solid white;
background-color: rgba(0,0,0,0.3);
color:white;
cursor:pointer;
margin-right:16px;
span{
    font-size:33px;
}

`

const GroupWatchButton=styled(AddButton)`

`

const SubTitle=styled.div`
color: rgb(249, 249, 249);
font-size:16px;
min-height:20px;
margin-top:27px;
margin-left:65px;
font-weight:900;
`

const Description=styled.div`
line-height:1.6;
font-size:20px;
margin-top:17px;
color:rgb(249, 249, 249);
margin-left:65px;
font-weight:600;
letter-spacing:0.7px;
`
