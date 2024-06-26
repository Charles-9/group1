import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"
import { useNavigate } from 'react-router-dom';

const Leaderboard: React.FC = () => {
    const [isConnected, setIsConnected] = useState(false);

    const handleConnect = () => {
        setIsConnected(true);
    }

    const navigate = useNavigate();
    const [delay, setDelay] = useState<boolean>(false);

    useEffect(() => {
        if (delay) {
            handleConnect();
            const timer = setTimeout(() => {
                navigate('/profile');
            }, 1500); // Choose length of delay here        
            return () => clearTimeout(timer);
        }
    }, [delay, navigate]);

    const handleClick = () => {
        setDelay(true);
    };

    return (
        <>

            <div className="h-screen flex flex-col">
                
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '200px' }}>
                    <div className='flex flex-row align-center'>
                        <Link className='flex flex-row align-center' to='/'>
                            <span className='text-[50px]'>
                                ←
                            </span>
                            <span className='mt-[25px]'>back to home screen</span>
                        </Link>

                    </div>
                    <h2 className="scroll-m-20 mt-0 text-3xl font-extrabold tracking-tight lg:text-5xl" style={{ paddingLeft: '30px' }}>
                        Connect to AT Hop
                    </h2>
                    <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl" style={{ paddingLeft: '30px' }}>
                        to track your trips
                    </h2>
                    <br />
                    {/* <img src={"https://i0.wp.com/www.greaterauckland.org.nz/wp-content/uploads/2015/09/AT-Logo.png?fit=512%2C512&ssl=1"} 
                    alt="Logo" style={{ width: '170px', alignSelf: 'flex-end', paddingRight: '20px', paddingTop: '7px', zIndex: 1 }} /> */}
                    <img src={"https://i0.wp.com/www.greaterauckland.org.nz/wp-content/uploads/2015/09/AT-Logo.png?fit=512%2C512&ssl=1"} alt="Logo" 
                    // style={{ width: '170px', alignSelf: 'flex-end', paddingRight: '20px', paddingTop: '7px', zIndex: 1 }} />
                    className='w-[170px] z-0 self-end pr-5 pr-5 -mt-5 z-10' />
                </div>

                {/* <div className='screenDiv flex flex-col items-center rounded-tl-[30px] rounded-tr-[30px]'> */}
                <div className='flex flex-col items-center flex-grow rounded-tl-[30px] rounded-tr-[30px] mt-2 custom-gradient' >
                    <div style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '100px' }}>
                        <Input placeholder='AT Hop number'></Input><br />
                        <Input placeholder='Email address'></Input><br />
                        <Input placeholder='Password'></Input>
                        <br />
                        {/* <Link to="/" style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
                            <Button>Connect to hop</Button>
                        </Link> */}
                        <Button onClick={handleClick}>
                            {isConnected ? 'Connected to Hop' : 'Connect to Hop'}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Leaderboard;