import { Outlet } from 'react-router-dom'
import NavigationBar from './navigationBar'

export function Layout() {
    return (
        <div>
            <NavigationBar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}
