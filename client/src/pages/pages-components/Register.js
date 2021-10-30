import React from 'react';
import styled from 'styled-components';
import '../pages-styles/Register/register-styles.css'


const Register = () => {
    return (
        <div>
            <form>
                <label for="usrnm">Username: </label>
                <input type="text" name="usrnm" id="usrnm" />
                <label for="firstName">First Name: </label>
                <input type="text" name="firstName" id="firstName" />
                <label for="lastName">Last Name: </label>
                <input type="text" name="lastName" id="lastName" />
                <label for="lastName">Last Name: </label>
                <input type="text" name="lastName" id="lastName" />
                <label for="lastName">Last Name: </label>
                <input type="text" name="lastName" id="lastName" />
                
            </form>
        </div>
    )
}

export default Register
