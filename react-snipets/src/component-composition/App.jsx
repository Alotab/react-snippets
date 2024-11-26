
// Compoent - Composition[features]: containment and specialization
// we are creating a warning button that will 
// popup or show up on the screen when a user tries to delete something

const Button = ({children, backgroundColor }) => {
    return <button style={backgroundColor}>{children}</button>
};

// Alert takes in children props which will be the 'DeleteButton' component
const Alert = ({ children }) => {
    return (
        <>
            <div className="Overlay" />
            <div className="Alert">{children}</div>
        </>
    );
};

const DeleteButton = () => {
    return <button backgroundColor="red">Delete</button>
}



const App = () => {
  return (
    <div className="App">
        <header>Little Lemon Resturant</header>
        {/* This is the alert that will pop up on the screen  */}
        <Alert>
            <h4>Delete Acoount</h4>
            <p>
                Are you sure you want to proceed? You will miss all your delicious recipes!
            </p>
            <DeleteButton />
        </Alert>
    </div>
  )
}

export default App;