import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"


interface LeadboardEntry {
    name: string;
    points: number;
    avatarUrl: string;
}

interface LeadboardEntryTable {
    entries: LeadboardEntry[];
}


const LeaderBoardTable: React.FC<LeadboardEntryTable> = ({ entries }) => {
    return (
        <div>
            {entries.map((entry) => (
                <Card key={entry.name} style={{ marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <CardHeader>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
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