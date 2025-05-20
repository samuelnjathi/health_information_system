import { useEffect, useState } from "react"


type Client = {
    id: number;
    fullName: string;
};

const ClientList = () => {
    const [clients, setClients] = useState<Client[]>([])

    useEffect(() => {
        fetch('http://localhost:3001/clients')
        .then(res => res.json())
        .then(data => setClients(data))
    }, []);
    
    const renderedClients = clients.map(client => (
            <li key={client.id}>{client.fullName}</li>
    ))

  return (
    <div>
        <ul>
            {renderedClients}
        </ul>
    </div>
  )
}

export default ClientList