import React, { useState } from 'react';
import foodData from '../resources/FoodData'
import FoodBox from './Components/FoodBox';
import './App.css';

function App() {
    const [input,setinput]=useState('');
    const[fooddata,setfooddata]=useState(foodData);
    const [filteredFood, setFilteredFood] = useState(foodData);

    const handelChange=(e)=>{
        setinput(e.target.value);
        const filtered = fooddata.filter(food => food.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredFood(filtered);
    }

  return (
    <div>
      <div className='title'>
        <h2>Pro-Nutrition</h2>
        <input type="search" placeholder='Find your food' value={input} onChange={handelChange} className='searchbar'/>
      </div>
      {filteredFood.map(food => (
        <FoodBox key={food.id} food={food} />
      ))}
    </div>
  )
}

export default App;
