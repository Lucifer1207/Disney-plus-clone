import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function ImgSlider() {

  let settings={
    dots:true,
    Infinite: true,
    speed:300,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true
  }


  return (
    <Carousel {...settings} >
        <Wrap>
             <img src="slider-badag.jpg" alt="sl" />
         </Wrap>
         <Wrap>
             <img src="slider-badging.jpg" alt="sl" />
         </Wrap>
         <Wrap>
             <img src="slider-scale.jpg" alt="sl" />
         </Wrap>
         <Wrap>
             <img src="slider-scales.jpg" alt="sl" />
         </Wrap>
         
         
    </Carousel>
  )
}

export default ImgSlider



const Carousel= styled(Slider)`
   margin-top:10px;

   ul li button {
    &:before{
        font-size:13px;
        color: rgb(150 159 172);
    }
   }

  li.slick-active button::before{
    color:white;
  }


   .slick-list{
    overflow:visible;
   }


   button{
    z-index:1;
   }

`

const Wrap=styled.div`
     cursor:pointer;
     img{
        width:100%;
        height:100%;
        border:5px solid transparent;
        border-radius:15px;
        box-shadow: rgb(0 0 0 / 69%) 0px 36px 44px -10px, rgb(0 0 0 / 73%) 0px 26px 20px -10px;
        transition-duration:200ns;


        &:hover{
            border:3px solid rgba(249, 249, 249, 0.8);
        }
     }

`