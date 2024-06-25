import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "./components/ui/button"

const HomeScreen: React.FC = () => {
    return (
        <>
            <Link to="/signup">
                <Button>Sign up</Button>
            </Link>
            <br />

            <Link to="/login">
                <Button>Login</Button>
            </Link>

            <br />
            <Button><Link to="/profile"><h2>Here to profile</h2></Link></Button>
        </>
    );
};

export default HomeScreen