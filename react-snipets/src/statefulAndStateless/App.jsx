


import React, { useState } from 'react'

const App = () => {
    const [date] = useState(new Date())

  return (
    <div>
        <Child message={date.toLocaleDateString()}/>
    </div>
  )
}

export default App

// Stateful does need it own state in other to work
// This is an example of the reationship between statefull and stateless components
// Since child component cant store any state, they are called stateless component
// All of it data comes in as props that is passed through by the parent component
// Props in Child components are immutable and are only changed in the Parent component