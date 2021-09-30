import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./FoodDetails.css";

const FoodDetails = () => {
    const { foodId } = useParams();

    const [food, setFood] = useState({});
    useEffect(
        () => {
            const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
            fetch(url).then(r => r.json()).then(d => setFood(d.meals[0]));
        }, [foodId])


    const ingredients = {};
    for (let i = 1; i <= 20; i++) {
        const ingredient = food['strIngredient' + i];
        const measure = food['strMeasure' + i];
        if (!ingredient) { continue }
        else if (!ingredients[ingredient]) {
            ingredients[ingredient] = measure;
        }
    }
    return (
        <div id='food'>
            <h4 id="breadCrumb"><span>/ foods / {foodId}</span></h4>
            <div id="foodImg">
                <div><img src={food.strMealThumb} alt="" /></div>
            </div>
            <h1 id="foodName"><span>{food.strMeal}</span></h1>
            <h3 id="foodCategory"><span>{food.strCategory}</span></h3>
            <div id="ingredients">
                <details>
                    <summary>Ingredients</summary>
                    <ul>
                        {
                            Object.keys(ingredients).map(ingredient => <li
                                key={Object.keys(ingredients).indexOf(ingredient)}>
                                {ingredient} ({ingredients[ingredient]})</li>)
                        }
                    </ul>
                </details>
            </div>
        </div>
    );
};

export default FoodDetails;