import React from 'react';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
    return (
        <>
            <h1>Here is your Profile Page</h1>
            <Link to="/leaderboard"><h2>Leaderboard</h2></Link>
            <Link to="/"><h2>Back to home screen</h2></Link>
        </>
    );
};

export default Profile