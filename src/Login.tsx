import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"

const Login: React.FC = () => {
    return (
        <>
            <div className='h-screen flex flex-col'>
                <h1 className="center-text scroll-m-20 mt-8 text-4xl font-extrabold tracking-tight lg:text-5xl" >
                    Login
                </h1>
                <br />
                <div className='flex flex-col items-center flex-grow rounded-tl-[30px] rounded-tr-[30px] mt-2 custom-gradient' >
                    <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                        <Input className='mt-8' placeholder='email address' />
                        <br />
                        <Input placeholder='password'></Input>
                        <br />
                    </div>
                    <Link to="/profile" style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button>Log in</Button>
                    </Link>
                    <Link to="/"><h2>Back to home screen</h2></Link>
                </div>
            </div>
        </>
    );
};

export default Login;