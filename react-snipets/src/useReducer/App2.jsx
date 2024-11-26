


import { useReducer } from "react";

// useReducer[initailState, reducer] hook is a super powered useState[initialState] hook with an addition of reducer function
// the reducer second arguement is the action object

// reducer function
const reducer = (state, action) => {
    if (action.type === 'buy_ingredients') return {money: state.money - 10};
    if (action.type === 'sell_a_meal') return {money: state.money + 50};
    if (action.type === 'celebrity_visit') return {money: state.money + 5000};

    return state;
}

const App2 = () => {

    const initialState = {money: 100}
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App2">
        <h1>Wallet: {state.money}</h1>
        <div>
            {/* You use dispatch method of the useReducer hook instead of using setState in useState hook
            which accepst an object literal with a single property called type set to a matching action.type 
            whose behaviour is defined inside the reducer function */}
            <button onClick={() => dispatch({type: 'buy_ingredients'})}>
                Shopping for veggies
            </button>
            <button onClick={() => dispatch({type: 'sell_a_meal'})}>
                Serve a meal to the customer
            </button>
            <button onClick={() => dispatch({type: 'celebrity_visit'})}>
                Serve a meal to a celebrity
            </button>
        </div>
    </div>
  )
}

export default App2