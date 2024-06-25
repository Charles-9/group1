import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./components/ui/card"
import { Progress } from "./components/ui/progress"


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
                date: '2024-06-06',
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
            <Link to="/leaderboard"><h2>Leaderboard</h2></Link>
            <Link to="/"><h2>Back to home screen</h2></Link>
            <Link to="/rewards"><h2>Rewards</h2></Link>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" >
                Welcome back,
                Elly Maria
            </h1>
            <br />

            <div style={{ paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px' }}>
                <h3>Bus Points: Level 3</h3>
                <Progress value={progress} />
            </div>

            <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                    Recent Trips
                </h3>
                {sortTrips(trips).map((trip) => (
                    <Card key={trip.origin + trip.destination}>
                        <CardHeader>
                            <CardDescription>
                                {trip.origin} ➡️ {trip.destination}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Date: {trip.date}</p>
                            <p>points: {trip.points}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* <Card>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card> */}
        </>
    );
};

export default Profile