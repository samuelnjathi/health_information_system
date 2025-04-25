

const SideNav = () => {
  return (
    <div className="flex flex-col h-screen w-64 bg-blue-400">
        <div className="flex items-center justify-center h-16 bg-blue-500">
            <h1 className="text-white text-2xl font-bold">Health App</h1>
        </div>
        <nav className="flex flex-col mt-4">
            <a href="#" className="px-4 py-2 text-white hover:bg-blue-300">Dashboard</a>
            <a href="#" className="px-4 py-2 text-white hover:bg-blue-300">Health Program</a>
            <a href="#" className="px-4 py-2 text-white hover:bg-blue-300">Clients</a>
           
        </nav>
    </div>
  )
}

export default SideNav