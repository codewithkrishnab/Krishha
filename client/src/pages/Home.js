import React from 'react'
import styled from 'styled-components'

const AllContent = styled.div`
    margin: 0;
    background: #242526;
    min-height: 100vh;
    display: grid;
   justify-items: center;
   align-content:center;
    
    
`;
const Description = styled.p`
    font-family: 'Raleway', sans-serif;
    font-size: 1.5em;
    font-weight: 300;
    color: #ff0000;
    text-align: center;
`;
const Heading = styled.h1`
     color: #00ffaa;
     text-shadow: 0px 0px 15px #00ffaa;
     font-size: 4.5rem;

     font-family: 'Amsterdam Two';
`
const LoginBTN = styled.button`
    padding: 17px 46px;
    background: #00ffaa;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    box-shadow: 0 0 10px 5px #00ffaa;
    font-size: 35px;
    margin: 25px;
    
    color: #242526;
    outline: none;
    border: none;
`;
const RegisterBTN = styled.button`
    padding: 17px 46px;
    background: #00e1ff;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    box-shadow: 0 0 10px 3px #00e1ff;
    font-size: 35px;
    margin: 25px;
    
    color: #242526;
    outline: none;
    border: none;
`;

const Home = () => {
    return (
        <AllContent>
            <Heading>Krishha</Heading>
            <Description>The in-web chatting platform with native like fetaures</Description>
            <LoginBTN>Login</LoginBTN>
            <RegisterBTN>Register</RegisterBTN>
        </AllContent>
    )
}

export default Home
