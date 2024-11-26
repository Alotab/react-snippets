import { useState } from "react"


const Forms = () => {
    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setName("")

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div className="Field">
                    <label htmlFor="name">Name:</label>
                    <input
                    id="name" 
                    type="text" 
                    placeholder="Enter name"
                    value={name} 
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <button disabled={!name} type="submit">
                    Submit
                </button>
            </fieldset>
        </form>
    </div>
  )
}

export default Forms