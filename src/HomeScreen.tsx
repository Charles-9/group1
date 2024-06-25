import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen: React.FC = () => {
    return (
        <>
            <Link to="/signup">
                <button>Sign up</button>
            </Link>
            <br />

            <Link to="/login">
                <button>Login</button>
            </Link>
            <Link to="/profile"><h2>Here to profile</h2></Link>
        </>
    );
};

export default HomeScreen