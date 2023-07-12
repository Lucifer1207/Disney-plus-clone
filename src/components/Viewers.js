import React from 'react';
import styled from 'styled-components';

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="viewers-disney.png" alt="vw" />
      </Wrap>
      <Wrap>
        <img src="viewers-pixar.png" alt="vw" />
      </Wrap>
      <Wrap>
        <img src="viewers-marvel.png" alt="vw" />
      </Wrap>
      <Wrap>
        <img src="viewers-starwars.png" alt="vw" />
      </Wrap>
      <Wrap>
        <img src="viewers-national.png" alt="vw" />
      </Wrap>
      <Wrap>
        <img src="https://www.citypng.com/public/uploads/preview/cn-cartoon-network-white-logo-download-png-116634295732byk4zzcr5.png" alt="vw" />
      </Wrap>
    </Container>
  )
}

export default Viewers


const Container=styled.div`
    margin-top:30px;
    display:grid;
    padding:30px 0px 26px; 
    grid-gap:50px;
    grid-template-columns: repeat(6,minmax(0, 1fr));



`


const Wrap=styled.div`

     border:2px solid rgba(249, 249, 249, 0.2);
     border-radius:15px;
     box-shadow: rgb(0 0 0 / 70%) 0px 32px 34px -10px, rgb(0 0 0 / 75%) 0px 20px 12px -10px;
     cursor:pointer;
     transition:all 250ns cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;




     img{
        width:100%;
        height:100%;
        object-fit:cover;
     }

     &:hover {
        transform: scale(1.10);
        border-color: rgba(249, 249, 249, 0.9);
        box-shadow: rgb(0 0 0 / 90%) 0px 40px 58px -16px, rgb(0 0 0 / 75%) 0px 30px 22px -10px;

     }
    

`
