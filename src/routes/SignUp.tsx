import React from 'react'
import { Link } from 'react-router-dom'

const SignUp: React.FC = () => {
    return (
        <>
            <div className="screenDiv">
                <h1>Sign up</h1>

                <input placeholder="email address"></input>
                <br />
                <input placeholder="password"></input>
                <br />
                <input placeholder="confirm password"></input>
                <br />
                <Link to="/connecttohop">
                    <button>Connect to hop</button>
                </Link>
                <Link to="/">
                    <h2>Back to home screen</h2>
                </Link>
            </div>
        </>
    )
}

export default SignUp
