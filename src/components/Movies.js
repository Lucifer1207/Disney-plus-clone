import React from 'react';
import styled from 'styled-components';

function Movies() {
  return (
    <Container>
        <h3>Recommended for You</h3>
        <Content>
            <Wrap>
                <img src="Coco.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="Aladin.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="Lion.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="Jungle.jpg" alt="" />
            </Wrap>
           
        </Content>

        <h3>Recommended for You</h3>
        <Content>
            <Wrap>
                <img src="Coco.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="Aladin.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="Lion.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="Jungle.jpg" alt="" />
            </Wrap>
           
        </Content>

        <h3>Recommended for You</h3>
        <Content>
            <Wrap>
                <img src="Coco.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="Aladin.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="Lion.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="Jungle.jpg" alt="" />
            </Wrap>
           
        </Content>

        <h3>Recommended for You</h3>
        <Content>
            <Wrap>
                <img src="Coco.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="Aladin.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="Lion.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="Jungle.jpg" alt="" />
            </Wrap>
           
        </Content>
      
    </Container>
  )
}

export default Movies


const Container=styled.div`
    padding:

`


const Content=styled.div`
display:grid;
grid-gap:60px;
grid-template-columns:repeat(4, minmax(0,1fr));
padding: 25px 25px 25px 25px;

`


const Wrap=styled.div`
cursor:pointer;
border-radius:25px;
overflow:hidden;
border: 3px solid rgba(249, 249, 249, 0.2);
box-shadow: rgb(0 0 0 / 70%) 0px 32px 34px -10px, rgb(0 0 0 / 75%) 0px 20px 12px -10px;
transition: all 250ns cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img{
    width:100%;
    height:230px;
    object-fit:cover;

  }

  &:hover{
    transform: scale(1.1);
    border-color:rgba(249, 249, 249, 0.9);
  }


`
