import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"

const Leaderboard: React.FC = () => {
    return (
        <>
            <br />

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '200px'}}>
            <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl" style={{paddingLeft: '30px'}}>
                Connect to AT Hop
            </h2>
            <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl" style={{paddingLeft: '30px'}}>
                to track your trips
            </h2>
            <br />
            <img src={"https://i0.wp.com/www.greaterauckland.org.nz/wp-content/uploads/2015/09/AT-Logo.png?fit=512%2C512&ssl=1"} alt = "Logo" style={{width: '170px', alignSelf: 'flex-end', paddingRight: '40px'}}/>
            </div>

            <div style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '50px'}}>
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