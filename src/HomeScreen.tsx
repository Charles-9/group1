import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen: React.FC = () => {
    return (
        <>
            <h1>Login Screen</h1>
            <label>username</label><input></input>
            <br />
            <label>password</label><input></input>
            <Link to="/profile"><h2>Here to profile</h2></Link>
        </>
    );
};

export default HomeScreen