import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"

const SignUp: React.FC = () => {
    return (
        <>
            <br />
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" style={{paddingTop: '30px', paddingBottom: '15px', paddingLeft: '40px'}}>
                Sign up
            </h1>
            <br />

            <div className='screenDiv flex flex-col items-center rounded-tl-[30px] rounded-tr-[30px]'>
            <div style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '100px'}}>
                <Input placeholder='email address'></Input>
                <br />
                <Input placeholder='password'></Input>
                <br />
                <Input placeholder='confirm password'></Input>
                <br />
            </div>
            <Link to="/connecttohop" style={{ display: 'flex', justifyContent: 'center' }}>
                <Button>Sign Up</Button>
            </Link>
            </div>
        </>
    );
};

export default SignUp;