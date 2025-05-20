import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Clients from "./pages/Clients"
import HealthPrograms from "./pages/HealthPrograms"
import Layout from "./components/Layout"
import RegisterClientForm from "./features/clients/RegisterClientForm"


const App = () => {
  return (
  <>
    
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />

              <Route path="program">
                <Route index element={<HealthPrograms />} />

              </Route>

              <Route path="client">
                  <Route index element={<Clients />} />
                  <Route path="register-client" element={<RegisterClientForm />} />
              </Route>
            
            </Route>
        </Routes>
    </BrowserRouter>
  </>
    
  )
}

export default App