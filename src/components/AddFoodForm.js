// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useContext, useState} from "react"
import {FoodContext} from "../context/FoodContext"

// Iteration 4
const AddFoodForm = () => {

    const {value, value1} = useContext(FoodContext)
    const [food, setFood] = value
    const [loaded, setLoaded] = value1

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setFood(  [...food, {name : name, image : image, calories : calories, servings : servings}]   )
    }


  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={undefined} type="text" onChange={(e) => setName(e.target.value)} />

      <label>Image</label>
      <Input value={undefined} type="text" onChange={(e) => setImage(e.target.value)} />

      {/* render antd <Input /> type="text" here */}

      <label>Calories</label>
      <Input value={undefined} type="text" onChange={(e) => setCalories(e.target.value)} />

      {/* render antd <Input /> type="number" here */}

      <label>Servings</label>
      <Input value={undefined} type="text" onChange={(e) => setServings(e.target.value)} />

      {/* render antd <Input /> type="number" here */}

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
