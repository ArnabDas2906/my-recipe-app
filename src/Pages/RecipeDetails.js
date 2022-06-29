import { React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import RecipeCards from '../Recipe/RecipeCards';

export default function RecipeDetails() {
  const [recipeData, setRecipeData] = useState([]);
  const { recipeID } = useParams();

  // fetching the recipe data
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeID}`)
      .then(response => response.json())
      .then((response) => setRecipeData(response.meals))
    },[]);

  return (
    <>
      <div>
        {/* displaythe recipe data, once the data is fetched */}
        {recipeData.length > 0 ? <div><RecipeCards category={recipeData[0]}/> </div> : <div></div> }
      </div>
    </>
  )
}
