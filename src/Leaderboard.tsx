import React, { useState } from 'react';
import LeaderBoardTable from './components/LeadboardEntry';
import { Tabs, TabsList, TabsTrigger } from './components/ui/tabs';

import NavigationBar from './components/navigationBar';
import { NavigationTab } from './components/NavigationTabs';

const allTimeEntries = [
    { name: 'Tim Wong', points: 500, avatarUrl: 'public/Assets/50.png' },
    { name: 'Elly Maria (You)', points: 676, avatarUrl: 'public/Assets/93.png' },
    { name: 'Paul Simon', points: 480, avatarUrl: 'public/Assets/50.png' },
    { name: 'Alexa Nicholson', points: 765, avatarUrl: 'public/Assets/58.png' },
];

const monthlyEntries = [
    { name: 'Sean Mounga', points: 50, avatarUrl: 'public/Assets/11.png' },
    { name: 'Ginny West', points: 150, avatarUrl: 'public/Assets/61.png' },
    { name: 'Sara Olsen', points: 250, avatarUrl: 'public/Assets/91.png' },
    { name: 'Alexa Nicholson', points: 180, avatarUrl: 'public/Assets/58.png' }
];

const weeklyEntries = [
    { name: 'Sam Wilson', points: 20, avatarUrl: 'public/Assets/80.png' },
    { name: 'Sara Dixon', points: 120, avatarUrl: 'public/Assets/81.png' },
    { name: 'Amy Kwon', points: 220, avatarUrl: 'public/Assets/66.png' },
    { name: 'Alex Nicholson', points: 180, avatarUrl: 'public/Assets/58.png' }
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
        <div className="px-4">
                <div className="flex h-headerDiv justify-center items-center mt-4 flex-col">
                    <img src='/public/Assets/award_star_24dp_FILL0_wght400_GRAD0_opsz24 1.png'></img>

                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-2">
                        Leaderboard
                    </h1>
                    <div className="px-4 text-center">
                        <small className="text-s font-small leading-none text-center">
                            See how you stack up against other users
                        </small>
                    </div>
                </div>
            </div>
            <div className="greenscreen h-greenDiv px-4 pt-10 pb-20 rounded-tl-[30px] rounded-tr-[30px] mt-0 custom-gradient">
                <LeaderBoardTable entries={sortedEntries} />
                

                <Tabs defaultValue={activeTab} className="bg-gray-100 mt-4 rounded-md" onValueChange={setActiveTab} >
                    <TabsList className='flex justify-around'>
                        <TabsTrigger
                            value="all-time"
                            className={`data-[state=active]:text-secondary data-[state=active]:bg-white text-gray-500 hover:text-primary`}
                            onClick={() => setActiveTab('all-time')}
                        >
                            All Time
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
            </div>
            <NavigationBar navigationTab={NavigationTab.LeaderBoard} />
        </>
    )
}

export default Leaderboard
