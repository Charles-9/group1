import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"

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
                    <Card key={entry.name}>
                        <CardHeader>
                            <CardDescription>
                                {entry.name}
                            </CardDescription>
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