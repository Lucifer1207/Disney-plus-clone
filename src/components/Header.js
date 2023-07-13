import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Header() {
  return (
    
      <Nav>
        <Link to="/">
        <Logo src="logo.svg"/>
        </Link>
        <NavMenu>
            <a>
                <img src="home-icon.svg" alt="hm" />
                <span>HOME</span>
            </a>

            <a>
                <img src="search-icon.svg" alt="hm" />
                <span>SEARCH</span>
            </a>
            <a>
                <img src="watchlist-icon.svg" alt="hm" />
                <span>WATCHLIST</span>
            </a>
            <a>
                <img src="original-icon.svg" alt="hm" />
                <span>ORIGINALS</span>
            </a>
            <a>
                <img src="movie-icon.svg" alt="hm" />
                <span>MOVIES</span>
            </a>

            <a>
                <img src="series-icon.svg" alt="hm" />
                <span>SERIES</span>
            </a>
           

        </NavMenu>
       <Link to="/login">
        <UserImg src="mypic.jpg"/>
        </Link>


      </Nav>
    
  )
}

export default Header

const Nav=styled.nav`
   height:70px;
   background:#090b13; 
   display:flex;
   align-items:center;
   padding: 0 36px;
`

const Logo=styled.img`
  width:80px;


`

const NavMenu=styled.div`
  display:flex;
  flex:1;
  margin-left:35px;
  align-items:center;


  a{
    display:flex;
    align-items:center;
    padding: 0 35px;
    cursor:pointer;

    img{
     height:20px;
    }

    span{
        font-size:15px;
        letter-spacing:1.42px;
        position:relative;


        &:after{
           content:"";
           height:3px;
           background:white;
           position:absolute;
           left:0;
           right:0;
           bottom:-14px;
           opacity:0;
           transform: scaleX(0);
           transform-origin:left center;
           transition: all 250ns cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
           
        }
    }
    &:hover{
        span:after{
            transform: scaleX(1);
            opacity:1;
        }
    }
  }
  
`


const UserImg=styled.img`
  width:55px;
  height:55px;
  border-radius:50%;
  cursor:pointer;

`
    

