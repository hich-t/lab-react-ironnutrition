import './App.css';
import foods from './foods.json';
import { FoodContext } from "./context/FoodContext"
import {useContext, useState} from "react"
import FoodBox from "./components/FoodBox"
import AddFoodForm from "./components/AddFoodForm"
import Search from "./components/Search"


function App() {

  const {value, value1} = useContext(FoodContext)
  const [food, setFood] = value
  const [loaded, setLoaded] = value1

  return (
    <div className="App">
    <h1>Food List</h1>
    <AddFoodForm />
    <Search />
    <div className="food">
    { loaded &&food && food.map( (e,i) => {
      return (
      <FoodBox key={e.i} image={e.image} 
                name={e.name}
                servings={e.servings}
                calories={e.calories}
                i={e.i}
      />

     )}) }


        </div>
    </div>
  );
}

export default App;
