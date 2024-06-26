import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeaderBoardTable from "./components/LeadboardEntry";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"

import NavigationBar from './components/navigationBar'


const Leaderboard: React.FC = () => {

    const [activeTab, setActiveTab] = useState('all-time');

    const allTimeEntries = [
        { name: 'Tim Wong', points: 10, avatarUrl: 'https://avatar.iran.liara.run/public/50' },
        { name: 'Renee Singh', points: 100, avatarUrl: 'https://avatar.iran.liara.run/public/93' },
        { name: 'Paul Simon', points: 200, avatarUrl: 'https://avatar.iran.liara.run/public/50' },
        { name: 'Alexa Nicholson', points: 180, avatarUrl: 'https://avatar.iran.liara.run/public/58' },
    ];

    const monthlyEntries = [
        { name: 'Sean Mounga', points: 50, avatarUrl: 'https://avatar.iran.liara.run/public/11' },
        { name: 'Ginny West', points: 150, avatarUrl: 'https://avatar.iran.liara.run/public/61' },
        { name: 'Sara Olsen', points: 250, avatarUrl: 'https://avatar.iran.liara.run/public/91' },
        { name: 'Alexa Nicholson', points: 180, avatarUrl: 'https://avatar.iran.liara.run/public/58' }
    ];

    const weeklyEntries = [
        { name: 'Weekly User 1', points: 20, avatarUrl: 'https://avatar.iran.liara.run/public/80' },
        { name: 'Weekly User 2', points: 120, avatarUrl: 'https://avatar.iran.liara.run/public/81' },
        { name: 'Weekly User 3', points: 220, avatarUrl: 'https://avatar.iran.liara.run/public/66' },
        { name: 'Alex Nicholson', points: 180, avatarUrl: 'https://avatar.iran.liara.run/public/58' }
    ];

    const getEntries = () => {
        if (activeTab === 'month') return monthlyEntries;
        if (activeTab === 'week') return weeklyEntries;
        return allTimeEntries;
    };
    const sortedEntries = [...getEntries()].sort((a, b) => b.points - a.points);
    
    const sortedEntries = [...entries].sort((a, b) => b.points - a.points);
    const [selectedTab, setSelectedTab] = useState('all-time');

    return (
        <div className='screenDiv'>
            <h1 className='text-4xl font-extrabold center-text'>Leaderboard</h1>
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
