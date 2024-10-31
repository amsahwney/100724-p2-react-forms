import { useState } from 'react'
import { v4 as uuid } from 'uuid'

function NewEmployeeForm( {employees, setEmployees} ) {

// declare state
    const [name,setName] = useState('')
    const [email,setEmail] = useState('') 
    const [startDate,setStartDate] = useState('')

// Array of bad words to check for
    const badWords = ['heck', 'shoot', 'chinchilla', 'lint licker']

//updating name state
    function handleChangeName(event) { 
        let input = event.target.value
        badWords.forEach(word => {
            input = input.replaceAll(word, "****")
        })
        setName(input)
    }

//updating email state
    function handleChangeEmail(event) {
        let input = event.target.value
        badWords.forEach(word => {
            input = input.replaceAll(word, '****')
        })
        setEmail(input)
    }

//updating the date state
    const handleChangeDate = (event) => setStartDate(event.target.value)

//function for reset form button
    function resetForm() {
        setEmail('')
        setName('')
        setStartDate('')
    }
    
//submit function
    function handleSubmit(event) {
        event.preventDefault()
        const newEmployee = {
            id: uuid(),
            name: name,
            email: email,
            startDate: startDate
            
        }

        const updatedEmployees = [...employees, newEmployee]

        setEmployees(updatedEmployees)
        
        resetForm()
    }

    return (
        <div className="form-container">

            <form className="new-item-form" onSubmit={handleSubmit}>

                <h2>Submit Newly Hired Employees Here:</h2>

                <label htmlFor="name">Name: </label>
                <input required={true} name="name" onChange={handleChangeName} value={name}/>

                <br/>

                <label htmlFor="email">Email Address: </label>
                <input type="email" required={true} name="email" onChange={handleChangeEmail} value={email}/>

                <br/>

                <label htmlFor="start-date">Start Date: </label>
                <input type="date" name="start-date" onChange={handleChangeDate} value={startDate}/>

                <br/>

                <input type="submit" value="Submit Employee" />

            </form>

            <button onClick={resetForm}>Reset Form</button>

        </div>
    )
}

export default NewEmployeeForm