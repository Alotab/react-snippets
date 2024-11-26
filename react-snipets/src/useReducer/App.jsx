import { useReducer } from "react";

// useReducer[initailState, reducer] hook is a super powered useState[initialState] hook with an addition of reducer function
// the reducer second arguement is the action object


const reducer = (state, action) => {
    if (action.type === 'ride') return {money: state.money + 10};
    if (action.type === 'fuel') return {money: state.money - 50};
    return new Error();
}

const App = () => {

    const initialState = {money: 100}
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
        <h1>Wallet: {state.money}</h1>
        <div>
            <button onClick={() => dispatch({type: 'ride'})}>
                A new Customer
            </button>
            <button onClick={() => dispatch({type: 'fuel'})}>
                Refill the tank
            </button>
        </div>
    </div>
  )
}

export default App