import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="cta-logo-one.svg"/>
        <SignUp>GET ALL THERE</SignUp>
        <Description>
            Get premier Access to Raya and the Last Dragon for you
            with a Disney+ Subscription. As of 12/07/2023, the price 
            and the Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="cta-logo-two.png"/>
      </CTA>
    </Container>
  )
}

export default Login


const Container=styled.div`
  position:relative;
  min-height: calc(100vh - 70px);
  display:flex;
  align-items:top;
  justify-content:center;

  &:before{
    background-size:cover;
    background-position:top;
    background-repeat:no-repeat;
    background:url("login-background.jpg");
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    opacity:0.7;
    z-index:-1;
   }
`

const CTA=styled.div`
 max-width:1050px;
 padding:80px 40px;
 width:100%;
 display:flex;
 flex-direction:column;
 margin-top:100px;


`

const CTALogoOne=styled.img`

`
const CTALogoTwo=styled.img`
 margin-top:20px;
`


const SignUp=styled.a`
  width:100%;
  background-color:#0063e5;
  font-weight:900;
  padding:18px 0;
  color:#f9f9f9;
  border-radius:7px;
  text-align:center;
  margin-top:10px;
  font-size:16px;
  cursor:pointer;
  letter-spacing:1.5px;
  margin-bottom:14px;
  transition:all 250ns;


  &:hover{
    background-color:#0483ee;
  }

`


const Description=styled.p`
 font-size:12px;
 letter-spacing:1.5px;
 text-align:center;
 font-weight:500;
 line-height:1.5;
`
