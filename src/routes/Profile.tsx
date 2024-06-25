import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from '../components/ui/card'

interface Trip {
    origin: string
    destination: string
    date: string
    points: number
}

const Profile: React.FC = () => {
    const [trips, setTrips] = useState<Trip[]>([])

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
        ]

        setTrips(sampleTrips)
    }, [])

    const sortTrips = (trips: Trip[]) => {
        return trips.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
    }

    return (
        <>
            <div className="screenDiv">
                <h1>Here is your Profile Page</h1>
                <Link to="/leaderboard">
                    <h2>Leaderboard</h2>
                </Link>
                <Link to="/">
                    <h2>Back to home screen</h2>
                </Link>
                <Link to="/rewards">
                    <h2>Rewards</h2>
                </Link>

                <br />
                {/* <ul>
                {sortTrips(trips).map((trip) => (
                    <li key={trip.origin + trip.destination}>
                        <p>
                            Origin: {trip.origin} - Destination: {trip.destination}
                        </p>
                        <p>Date: {trip.date}</p>
                        <p>Points: {trip.points}</p>
                    </li>
                ))}
            </ul> */}
                <div>
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
            </div>
        </>
    )
}

export default Profile
