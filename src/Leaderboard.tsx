import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeaderBoardTable from "./components/LeadboardEntry"


const Leaderboard: React.FC = () => {

    const [entries, setEntries] = useState([
        { name: 'Tim Wong', points: 10, avatarUrl: 'https://github.com/shadcn.png' },
        { name: 'Jack Ryan', points: 100, avatarUrl: 'https://github.com/shadcn.png' },
        { name: 'Paul Simon', points: 200, avatarUrl: 'https://github.com/shadcn.png' },
        { name: 'Alex Nicholson', points: 180, avatarUrl: 'https://github.com/shadcn.png' },
    ]);

    const sortedEntries = [...entries].sort((a, b) => b.points - a.points);

    return (
        <div className='screenDiv'>
            <h1>Leaderboard</h1>
            <Link to="/"><h2>Back to home screen</h2></Link>
            <LeaderBoardTable entries={sortedEntries} />
        </div>
    )
}

export default Leaderboard
