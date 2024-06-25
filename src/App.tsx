import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './HomeScreen'
import Profile from './Profile'
import Leaderboard from './Leaderboard'
import ConnectToHop from './ConnectToHop'
import SignUp from './SignUp'
import Login from './Login'
import Rewards from './Rewards'
// import ConnectToHop from './ConnectToHop'; // Ensure ConnectToHop.tsx exports a React component
// import Profile from './Profile'; // Ensure Profile.tsx exports a React component
// import Leaderboard from './Leaderboard'; // Ensure Leaderboard.tsx exports a React component
// import Rewards from './Rewards'; // Ensure Rewards.tsx exports a React component
// import LoginStyled from "./LoginStyled"; // Ensure LoginStyled.tsx exports a React component

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/connecttohop" element={<ConnectToHop />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/rewards" element={<Rewards />} />
                {/* <Route path="/details" element={<ConnectToHop />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/loginstyled" element={<LoginStyled />} /> */}
            </Routes>
        </Router>
    )
}

export default App
