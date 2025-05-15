

const RegisterClientForm = () => {
  return (
    <div className="flex flex-col p-6">
        <h2 className="font-semibold text-lg">Register Client</h2>
    <form className="mt-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg">
        <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
            <input type="text" id="firstName" name="firstName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="First Name" required />
        </div>
        <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
            <input type="text" id="lastName" name="lastName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Last Name" required />
        </div>
        <div className="mb-4">
            <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
            <select id="gender" name="gender" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div className="mb-4">
            <label htmlFor="dob" className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
            <input type="date" id="dob" name="dob" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Date of Birth" required />
        </div>
        <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Phone Number" required />
        </div>
        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" required />
        </div>
        <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
            <input type="text" id="address" name="address" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Address" required />
        </div>
        <div className="mb-4">
            <label htmlFor="healthProgram" className="block text-gray-700 text-sm font-bold mb-2">Health Program</label>
            <select id="healthProgram" name="healthProgram" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                <option value="">Select Health Program</option>
                <option value="program1">Program 1</option>
                <option value="program2">Program 2</option>
                <option value="program3">Program 3</option>
            </select>   
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>        
    </form>
    </div>
  )
}

export default RegisterClientForm