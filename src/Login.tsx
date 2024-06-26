import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"
import { useNavigate } from 'react-router-dom';

const spinnerStyle: React.CSSProperties = {
    width: '50px', // Adjust size as needed
    height: '50px',
    border: '8px solid #f3f3f3', // Light grey
    borderTop: '8px solid #3498db', // Blue
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    margin: '20px auto', // Center the spinner
};

const keyframesStyle: React.CSSProperties = {
    '@keyframes spin': {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
    },
};

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (loading) {
            const timer = setTimeout(() => {
                navigate('/profile');
            }, 1000); // Choose length of delay here
            return () => clearTimeout(timer);
        }
    }, [loading, navigate]);

    const handleClick = () => {
        setLoading(true);
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
                        <Input placeholder='password'></Input>
                        <br />
                    </div>
                    <style>
                        {`
                            @keyframes spin {
                                from { transform: rotate(0deg); }
                                to { transform: rotate(360deg); }
                            }
                    `   }
                    </style>
                    {loading ? (
                        <div style={spinnerStyle}></div>
                    ) : (
                        <Button onClick={handleClick} style={{ display: 'flex', justifyContent: 'center' }}>Log in</Button>
                    )}
                    <Link to="/"><h2>Back to home screen</h2></Link>
                </div>
            </div>
        </>
    );
};

export default Login;