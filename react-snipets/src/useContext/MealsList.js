import { useMealsListContext } from "./Providers/MealsProvider"


const MealsList = () => {

    // destructing the meals props from the useMealsListContext
    // which holds an array list of 3 meals
    const { meals } = useMealsListContext()

  return (
    <div>
        <h1>Meals List using Context API</h1>
        {meals.map((meal, index) => {
            <h2 key={index}>{meal}</h2>
        })}
    </div>
  )
}

export default MealsList