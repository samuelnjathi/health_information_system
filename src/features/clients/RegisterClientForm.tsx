import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterClientForm = () => {
    const navigate = useNavigate();
    const [client, setClient] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        dob: '',
        phone: '',
        email: '',
        address: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {value, name} = e.target;
        setClient(prev => {
           return { ...prev,
            [name] :value
           }
        })
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newClient = {
            firstName: client.firstName,
            lastName: client.lastName,
            gender: client.gender,
            dateOfBirth: client.dob,
            contactInfo: {
                phone: client.phone,
                email: client.email,
                address: client.address
            }
            
        }
        try {
            await axios.post('http://localhost:3001/clients', newClient);
            navigate('/client')
        } catch (error) {
            console.error('Error storing data to json server' ,error)
        }
    }
  return (
    <div className="flex flex-col items-center justify-center p-6">
        <h2 className="font-semibold text-lg">Register Client</h2>
    <form className="mt-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-1/2" onSubmit={handleSubmit}>
        <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
            <input
                onChange={handleChange} 
                value={client.firstName}
                type="text" 
                id="firstName" 
                name="firstName" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="First Name" 
                required
            />
        </div>
        <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
            <input 
                onChange={handleChange}
                value={client.lastName}
                type="text" 
                id="lastName" 
                name="lastName" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="Last Name" 
                required />
        </div>
        <div className="mb-4">
            <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
            <select 
                onChange={handleChange}
                value={client.gender}
                id="gender" 
                name="gender" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
        </div>
        <div className="mb-4">
            <label htmlFor="dob" className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
            <input 
                onChange={handleChange}
                value={client.dob}
                type="date" 
                id="dob" 
                name="dob" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="Date of Birth" 
                required />
        </div>
        <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
            <input 
                onChange={handleChange}
                value={client.phone}
                type="tel" 
                id="phone" 
                name="phone" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="Phone Number" 
                required />
        </div>
        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input 
                onChange={handleChange}
                value={client.email}
                type="email" 
                id="email" 
                name="email" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="Email" 
                required 
            />
        </div>
        <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
            <input 
                onChange={handleChange}
                value={client.address}
                type="text" 
                id="address" 
                name="address" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="Address" 
                required 
            />
        </div>
        {/* <div className="mb-4">
            <label htmlFor="healthProgram" className="block text-gray-700 text-sm font-bold mb-2">Health Program</label>
            <select id="healthProgram" name="healthProgram" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                <option value="">Select Health Program</option>
                <option value="program1">Program 1</option>
                <option value="program2">Program 2</option>
                <option value="program3">Program 3</option>
            </select>   
        </div> */}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Submit</button>        
    </form>
    </div>
  )
}

export default RegisterClientForm