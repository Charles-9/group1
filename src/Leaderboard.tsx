import React from 'react';
import { Link } from 'react-router-dom';

const Leaderboard: React.FC = () => {
    return (
        <>
            <h1>Leaderboard</h1>

            <ol>
                <li>Jack Ryan</li>
                <li>Paul Simon</li>
                <li>Alex Nicholson</li>
            </ol>

            <Link to="/"><h2>Back to home screen</h2></Link>
        </>
    );
};

export default Leaderboard;