import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"

import goldStar from '../assets/GoldStar.png';
import silverStar from '../assets/SilverStar.png';
import bronzeStar from '../assets/BronzeStar.png';

interface LeadboardEntry {
    name: string;
    points: number;
    avatarUrl: string;
}

interface LeadboardEntryTable {
    entries: LeadboardEntry[];
}


const LeaderBoardTable: React.FC<LeadboardEntryTable> = ({ entries }) => {

    const getStar = (index: number) => {
        if (index === 0) return goldStar;
        if (index === 1) return silverStar;
        if (index === 2) return bronzeStar;
        return '';
    };
    return (
        <div>
            {entries.map((entry, index) => (
                <Card key={entry.name} style={{ marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <CardHeader>
                        <div style={{ display: 'flex', alignItems: 'center', flex: 1, position: 'relative' }}>
                        {index < 3 && (
                                <img
                                    src={getStar(index)}
                                    alt={`${getStar(index)} star`}
                                    style={{
                                        position: 'absolute',
                                        top: '-15px',
                                        left: '-20px',
                                        width: '40px',
                                        height: '40px', 
                                        zIndex: 2
                                    }}
                                />
                            )}
                            <Avatar>
                                <AvatarImage src={entry.avatarUrl} alt={entry.name} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <CardDescription className="ml-4">
                                {entry.name}
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0 pr-6">
                        <p>Points: {entry.points}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default LeaderBoardTable;