import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "./components/ui/button"

const Leaderboard: React.FC = () => {
    return (
        <>
            <h1>Leaderboard</h1>

            <ol>
                <li>Jack Ryan</li>
                <li>Paul Simon</li>
                <li>Alex Nicholson</li>
            </ol>
            <Button>Click me</Button>
            <Link to="/"><h2>Back to home screen</h2></Link>
        </>
    );
};

export default Leaderboard;