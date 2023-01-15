// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Card, Col, Button } from 'antd';
import { useContext, useState, useEffect} from "react"
import {FoodContext} from "../context/FoodContext"

// Iteration 2
const  FoodBox = (props) => {

    const {value, value2} = useContext(FoodContext)
    const [food, setFood] = value


    const handleDelete = (index) => {
            setFood((oldState) => {  
                return [...oldState].filter((e) => e.name !== props.name )


             } )
    };


  return (
    <Col>
      <Card key={props.i}
        title={props.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.image} height={60} alt="food" />
        <p>Calories: {props.calories}</p>
        <p>Servings: {props.servings}</p>
        <p>
          <b>Total Calories: {props.calories * props.servings} </b> kcal
        </p>
        <Button type="primary"    onClick={() => handleDelete(props.i)}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
