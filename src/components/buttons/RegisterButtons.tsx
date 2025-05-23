import { Link } from "react-router-dom"

export const RegisterClientButton = () => {
  return (
    <div className="flex mt-6">
        <Link className="bg-green-500 py-2 px-4 text-white rounded-md" to="/client/register-client">Register Client</Link>
    </div>
  )
}

export const CreateProgramButton = () => {
  return (
    <div className="flex mt-6">
        <Link className="bg-blue-500 py-2 px-4 text-white rounded-md" to="/program/create-program">Create Program</Link>
    </div>
  )
}
