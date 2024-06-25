import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "./components/ui/button"

const HomeScreen: React.FC = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <br />
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" >
                    Welcome
                </h1>

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