import { Outlet } from 'react-router-dom'
import SideNav from './SideNav'

const Layout = () => {
  return (
    <div className="flex h-full font-cascadia">
        <SideNav />
        <div className="flex-1 bg-gray-50">
            <Outlet />
        </div>
    </div>
  )
}

export default Layout