


import React, { useEffect, useState } from 'react'

const App = () => {
    const [user, setUser] = useState([])

    // fetch data from the API, converts to json and finally send to the user data
    const fetchData = () => {
        fetch("https://randomuser.me/api/?results=1")
            .then(response => response.json())
            .then(data => setUser(data));
    }

    // fetchData is invoked in the useEffect hook once
    useEffect(() => {
        fetchData();
    }, []);

    // condition to check if the array is not empty 
    return object.keys(user).length > 0 ? (
        <div>
            <h1>Data returned</h1>
            <h2>First Name: {user.results[0].name.first}</h2>
            <h2>Last Name: {user.results[0].name.last}</h2>
        </div>
    ) : (
        <h2>Data pending</h2>
    );

}

export default App