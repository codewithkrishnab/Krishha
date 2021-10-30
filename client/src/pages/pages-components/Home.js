import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'

const AllContent = styled.div`
    margin: 0;
    background: linear-gradient(45deg, #242526, #000000);
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
    let Navgtr = useHistory();
    return (
        <AllContent>
            <Heading>Krishha</Heading>
            <Description>The in-web chatting platform with native like fetaures</Description>
            <LoginBTN onClick={()=>{
                Navgtr.push('/login');
            }}>Login</LoginBTN>
            <RegisterBTN onClick={()=>{
                Navgtr.push('/register')
            }
            }>Register</RegisterBTN>
        </AllContent>
    )
}

export default Home
