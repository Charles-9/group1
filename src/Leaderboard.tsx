import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeaderBoardTable from "./components/LeadboardEntry";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import { MoveLeft } from 'lucide-react';



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
    

    return (
        <div className='screenDiv'>
            <h1>Leaderboard</h1>
            <Link to="/"><h2>Back to home screen</h2></Link>
            <LeaderBoardTable entries={sortedEntries} />
            <Tabs defaultValue="account" className="p-1" onValueChange={(value) => setActiveTab(value)}>
                <TabsList className='flex justify-around '>
                    <TabsTrigger className='hover:text-secondary' value="all-time">All time</TabsTrigger>
                    <TabsTrigger className='hover:text-secondary' value="month">This month</TabsTrigger>
                    <TabsTrigger className='hover:text-secondary' value="week">This week</TabsTrigger>
                </TabsList>
                <TabsContent value="account">Make changes to your account here.</TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>

        </div>
    )
}

export default Leaderboard
