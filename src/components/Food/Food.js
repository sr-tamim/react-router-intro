import React from 'react';
import { NavLink } from 'react-router-dom';
import './Food.css';



const Food = (props) => {
    const { food } = props;

    return (
        <NavLink style={{ margin: '30px' }} to={`/foods/${food.idMeal}`}>
            <div className="single-food">
                <div className="food">
                    <img src={food.strMealThumb} alt="" />
                    <h3>{food.strMeal}</h3>
                </div>
            </div>
        </NavLink>
    );
};

export default Food;