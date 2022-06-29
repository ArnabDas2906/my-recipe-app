import React from 'react'

export default function RecipeIngredients(ingredient) {
  return (
    <>
      <div>
        <div>{ingredient.ingredient[0]}  :  {ingredient.ingredient[1]}</div>
      </div>
    </>
  )
}
