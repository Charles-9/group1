import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeaderBoardTable from './components/LeadboardEntry';
import { Tabs, TabsList, TabsTrigger } from './components/ui/tabs';

import NavigationBar from './components/navigationBar';
import { NavigationTab } from './components/NavigationTabs';

const allTimeEntries = [
    { name: 'Tim Wong', points: 10, avatarUrl: './50.ong' },
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
    { name: 'Sam Wilson', points: 20, avatarUrl: 'https://avatar.iran.liara.run/public/80' },
    { name: 'Sara Dixon', points: 120, avatarUrl: 'https://avatar.iran.liara.run/public/81' },
    { name: 'Amy Kwon', points: 220, avatarUrl: 'https://avatar.iran.liara.run/public/66' },
    { name: 'Alex Nicholson', points: 180, avatarUrl: 'https://avatar.iran.liara.run/public/58' }
];


const Leaderboard: React.FC = () => {

    const [activeTab, setActiveTab] = useState('all-time'); 

    const getEntries = () => {
        if (activeTab === 'month') return monthlyEntries;
        if (activeTab === 'week') return weeklyEntries;
        return allTimeEntries;
    };
    const sortedEntries = [...getEntries()].sort((a, b) => b.points - a.points);

    return (
        <>
        <div>
            <div className="h-headerDiv">
                <h1 className="text-4xl font-extrabold center-text">
                    Leaderboard
                </h1>
                <Link to="/">
                    <h2>Back to home screen</h2>
                </Link>
            </div>
            <div className="greenscreen h-greenDiv px-4 pb-20 rounded-tl-[30px] rounded-tr-[30px] mt-0 custom-gradient">
                <LeaderBoardTable entries={sortedEntries} />
                </div>

                <Tabs defaultValue={activeTab} className="bg-gray-100" onValueChange={setActiveTab} >
                    <TabsList className='flex justify-around'>
                        <TabsTrigger
                            value="all-time"
                            className={`data-[state=active]:text-secondary data-[state=active]:bg-white text-gray-500 hover:text-primary`}
                            onClick={() => setActiveTab('all-time')}
                        >
                            All time
                        </TabsTrigger>
                        <TabsTrigger
                            value="month"
                            className={`data-[state=active]:text-secondary data-[state=active]:bg-white text-gray-500 hover:text-primary`}
                            onClick={() => setActiveTab('month')}
                        >
                            This Month
                        </TabsTrigger>
                        <TabsTrigger
                            value="week"
                            className={`data-[state=active]:text-secondary data-[state=active]:bg-white text-gray-500 hover:text-primary`}
                            onClick={() => setActiveTab('week')}
                        >
                            This Week
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
            <NavigationBar navigationTab={NavigationTab.LeaderBoard} />
        </>
    )
}

export default Leaderboard
