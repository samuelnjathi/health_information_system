import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateProgramForm = () => {
    const navigate = useNavigate();

    const [program, setProgram] = useState({
        name: '',
        description: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
       const { name, value } = e.target;
       setProgram(prev => {
            return {
                ...prev,
                [name]: value
            }
       }) 
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newProgram = {
            name: program.name,
            description: program.description
        }

        try {
            await axios.post('http://localhost:3001/programs', newProgram);
            navigate('/program')
        } catch (error) {
            console.error("Error storing data in json-server", error)
        }
    }

  return (
    <div className="flex flex-col items-center justify-center p-6">
    <h2 className="font-semibold text-lg">Create Program</h2>
    <form className="mt-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-1/2" onSubmit={handleSubmit}>
        <div className="mb-4">
            <label htmlFor="programName" className="block text-gray-700 text-sm font-bold mb-2">Program Name</label>
            <input
                onChange={handleChange} 
                value={program.name}
                type="text" 
                id="name" 
                name="name" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Program Name" 
                required
            />
        </div>
        <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Program Description</label>
            <textarea 
                onChange={handleChange}
                value={program.description}
                id="description" 
                name="description" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                placeholder="Program Description"
                rows={5} 
                required
            />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Submit</button>        
    </form>
    </div>
  )
}

export default CreateProgramForm