import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"

const SignUp: React.FC = () => {
    return (
        <>
            <br />
            <h1 className="center-text scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" >
                Sign up
            </h1>
            <br />

            <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                <Input placeholder='email address'></Input>
                <br />
                <Input placeholder='password'></Input>
                <br />
                <Input placeholder='confirm password'></Input>
                <br />
            </div>
            <Link to="/connecttohop" style={{ display: 'flex', justifyContent: 'center' }}>
                <Button>Sign Up</Button>
            </Link>
        </>
    );
};

export default SignUp;