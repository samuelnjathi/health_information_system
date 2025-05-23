import { CreateProgramButton } from "../components/buttons/RegisterButtons";
import ProgramList from "../features/programs/ProgramList";

const Dashboard = () => {
    return (
      <div className="flex flex-col p-6">
          <h1 className="text-2xl font-semibold">Health Programs</h1>
          <CreateProgramButton />
          <ProgramList />
      </div>
    )
  }
  
  export default Dashboard