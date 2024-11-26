import { createContext, useContext, useState } from "react";


const MealsContext = createContext()

const todayMeals = ['Baked Beans', 'Baked Potatoes', 'Salad'];


const MealsProvider = ({children}) => {

    const [meals, setMealsList] = useState(todayMeals);
  return (
    <MealsContext.Provider value={{meals}}>
        {children}
    </MealsContext.Provider>
  )
}

// exporting the useMealsListContext to be used in other components
export const useMealsListContext = () => useContext(MealsContext)

export default MealsProvider



// The useContext is smiliar like the useState but is more advance 
// and you normally use it to send data or props between children components. You do so by using it as a wrapper around the children compoent