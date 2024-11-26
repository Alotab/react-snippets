
import React, { useState } from 'react'

function GoalForm(props) {
    const [formData, setFormData] = useState({goal: "", by: ""})


    function changeHander(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    // the addGoal function was use as prop on the GoalForm function
    // it receives the form data 
    // to be able to  in the updatedAll Goals form formdata and update the formdata
    function submitHandler(e) {
        e.preventDefault();
        props.onAdd(formData);
        setFormData({goal: "", by: ""}) // reset the form on the form after user submit the form
    };

    return (
        <>
        <h1>My little Lemon Goals</h1>
        <form onSubmit={submitHandler}>
            <input type="text" name='goal' placeholder='Goal' value={formData.goal} onChange={changeHander} />
            <input type="text" name='by' placeholder='by' value={formData.by} onChange={changeHander} />
            <button type='submit'>Submit Goal</button>
        </form>
        
        </>
    )
}

// this components recieves all the Goals variables as a props
// and map over all array of goals objects 
function ListOfGoals(props){
    return (
        <ul>
            {props.allGoals.map((g) =>{
                <li key={g.goal}>
                    <span>My goal is to {g.goal}, by {g.by}</span>
                </li>
            } )}
        </ul>
    )
}


const FormUseState = () => {
    const [allGoals, updateAllGoals] = useState([]);

    function addGoal(goal) { updateAllGoals([...allGoals, goal]); }
  return (
    <div>
        <GoalForm onAdd={addGoal} />
        <ListOfGoals allGoals={allGoals} />
    </div>
  )
}

export default FormUseState