// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useContext, useState, useEffect} from "react"
import {FoodContext} from "../context/FoodContext"


// Iteration 5
const Search = () => {
    const {value, value2} = useContext(FoodContext)
    const [search, setSearch] = value2
    const [food, setFood] = value


useEffect(()=> { 

    const result = food.filter( (e,i) => { return e.name.toLowerCase().includes(search.toLowerCase())} )
    setFood(result)

},[search])

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={undefined} type="text" onChange={(e) => setSearch(e.target.value)} />
    </>
  );
}

export default Search;
