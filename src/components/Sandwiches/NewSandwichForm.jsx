import { useState } from "react"
import { v4 as uuid } from 'uuid'

function NewSandwichForm( {sandwiches, setSandwiches} ) {

    const [SWname,setSWName] = useState('')
    const [description,setDescription] = useState('')
    const [isSandwich, setIsSandwich] = useState(false)
    const [rating, setRating] = useState("5")

    console.log(typeof rating)

    const handleChangeSWName = (event) => setSWName(event.target.value)
    const handleChangeDesc = (event) => setDescription(event.target.value)
    const handleChangeIsSandwich = () => setIsSandwich(!isSandwich)
    const handleChangeRating = (event) => setRating(event.target.value)

    function resetSWForm() {
        setSWName('')
        setDescription('')
    }
    
    function handleSWSubmit(event) {
        event.preventDefault()

        const NewSandwich = {
            id: uuid(),
            name:SWname,
            description,
            isRealSandwich:isSandwich,
            rating
        }

        const updatedSandwich = [...sandwiches, NewSandwich]
        setSandwiches(updatedSandwich)
        resetSWForm()
    }

    return (
        <div className="form-container">

            <form className="new-item-form" onSubmit={handleSWSubmit}>

                <h2>Create Your New Sandwiches Here:</h2>

                <label htmlFor="name">Name: </label>
                <input required={true} name="name" onChange = {handleChangeSWName} value = {SWname} />

                <br/>

                <label htmlFor="description">Description: </label>
                <input required={true} name="description" onChange = {handleChangeDesc} value = {description}/>

                <br/>

                <label htmlFor="rating">Rating: </label>
                <select name="rating" onChange={handleChangeRating} value = {rating}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <br/>

                <label>Is it a real sandwich:</label>
                <input type="checkbox" onChange={handleChangeIsSandwich} value={isSandwich}/>

                <br/>

                <input type="submit" value="Add Sandwich" />

            </form>
        
        </div>
    )
}

export default NewSandwichForm