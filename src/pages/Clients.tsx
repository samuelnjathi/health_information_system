import { Link } from "react-router-dom";
import ClientList from "../features/clients/ClientList";
const Dashboard = () => {
    return (
      <div className="flex flex-col p-6">
          <h1 className="text-2xl font-semibold">Clients</h1>
          <div className="flex mt-6">
                <Link className="bg-green-500 py-2 px-4 text-white rounded-md" to="register-client">Regiter Client</Link>
                <ClientList />
          </div>
      </div>
    )
  }
  
  export default Dashboard