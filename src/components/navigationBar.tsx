import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineLeaderboard } from 'react-icons/md'
import { IoTicketSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { NavigationTab } from './NavigationTabs'

interface Props {
    navigationTab: NavigationTab
}

const NavigationBar = (props: Props) => {
    const navigate = useNavigate()

    const handleNavigate = (path: string) => {
        navigate(path)
    }

    return (
        <div className="bg-card">
            <Tabs
                value={props.navigationTab}
                className="fixed bottom-0 center w-[390px] "
            >
                <TabsList className="h-[70px] rounded-none bg-card flex flex-row justify-around align-center">
                    <TabsTrigger
                        value={NavigationTab.Profile}
                        onClick={() => handleNavigate('/profile')}
                        className={`flex flex-col align-center w-[100px] data-[state=active]:bg-gray-200`}
                    >
                        <CgProfile size={25} className="text-secondary" />
                        Profile
                    </TabsTrigger>
                    <TabsTrigger
                        value={NavigationTab.LeaderBoard}
                        onClick={() => handleNavigate('/leaderboard')}
                        className={`flex flex-col align-center w-[100px] data-[state=active]:bg-gray-200`}
                    >
                        <MdOutlineLeaderboard
                            size={25}
                            className="text-[#88cf1e]"
                        />
                        Leaderboard
                    </TabsTrigger>
                    <TabsTrigger
                        value={NavigationTab.FreeTrips}
                        onClick={() => handleNavigate('/rewards')}
                        className={`flex flex-col align-center w-[100px] data-[state=active]:bg-gray-200`}
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
