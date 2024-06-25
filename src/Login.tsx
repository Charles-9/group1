import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"

const Login: React.FC = () => {
    return (
        <>
            <br />
            <h1 className="center-text scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" >
                Login
            </h1>
            <br />
            <div style={{ paddingLeft: '20px', paddingRight: '20px'}}>
            <Input placeholder='email address' />
            <br />
            <Input placeholder='password'></Input>
            <br />
            </div>
            <Link to="/profile" style={{ display: 'flex', justifyContent: 'center' }}>
                <Button>Log in</Button>
            </Link>
            <Link to="/"><h2>Back to home screen</h2></Link>
        </>
    );
};

export default Login;