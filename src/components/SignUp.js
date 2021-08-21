import React, { useRef } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import MainContentContainer from '../utils/MainContentContainer'


export default function SignUp() {

    const emailRef = useRef()
    const passwordRef = useRef()

    const { signUp } = useAuth()
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            await signUp(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            alert('Err')
        }

    }


    return (
        <MainContentContainer>
            <h1>Sign up</h1>
            <Link to="/sign-in">Already have an account?</Link>
            <form onSubmit={evt => handleSubmit(evt)}>

                    <label>Email address</label><br/>
                    <input type="email" ref={emailRef} /><br/>


                    <label>Password</label><br/>
                    <input type="password" ref={passwordRef} /><br/>

                <button type="submit" mt={2}>Sign up</button>
            </form>
        </MainContentContainer>
    )
}
