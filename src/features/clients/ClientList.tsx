import { useEffect, useState } from "react"
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

type Client = {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    gender: 'male' | 'female' | 'other';
    contactInfo: {
      phone: string;
      email: string;
      address: string;
    }
};

const ClientList = () => {
    const [clients, setClients] = useState<Client[]>([])

    useEffect(() => {
        fetch('http://localhost:3001/clients')
        .then(res => res.json())
        .then(data => setClients(data))
    }, []);
    
  

  return (
    <div className="flex flex-col items-center justify-center my-3">
        <h1 className="text-2xl font-bold mb-4">Client List</h1>
        <table className="table-auto border-collapse border border-gray-300">
            <thead>
                <tr>
                    <th className="border border-gray-300 px-4 py-2">Full Name</th>
                    <th className="border border-gray-300 px-4 py-2">Gender</th>
                    <th className="border border-gray-300 px-4 py-2">Date of Birth</th>
                    <th className="border border-gray-300 px-4 py-2">Phone</th>
                    <th className="border border-gray-300 px-4 py-2">Email</th>
                    <th className="border border-gray-300 px-4 py-2">Address</th>
                    <th className="border border-gray-300 px-4 py-2">Action</th>
                </tr>
            </thead>
            <tbody>
                {clients.map((client) => (
                    <tr key={client.id} className="hover:bg-gray-100">
                        <td className="border border-gray-300 px-4 py-2">{client.firstName} {client.lastName}</td>
                        <td className="border border-gray-300 px-4 py-2">{client.gender}</td>
                        <td className="border border-gray-300 px-4 py-2">{client.dateOfBirth}</td>
                        <td className="border border-gray-300 px-4 py-2">{client.contactInfo.phone}</td>
                        <td className="border border-gray-300 px-4 py-2">{client.contactInfo.email.substring(0, 15)}...</td>
                        <td className="border border-gray-300 px-4 py-2">{client.contactInfo.address}</td>
                        <td className="border border-gray-300 px-4 py-2">
                            <Link  to="#">
                                <VisibilityIcon className="text-blue-500" fontSize="small" />
                            </Link>
                            <Link to="#">
                                <EditSquareIcon className="text-green-500" fontSize="small" />
                            </Link>
                            <DeleteIcon className="text-red-600 cursor-pointer" fontSize="small" />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
  )
}

export default ClientList