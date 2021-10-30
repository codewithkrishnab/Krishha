import React from 'react'

const login = () => {
    return (
        <div>
            <form>
                <label htmlFor="username">Username: </label>
                <input type="text" name="Username" id="username" />
                <label htmlFor="psswd">Password: </label>
                <input type="text" name="Password" id="psswd" />
            </form>
        </div>
    )
}

export default login
