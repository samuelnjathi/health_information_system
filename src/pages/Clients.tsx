import { RegisterClientButton } from "../components/buttons/RegisterButtons";
import ClientList from "../features/clients/ClientList";
const Dashboard = () => {
    return (
      <div className="flex flex-col p-6">
          <h1 className="text-2xl font-semibold">Clients</h1>
          <RegisterClientButton />
          <ClientList />
      </div>
    )
  }
  
  export default Dashboard