import { useEffect, useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

type Program = {
    id: string;
    name: string;
    description: string;
}

const ProgramList = () => {
    const [programs, setPrograms] = useState<Program[]>([]);

    useEffect(() => {
        fetch('http://localhost:3001/programs')
        .then(res => res.json())
        .then(data => setPrograms(data))
    })

  return (
    <div className="flex flex-col items-center justify-center my-3">
        <h1 className="text-2xl font-bold mb-4">Program List</h1>
        <table className="table-auto border-collapse border border-gray-300">
            <thead>
                <tr>
                    <th className="border border-gray-300 px-4 py-2">Program Name</th>
                    <th className="border border-gray-300 px-4 py-2">Program Description</th>
                    <th className="border border-gray-300 px-4 py-2">Action</th>
                </tr>
            </thead>
            <tbody>
                {programs.map((program) => (
                    <tr key={program.id} className="hover:bg-gray-100">
                        <td className="border border-gray-300 px-4 py-2">{program.name}</td>
                        <td className="border border-gray-300 px-4 py-2">{program.description}</td>
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

export default ProgramList