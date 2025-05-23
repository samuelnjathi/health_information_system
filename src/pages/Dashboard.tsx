import { RegisterClientButton, CreateProgramButton } from "../components/buttons/RegisterButtons"

const Dashboard = () => {
  return (
    <div className="flex flex-col p-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="flex space-x-5">
            <RegisterClientButton />
            <CreateProgramButton />
        </div>
        
    </div>
  )
}

export default Dashboard