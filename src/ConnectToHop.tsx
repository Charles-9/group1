import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"

const Leaderboard: React.FC = () => {
    return (
        <>
            <br />
            <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Connect to AT Hop to track your trips
                </h2>


                <Input placeholder='AT Hop number'></Input><br />
                <Input placeholder='email address'></Input>
                <br />
                <Link to="/profile" style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button>Connect to hop</Button>
                </Link>
            </div>
        </>
    );
};

export default Leaderboard;