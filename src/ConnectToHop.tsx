import React from 'react';
import { Link } from 'react-router-dom';

const Leaderboard: React.FC = () => {
    return (
        <>
            <div className="screenDiv">
                <h1>Please connect to HOP</h1>

                <input placeholder="AT Hop number"></input>
                <br />
                <input placeholder="email address"></input>
                <br />
                <Link to="/profile">
                    <button>Connect to hop</button>
                </Link>
                <Link to="/">
                    <h2>Back to home screen</h2>
                </Link>
            </div>
        </>
    )
};

export default Leaderboard;