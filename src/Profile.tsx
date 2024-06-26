import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "./components/ui/card"
import NavigationBar from './components/navigationBar';
import ProgressBar from './ProgressBar';

interface Trip {
    origin: string;
    destination: string;
    date: string;
    points: number;
}

const Profile: React.FC = () => {
    const [trips, setTrips] = useState<Trip[]>([]);

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

    }, []);

    const sortTrips = (trips: Trip[]) => {
        return trips.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    };

    return (
        <>
            <div className='pt-2 pr-4 pl-4'>
                <div className='flex pt-5'>
                    <svg width="130" height="90" viewBox="5 10 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.35 71.25C29.0333 68.5417 33.15 66.4063 37.7 64.8438C42.25 63.2813 47.0167 62.5 52 62.5C56.9833 62.5 61.75 63.2813 66.3 64.8438C70.85 66.4063 74.9667 68.5417 78.65 71.25C81.1778 68.4028 83.1458 65.1736 84.5542 61.5625C85.9625 57.9514 86.6667 54.0972 86.6667 50C86.6667 40.7639 83.2903 32.8993 76.5375 26.4063C69.7847 19.9132 61.6055 16.6667 52 16.6667C42.3944 16.6667 34.2153 19.9132 27.4625 26.4063C20.7097 32.8993 17.3333 40.7639 17.3333 50C17.3333 54.0972 18.0375 57.9514 19.4458 61.5625C20.8542 65.1736 22.8222 68.4028 25.35 71.25ZM52 54.1667C47.7389 54.1667 44.1458 52.7604 41.2208 49.9479C38.2958 47.1354 36.8333 43.6806 36.8333 39.5833C36.8333 35.4861 38.2958 32.0313 41.2208 29.2188C44.1458 26.4063 47.7389 25 52 25C56.2611 25 59.8542 26.4063 62.7792 29.2188C65.7042 32.0313 67.1667 35.4861 67.1667 39.5833C67.1667 43.6806 65.7042 47.1354 62.7792 49.9479C59.8542 52.7604 56.2611 54.1667 52 54.1667ZM52 91.6667C46.0055 91.6667 40.3722 90.5729 35.1 88.3854C29.8278 86.1979 25.2417 83.2292 21.3417 79.4792C17.4417 75.7292 14.3542 71.3195 12.0792 66.25C9.80416 61.1806 8.66666 55.7639 8.66666 50C8.66666 44.2361 9.80416 38.8195 12.0792 33.75C14.3542 28.6806 17.4417 24.2708 21.3417 20.5208C25.2417 16.7708 29.8278 13.8021 35.1 11.6146C40.3722 9.42709 46.0055 8.33334 52 8.33334C57.9944 8.33334 63.6278 9.42709 68.9 11.6146C74.1722 13.8021 78.7583 16.7708 82.6583 20.5208C86.5583 24.2708 89.6458 28.6806 91.9208 33.75C94.1958 38.8195 95.3333 44.2361 95.3333 50C95.3333 55.7639 94.1958 61.1806 91.9208 66.25C89.6458 71.3195 86.5583 75.7292 82.6583 79.4792C78.7583 83.2292 74.1722 86.1979 68.9 88.3854C63.6278 90.5729 57.9944 91.6667 52 91.6667Z" fill="#1D1B20" />
                    </svg>

                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight" >
                        Welcome back,
                        Elly Maria
                    </h1>
                </div>
            </div>
            <div className='greenscreen px-4 pb-20 rounded-tl-[30px] rounded-tr-[30px] mt-0 custom-gradient'>
                <h3 className="mt-0 pt-2 scroll-m-20 text-xl font-semibold tracking-tight">
                    Bus Points: Level 3
                </h3>
                <ProgressBar current={676} total={1000} />

                <div className="px-0">
                    <h3 className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
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
            </div>


            <NavigationBar />
        </>
    )
};

export default Profile