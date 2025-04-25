import { Link } from "react-router-dom"

const SideNav = () => {
  return (
    <div className="flex flex-col h-screen w-64 bg-blue-400 ">
        <div className="flex items-center justify-center h-16 bg-blue-500">
            <h1 className="text-white text-2xl font-bold">Health App</h1>
        </div>
        <nav className="flex flex-col mt-4">
            <Link to="/" className="px-4 py-2 text-white hover:bg-blue-300">Dashboard</Link>
            <Link to="/program" className="px-4 py-2 text-white hover:bg-blue-300">Health Programs</Link>
            <Link to="/client" className="px-4 py-2 text-white hover:bg-blue-300">Clients</Link>
        </nav>
    </div>
  )
}

export default SideNav