import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
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
                <Card key={entry.name} style={{ marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%'}}>
                    <CardHeader>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar>
                                <AvatarImage src={entry.avatarUrl} alt={entry.name} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <CardDescription>
                                {entry.name}
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p>Points: {entry.points}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default LeaderBoardTable;