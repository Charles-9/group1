import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "./components/ui/button"

const HomeScreen: React.FC = () => {
    return (
        <>
            <div className="h-screen flex flex-col">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <br />
                    <img src="src/assets/logo-removebg-preview1.png"/>

                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" >
                        RideQuest
                    </h1>

                </div>

                {/* <div className='screenDiv' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> */}
                <div className='flex flex-col items-center flex-grow rounded-tl-[30px] rounded-tr-[30px] mt-2 custom-gradient' >
                    <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-5xl" >
                        Welcome
                    </h1>

                    <br />
                    <Link to="/login">
                        <Button style={{ width: '110px', backgroundColor: 'rgba(255, 255, 255, 0)', borderStyle: 'solid', borderColor: 'rgb(0, 0, 0)', borderWidth: '2px', color: "rgb(0, 0, 0)"}}><strong>Login</strong></Button>
                    </Link>

                    <br />
                    <Link to="/signup">
                        <Button style={{ width: '110px' }}>Sign up</Button>
                    </Link>
                    <br />
                </div>
            </div>
        </>
    );
};

export default HomeScreen