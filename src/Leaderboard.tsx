import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeaderBoardTable from "./components/LeadboardEntry"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"




const Leaderboard: React.FC = () => {

    const [entries, setEntries] = useState([
        { name: 'Tim Wong', points: 10, avatarUrl: 'https://github.com/shadcn.png' },
        { name: 'Jack Ryan', points: 100, avatarUrl: 'https://github.com/shadcn.png' },
        { name: 'Paul Simon', points: 200, avatarUrl: 'https://github.com/shadcn.png' },
        { name: 'Alex Nicholson', points: 180, avatarUrl: 'https://github.com/shadcn.png' },
    ]);

    const sortedEntries = [...entries].sort((a, b) => b.points - a.points);
    const [selectedTab, setSelectedTab] = useState('all-time');

    return (
        <div className='screenDiv'>
            <h1>Leaderboard</h1>
            <Link to="/"><h2>Back to home screen</h2></Link>
            <LeaderBoardTable entries={sortedEntries} />

            <Tabs defaultValue="account" className="p-1 bg-gray-100" >
            <TabsList className='flex justify-around'>
                    <TabsTrigger
                        value="all-time"
                        className={`data-[state=active]:text-secondary data-[state=active]:bg-white text-gray-500 hover:text-primary ${selectedTab === 'all-time' ? 'text-secondary' : ''}`}
                        onClick={() => setSelectedTab('all-time')}
                    >
                        All time
                    </TabsTrigger>
                    <TabsTrigger
                        value="month"
                        className={`data-[state=active]:text-secondary data-[state=active]:bg-white text-gray-500 hover:text-primary ${selectedTab === 'month' ? 'text-secondary' : ''}`}
                        onClick={() => setSelectedTab('month')}
                    >
                        This Month
                    </TabsTrigger>
                    <TabsTrigger
                        value="week"
                        className={`data-[state=active]:text-secondary data-[state=active]:bg-white text-gray-500 hover:text-primary ${selectedTab === 'week' ? 'text-secondary' : ''}`}
                        onClick={() => setSelectedTab('week')}
                    >
                        This Week
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    )
}

export default Leaderboard
