import styles from './Signup.module.css'


import React from 'react'
import { useState } from 'react'
import { UseSignup } from '../../hooks/UseSignup'
import { Link } from 'react-router-dom'

const Signup = () => {
    let state1 = {
        firstname : String,
        lastname : String,
        email: String,
        password: String,
        displayName:String,
    
    }

    const {signup , isPending , error} = UseSignup() 

    const [user,setUser] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        displayName:"",
    })
    const handleChange = (key,e) => {
        const {value} = e.target;
        setUser( {...user,
        [key]:value,
        displayName: user.firstname+user.lastname
        })

    }
    
    return (
        <form className={styles['signup-form']}
        onSubmit={(e) => {
            e.preventDefault()
            console.log(user);
            signup(user.email, user.password, user.displayName)

        }}>
        <h2>Signup</h2>
            <label >
                <span>firstname:</span>
                <input 
                type="text" 
                value={user.firstname}
                onChange={e => handleChange("firstname",e)}

                />
            </label>
            <label >
                <span>lastname:</span>
                <input 
                type="text" value = {user.lastname}
                onChange={e => handleChange("lastname",e)}
                />
            </label>
            <label >
                <span>email:</span>
                <input 
                type="email" value={user.email}
                onChange={e=> handleChange("email" ,e)} 
                />
            </label>
            <label >
                <span>password:
                <input 
                type="password" value = {user.password}
                onChange={e => handleChange("password",e)}
                /></span>
            </label>
            {!isPending && <button className='btn'>Signup</button>}
            {isPending && <button className='btn' disabled>Loading</button>}
            {error && <p>{error}</p>}
        </form>
    )
}

export default Signup
