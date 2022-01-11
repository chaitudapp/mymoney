


import styles from './Login.module.css'

import React from 'react'
import { useState } from 'react'
import {UseLogin} from '../../hooks/UseLogin'

function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {error, isPending, login} = UseLogin()
    return (
        <form className={styles['login-form']}
        onSubmit={(e) => {
            e.preventDefault()
            login(email,password)

            
        }}>
        <h2>Login</h2>
            <label >
                <span>email:</span>
                <input 
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
            </label>
            <label >
                <span>password:
                <input 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                    value={password}
                /></span>
            </label>
            {!isPending && <button className='btn'>Login</button>}
            {isPending && <button className='btn' disabled>Loading</button>}
            {error && <p>{error}</p>}
        </form>
    )
}

export default Login
