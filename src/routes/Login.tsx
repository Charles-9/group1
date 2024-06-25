import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../components/ui/input'

const SignUp: React.FC = () => {
    return (
        <>
            <div className="bg-screenBackground w-mobile-width h-mobile-height mx-auto">
                <h1>Login</h1>

                <Input placeholder="email address" />
                <input placeholder="email address"></input>
                <br />
                <input placeholder="password"></input>
                <br />
                <Link to="/profile">
                    <button>Log in</button>
                </Link>
                <Link to="/">
                    <h2>Back to home screen</h2>
                </Link>
            </div>
        </>
    )
}

export default SignUp
