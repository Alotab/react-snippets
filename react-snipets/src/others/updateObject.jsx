


// Update one property of an object

import { useState } from "react"

const updateObject = () => {
    const [user, setUser] =  useState({ name: "", city: ""})


    // takes the user object and updates the name
    function handleChange(e) {
        setUser({
            ...user,
            name: e.target.value
        });
    }

    return (
        <form action="">
            <input type="text" 
            onChange={handleChange}
            placeholder="Your name"
            />
        </form>
    )
}

export default updateObject