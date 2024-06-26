import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [delay, setDelay] = useState<boolean>(false);

    useEffect(() => {
        if (delay) {
            const timer = setTimeout(() => {
                navigate('/profile');
            }, 1000); // Choose length of delay here
            return () => clearTimeout(timer);
        }
    }, [delay, navigate]);

    const handleClick = () => {
        setDelay(true);
    };
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
                        <Input type='password' placeholder='password'></Input>
                        <br />
                    </div>
                    <Button onClick={handleClick} style={{ display: 'flex', justifyContent: 'center' }}>Log in</Button>
                    <Link to="/"><h2>Back to home screen</h2></Link>
                </div>
            </div>
        </>
    );
};

export default Login;