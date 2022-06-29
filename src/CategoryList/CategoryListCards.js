import React from 'react'
import { Link } from 'react-router-dom';

export default function Card(meal) {
  return (
    <>
      <article className="category-article">
        <h5 className="header category-name">{meal.category.strMeal}</h5>
        <img src={meal.category.strMealThumb} alt="" className="photo category-pic" />        
        <Link to={`/recipeDetails/${meal.category.idMeal}`} className="btn btn-primary button" style={{display: "block"}}>View Recipe</Link>
      </article>
    </>
  )
}
