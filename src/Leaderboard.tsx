import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "./components/ui/button";
import LeaderBoardTable from "./components/LeadboardEntry"


const Leaderboard: React.FC = () => {

    const [entries, setEntries] = useState([
        { name: 'Test', points: 10 },
        { name: 'Jack Ryan', points: 100 },
        { name: 'Paul Simon', points: 200 },
        { name: 'Alex Nicholson', points: 180 },
    ]);
    return (
        <>
            <h1>Leaderboard</h1>
            <Button>Click me</Button>
            <Link to="/"><h2>Back to home screen</h2></Link>
            <LeaderBoardTable entries={entries} />
        </>
    );
};

export default Leaderboard;