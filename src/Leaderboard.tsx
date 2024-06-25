import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeaderBoardTable from "./components/LeadboardEntry"


const Leaderboard: React.FC = () => {

    const [entries, setEntries] = useState([
        { name: 'Tim Wong', points: 10 },
        { name: 'Jack Ryan', points: 100 },
        { name: 'Paul Simon', points: 200 },
        { name: 'Alex Nicholson', points: 180 },
    ]);

    const sortedEntries = [...entries].sort((a, b) => b.points - a.points);

    return (
        <div>
            <h1>Leaderboard</h1>
            <Link to="/"><h2>Back to home screen</h2></Link>
            <LeaderBoardTable entries={sortedEntries} />
        </div>
    )
}

export default Leaderboard
