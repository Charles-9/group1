import React, { useState } from 'react';
import { Button } from "./components/ui/button"
import {
    Card,
    CardDescription,
    CardHeader,
} from "./components/ui/card"
import NavigationBar from './components/navigationBar'
import PopupDialog from './components/popupDialog';

interface Reward {
    title: string;
    date: string;
}

const Rewards: React.FC = () => {
    const [rewards, setRewards] = useState<Reward[]>([]);

    React.useEffect(() => {
        const rewards: Reward[] = [
            {
                title: 'Free Trip',
                date: '2024-03-24',
            },
            {
                title: 'Free Trip',
                date: '2024-03-23',
            },
        ];

        setRewards(rewards);
    }, []);

    return (
        <>
            <div className='px-4' >
                <div className='flex justify-center items-center mt-4 flex-col'>
                    <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M65.5209 48.4083V18.4614C65.5209 12.9388 61.0612 8.47916 55.5386 8.47916H18.4615C12.9388 8.47916 8.47919 12.9388 8.47919 18.4614V55.5385C8.47919 61.0612 12.9388 65.5208 18.4615 65.5208H48.4084L65.5209 48.4083ZM18.4615 59.8167C16.102 59.8167 14.1834 57.898 14.1834 55.5385V18.4614C14.1834 16.102 16.102 14.1833 18.4615 14.1833H55.5386C57.898 14.1833 59.8167 16.102 59.8167 18.4614V45.5562H55.5386C50.0159 45.5562 45.5563 50.0159 45.5563 55.5385V59.8167H18.4615ZM30.6217 30.6736C29.8698 28.0289 27.1214 26.4732 24.4768 27.2251C21.8321 27.977 20.2764 30.7254 21.0284 33.396C21.2358 34.122 21.5988 34.7702 22.0655 35.3147L30.7254 32.8774C30.8551 32.1514 30.8292 31.3995 30.6217 30.6736ZM48.4602 25.6435C47.7342 22.9989 44.9599 21.4432 42.3153 22.1951C39.6706 22.947 38.1149 25.6954 38.8668 28.366C39.0743 29.0919 39.4373 29.7401 39.904 30.2846L48.5639 27.8474C48.6936 27.1214 48.6676 26.3695 48.4602 25.6435ZM51.0012 34.5628L23.5174 42.3152C27.2252 47.2156 33.6553 49.601 39.904 47.8379C46.1526 46.0748 50.3789 40.6558 51.0012 34.5628Z" fill="#FFB03B" />
                    </svg>

                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-2" >
                        Your Free Trips
                    </h1>
                    <div className='px-4'>
                        <small className="text-xs font-small leading-none">Redeem your free trip to have your next bus trip fee waived by AT HOP</small>
                    </div>
                </div>
            </div>
            <div className='greenscreen px-4 pt-4 pb-[250px] rounded-tl-[30px] rounded-tr-[30px] mt-4'>

                <div className='flex space-y-2 flex-col'>
                    {rewards.map((reward, index) => (
                        <Card key={index}>
                            <CardHeader className='flex p-4 pb-0 font-bold space-x-10 justify-between flex-row center-vertical'>
                                {reward.title}
                                {/* <Button className='w-50 bg-accent rounded-[50px]'>Redeem</Button> */}
                                <PopupDialog />
                            </CardHeader>
                            <CardDescription className='text-sm pl-5 pb-5 text-gray-500'>
                                Earned on {new Date(reward.date).toLocaleDateString()}
                            </CardDescription>
                        </Card>
                    ))}
                </div>


            </div>
            <NavigationBar />
        </>
    );
};

export default Rewards;