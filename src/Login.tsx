import React from 'react';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
    return (
        <>
            <h1>Login</h1>


            <input placeholder='email address'></input>
            <br />
            <input placeholder='password'></input>
            <br />
            <Link to="/profile">
                <button>Log in</button>
            </Link>
            <Link to="/"><h2>Back to home screen</h2></Link>
        </>
    );
};

export default SignUp;