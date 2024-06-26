import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "./components/ui/card"
import { Progress } from "./components/ui/progress"
import { Button } from "./components/ui/button"


interface Trip {
    origin: string;
    destination: string;
    date: string;
    points: number;
}

const Profile: React.FC = () => {
    const [trips, setTrips] = useState<Trip[]>([]);
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const sampleTrips: Trip[] = [
            {
                origin: 'Auckland CBD',
                destination: 'Botany Town Center',
                date: '2024-06-06',
                points: 100,
            },
            {
                origin: 'Onehunga',
                destination: 'Howick',
                date: '2024-06-05',
                points: 100,
            },
            {
                origin: 'Blockhouse Bay',
                destination: 'Penrose',
                date: '2024-06-04',
                points: 100,
            },
        ];

        setTrips(sampleTrips);

        const timer = setTimeout(() => setProgress(66), 500);
        return () => clearTimeout(timer);
    }, []);

    const sortTrips = (trips: Trip[]) => {
        return trips.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    };

    return (
        <>
            <Link to="/"><h2>Back to home screen</h2></Link>
            <div className='p-2 pt-0'>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight" >
                    Welcome back,
                    Elly Maria
                </h1>
                <br />

                <h3>Bus Points: Level 3</h3>
                <Progress value={progress} />
            </div>

            <div className="px-2">
                <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                    Recent Trips
                </h3>
                <div className='flex space-y-2 flex-col'>
                    {sortTrips(trips).map((trip) => (
                        <Card key={trip.origin + trip.destination} >
                            <CardHeader className='p-5 pb-1'>
                                <CardDescription>
                                    {trip.origin} → {trip.destination}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className='flex p-4 space-x-10 justify-between'>
                                <p>Date: {trip.date}</p>
                                <p>points: {trip.points}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Link to="/profile"><Button>Profile</Button></Link>
                <Link to="/leaderboard"><Button>Leaderboard</Button></Link>
                <Link to="/rewards"><Button>Rewards</Button></Link>
            </div>
        </>
    );
};

export default Profile