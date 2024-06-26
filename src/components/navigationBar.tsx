import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineLeaderboard } from 'react-icons/md'
import { IoTicketSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const NavigationBar = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-card">
            <Tabs defaultValue="account">
                <TabsList className="fixed bottom-0 center">
                    <TabsTrigger
                        value="profile"
                        onClick={() => navigate('/profile')}
                    >
                        <CgProfile size={25} className="text-secondary" />
                        Profile
                    </TabsTrigger>
                    <TabsTrigger
                        value="leaderboard"
                        onClick={() => navigate('/leaderboard')}
                    >
                        <MdOutlineLeaderboard
                            size={25}
                            className="text-[#88cf1e]"
                        />
                        Leaderboard
                    </TabsTrigger>
                    <TabsTrigger
                        value="freetrips"
                        onClick={() => navigate('/rewards')}
                        
                    >
                        <IoTicketSharp size={25} className="text-accent" />
                        Free Trips
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    )
}

export default NavigationBar
