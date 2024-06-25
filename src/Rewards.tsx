import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./components/ui/card"

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
            <div style={{ paddingLeft: '20px', paddingRight: '20px' }} >
                <br />
                <h1 className="center-text scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" >
                    Your Free Trips
                </h1>
                <small className="text-sm font-medium leading-none">Redeem your free trip to have your next bus trip fee waived by AT HOP</small>

                <br />
                <br />
                <br />
                <br />


                {rewards.map((reward, index) => (
                    <Card key={index}>
                        <CardHeader style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            {reward.title}
                            <Button style={{ width: '150px' }}>Redeem</Button>
                        </CardHeader>
                        <CardDescription>
                            Earned on {new Date(reward.date).toLocaleDateString()}
                        </CardDescription>
                    </Card>
                ))}


                <Link to="/profile"><h2>Back to Profile</h2></Link>
                <Link to="/"><h2>Back to home screen</h2></Link>
            </div>
        </>
    );
};

export default Rewards;