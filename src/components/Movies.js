import React from 'react';
import styled from 'styled-components';
import {selectMovies} from '../features/movie/MovieSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';

function Movies() {


        const movies= useSelector(selectMovies);
        console.log("this is me");

  return (
    <Container>
         <h3>Anime for You</h3>
        <Content>
            <Link to="/detail">
            <Wrap>
                <img src="img15.jpg" alt="" />
            </Wrap>
            </Link>



            <Link to="/detail">
            <Wrap>
                <img src="img16.jpg" alt="" />
            </Wrap>
            </Link>



            <Link to="/detail">
            <Wrap>
                <img src="img17.jpg" alt="" />
            </Wrap>
            </Link>



            <Link to="/detail">
            <Wrap>
                <img src="img18.jpg" alt="" />
            </Wrap>
            </Link>
           
        </Content>






        <h3>Recommended for You</h3>
        <Content>
            <Link to="/detail">
            <Wrap>
                <img src="Coco.jpg" alt="" />
            </Wrap>
            </Link>



            <Link to="/detail">
            <Wrap>
                <img src="Aladin.jpg" alt="" />
            </Wrap>
            </Link>



            <Link to="/detail">
            <Wrap>
                <img src="Lion.jpg" alt="" />
            </Wrap>
            </Link>



            <Link to="/detail">
            <Wrap>
                <img src="Jungle.jpg" alt="" />
            </Wrap>
            </Link>
           
        </Content>

        <h3>Suggested</h3>
        <Content>
            <Link to="/detail">
            <Wrap>
                <img src="img1.jpg" alt="" />
            </Wrap>
            </Link>



            <Link to="/detail">
            <Wrap>
                <img src="img2.jpg" alt="" />
            </Wrap>
            </Link>



            <Link to="/detail">
            <Wrap>
                <img src="img3.jpg" alt="" />
            </Wrap>
            </Link>



            <Link to="/detail">
            <Wrap>
                <img src="img4.jpg" alt="" />
            </Wrap>
            </Link>
           
        </Content>

        <h3>Trending</h3>
        <Content>
            <Link to="/detail">
            <Wrap>
                <img src="img5.jpg" alt="" />
            </Wrap>
            </Link>



            <Link to="/detail">
            <Wrap>
                <img src="img6.jpg" alt="" />
            </Wrap>
            </Link>



            <Link to="/detail">
            <Wrap>
                <img src="img7.jpg" alt="" />
            </Wrap>
            </Link>



            <Link to="/detail">
            <Wrap>
                <img src="img8.jpg" alt="" />
            </Wrap>
            </Link>
           
        </Content>

        <h3>People Also Like</h3>
        <Content>
            <Link to="/detail">
            <Wrap>
                <img src="img9.jpg" alt="" />
            </Wrap>
            </Link>



            <Link to="/detail">
            <Wrap>
                <img src="img10.jpg" alt="" />
            </Wrap>
            </Link>



            <Link to="/detail">
            <Wrap>
                <img src="img11.jpg" alt="" />
            </Wrap>
            </Link>



            <Link to="/detail">
            <Wrap>
                <img src="img12.jpg" alt="" />
            </Wrap>
            </Link>
           
        </Content>

         <h3>Most Downloads</h3>
        <Content>
            <Link to="/detail">
            <Wrap>
                <img src="img13.jpg" alt="" />
            </Wrap>
            </Link>



            <Link to="/detail">
            <Wrap>
                <img src="img14.jpg" alt="" />
            </Wrap>
            </Link>



            <Link to="/detail">
            <Wrap>
                <img src="img19.jpg" alt="" />
            </Wrap>
            </Link>



            <Link to="/detail">
            <Wrap>
                <img src="img20.jpg" alt="" />
            </Wrap>
            </Link>
           
        </Content>
      
    </Container>
  )
}

export default Movies


const Container=styled.div`

`


const Content=styled.div`
display:grid;
grid-gap:50px;
grid-template-columns:repeat(4, minmax(0,1fr));
padding: 25px 25px 25px 25px;
margin-bottom:20px;

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
