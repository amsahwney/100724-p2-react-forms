import EmployeesContainer from "./Employees/EmployeesContainer"
import NewEmployeeForm from "./Employees/NewEmployeeForm"
import SandwichContainer from "./Sandwiches/SandwichContainer"
import NewSandwichForm from "./Sandwiches/NewSandwichForm"
import { useState } from "react"
import { employeesArray } from "../data/employees-array"
import { sandwichArray } from "../data/sandwich-array"

function App() {
  const [employees, setEmployees] = useState( employeesArray ) 
  const [sandwiches, setSandwiches] = useState( sandwichArray )

  return (
    <div className="App">

      <h1>ASA: Authoritative Sandwich Authority</h1>

      <NewEmployeeForm employees = {employees} setEmployees = {setEmployees}/>

      <EmployeesContainer employees = {employees} setEmployees = {setEmployees}/>

      <NewSandwichForm sandwiches = {sandwiches} setSandwiches = {setSandwiches}/>

      <SandwichContainer sandwiches = {sandwiches} />

    </div>
  )
}

export default App