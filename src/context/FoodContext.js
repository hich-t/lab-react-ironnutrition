import { createContext, useState, useEffect } from "react";
import foods from "../foods.json"

export const FoodContext = createContext()

export const FoodController = ({children}) => {

const [food, setFood] = useState([])
const [loaded, setLoaded] = useState(false)
const [search, setSearch] = useState('')


 useEffect( () => {
    setFood(foods)
    setLoaded(true)
 }, [])

return (
    <FoodContext.Provider
      value={{
              value : [food, setFood], 
            value1: [loaded, setLoaded],
            value2: [search, setSearch]
            }}
    >
            {children }
    </FoodContext.Provider>
  );



} 




