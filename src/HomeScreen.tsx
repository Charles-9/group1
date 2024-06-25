import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "./components/ui/button"

const HomeScreen: React.FC = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <br />
                <img src={"https://cdn.worldvectorlogo.com/logos/sia-new-circle-logo-transparent-1.svg"} alt = "Logo" style={{width: '200px'}} />
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" >
                    RideQuest
                </h1>
                <br />
                <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl" >
                    Welcome
                </h2>

                <br />
                <Link to="/login">
                    <Button style={{ width: '110px' }}>Login</Button>
                </Link>

                <br />
                <Link to="/signup">
                    <Button style={{ width: '110px' }}>Sign up</Button>
                </Link>
                <br />

            </div>
        </>
    );
};

export default HomeScreen