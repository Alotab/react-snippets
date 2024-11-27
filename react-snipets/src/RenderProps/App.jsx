
/// Render props
// Takes functions that return React elements and call them inside their render logic
// the new props are injected dynamically as a parameter of a function
// Its almost similar to HOC, the end goal here is to enhance components without modifying their original implementation

const { useState, useEffect } = require("react")







const DataFetcher = ({ render, url }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        if (url.includes("deserts")) {
            setData(['cake', 'icre cream', 'pie', 'brownie'])
        } else {
            setData(['water', 'soda', 'juice'])
        }
    }, []);

    return render(data)
}

const DessertCount = () => {
    return (
        <DataFetcher 
            url="http://lttileLemon.com/desserts"
            render={(data) => <p>{data.length} desserts</p>}
        />
    );
};

const DrinksCount = () => {
    return (
        <DataFetcher 
            url="http://lttileLemon.com/drinks"
            render={(data) => <h3>{data.length} drinks</h3>}
        />
    );
};

import React from 'react'

const App = () => {
  return (
    <div>
        <header className='Header'>Little Lemon Resturant</header>
        <DessertCount />
        <DrinksCount />
    </div>
  )
}

export default App
