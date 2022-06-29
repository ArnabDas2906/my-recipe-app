import React from 'react'
import { Link } from 'react-router-dom';

export default function CategoryCard(category) {
  return (
    <>
      <article className="menu-item">
        <header>
          <h4 className="header">{category.category.strCategory}</h4>
         </header>
         <div className="flex-style">
          <img src={category.category.strCategoryThumb} alt="" className="photo" />
          <p className="item-text">{category.category.strCategoryDescription}</p>
        </div>
        <Link to={`/categoryList/${category.category.strCategory}`} className="btn btn-primary button" style={{display: "block"}}>View Related Recipes</Link>
      </article>
    </>
  )
}
