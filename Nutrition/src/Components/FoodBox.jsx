import React,{useState} from 'react'
import '../App.css'

function FoodBox({food}) {

    const [count, setCount] = useState(0);

    const Add = () => {
      setCount(prevCount => prevCount + 1);
    };
  
    const Reset = () => {
      setCount(0);
    };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.img} alt={food.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.cal} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value={count} readOnly />
            </div>
            <div className="control">
              <button className="button is-info" onClick={Add}>+</button>
            </div>
            <div className="control">
              <button className="button" onClick={Reset}>Reset</button>
            </div>
            <div>
              {count > 0 && (
                <p>{count} {food.name} = {count * food.cal} cal</p>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default FoodBox;
