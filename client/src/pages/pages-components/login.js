import React from 'react'
import { Link } from 'react-router-dom'

const login = () => {
    return (
        <div>
            <form>
                <label for="username">Username: </label>
                <input type="text" name="Username" id="username" />
                <label for="psswd">Password: </label>
                <input type="text" name="Password" id="psswd" />
            </form>
        </div>
    )
}

export default login
