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
}

interface LeadboardEntryTable {
    entries: LeadboardEntry[];
}


const LeaderBoardTable: React.FC<LeadboardEntryTable> = ({ entries }) => {
    return (
        <div>
            {entries.map((entry) => (
                <Card key={entry.name} style={{ marginBottom: '10px' }}>
                    <CardHeader>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt={entry.name} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <CardDescription>
                                {entry.name}
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'right' }}>
                        <p>Points: {entry.points}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default LeaderBoardTable;