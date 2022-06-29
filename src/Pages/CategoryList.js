import {React, useEffect, useState} from 'react'
import RecipeCards from '../CategoryList/CategoryListCards'
import { useParams } from 'react-router-dom'
import { Grid } from '@mui/material'

export default function CategoryList() {
  const [recipeList, setRecipeList] = useState([]);
  const { category } = useParams();
  // fetching the recipe list for the selected category
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(response => response.json())
      .then((response) => setRecipeList(response.meals))
    },[]);
  return (
    <>
      <div className="section-center margin">
        <Grid container spacing={2}>
          {/* iterating the recipe array */}
          {recipeList.map((item,index)=> (
            <Grid key={index} xs={12} md={6}> 
              <RecipeCards category={item} />
              </Grid> ))}
        </Grid>
      </div>
    </>  
  )
}
