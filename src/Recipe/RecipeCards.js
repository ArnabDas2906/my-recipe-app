import React from 'react'
import RecipeIngredients from './RecipeIngredients'
import ReactPlayer from 'react-player'

export default function RecipeCards(recipeData) {
  return (
    <>
    <div style={{margin:"30px"}}>
        <h3 className="text-center" style={{marginTop:"48px"}}>{recipeData.category.strMeal} (   {recipeData.category.strArea} Cuisine )</h3>
        {/* <div className="text-center">
            <a href={recipeData.category.strSource} rel="noopener noreferrer" target="_blank"> BBC Recipe</a>
        </div> */}
        <div className="player-wrapper">
            <ReactPlayer url={recipeData.category.strYoutube} className="react-player"
                controls={false}
                width="100%"
                height="100%" />
        </div>
        <div className="flex-style" style={{justifyContent: "space-evenly"}}>
            <ul className="text-center">
                <h5>Ingredients</h5>
                { recipeData.category.strIngredient1 !== "" && recipeData.category.strMeasure1 ? 
                    <RecipeIngredients ingredient={[recipeData.category.strIngredient1, recipeData.category.strMeasure1]} /> :
                    <div></div>
                }
                { recipeData.category.strIngredient2 !== "" && recipeData.category.strMeasure2 ? 
                    <RecipeIngredients ingredient={[recipeData.category.strIngredient2, recipeData.category.strMeasure2]} /> :
                    <div></div>
                }
                { recipeData.category.strIngredient3 !== "" && recipeData.category.strMeasure3 ? 
                    <RecipeIngredients ingredient={[recipeData.category.strIngredient3, recipeData.category.strMeasure3]} /> :
                    <div></div>
                }

                { recipeData.category.strIngredient4 !== "" && recipeData.category.strMeasure4 ? 
                    <RecipeIngredients ingredient={[recipeData.category.strIngredient4, recipeData.category.strMeasure4]} /> :
                    <div></div>
                }

                { recipeData.category.strIngredient5 !== "" && recipeData.category.strMeasure5 ? 
                    <RecipeIngredients ingredient={[recipeData.category.strIngredient5, recipeData.category.strMeasure5]} /> :
                    <div></div>
                }

                { recipeData.category.strIngredient6 !== "" && recipeData.category.strMeasure6 ? 
                    <RecipeIngredients ingredient={[recipeData.category.strIngredient6, recipeData.category.strMeasure6]} /> :
                    <div></div>
                }

                { recipeData.category.strIngredient7 !== "" && recipeData.category.strMeasure7 ? 
                    <RecipeIngredients ingredient={[recipeData.category.strIngredient7, recipeData.category.strMeasure7]} /> :
                    <div></div>
                }

                { recipeData.category.strIngredient8 !== "" && recipeData.category.strMeasure8 ? 
                    <RecipeIngredients ingredient={[recipeData.category.strIngredient8, recipeData.category.strMeasure8]} /> :
                    <div></div>
                }

                { recipeData.category.strIngredient9 !== "" && recipeData.category.strMeasure9 ? 
                    <RecipeIngredients ingredient={[recipeData.category.strIngredient9, recipeData.category.strMeasure9]} /> :
                    <div></div>
                }

                { recipeData.category.strIngredient10 !== "" && recipeData.category.strMeasure10 ? 
                    <RecipeIngredients ingredient={[recipeData.category.strIngredient10, recipeData.category.strMeasure10]} /> :
                    <div></div>
                }

                { recipeData.category.strIngredient11 !== "" && recipeData.category.strMeasure11 ? 
                    <RecipeIngredients ingredient={[recipeData.category.strIngredient11, recipeData.category.strMeasure11]} /> :
                    <div></div>
                }

                { recipeData.category.strIngredient12 !== "" && recipeData.category.strMeasure12 ? 
                    <RecipeIngredients ingredient={[recipeData.category.strIngredient12, recipeData.category.strMeasure12]} /> :
                    <div></div>
                }

                { recipeData.category.strIngredient13 !== "" && recipeData.category.strMeasure13 ? 
                    <RecipeIngredients ingredient={[recipeData.category.strIngredient13, recipeData.category.strMeasure13]} /> :
                    <div></div>
                }

                { recipeData.category.strIngredient14 !== "" && recipeData.category.strMeasure14 ? 
                    <RecipeIngredients ingredient={[recipeData.category.strIngredient14, recipeData.category.strMeasure14]} /> :
                    <div></div>
                }

                { recipeData.category.strIngredient15 !== "" && recipeData.category.strMeasure15 ? 
                    <RecipeIngredients ingredient={[recipeData.category.strIngredient15, recipeData.category.strMeasure15]} /> :
                    <div></div>
                }

                { recipeData.category.strIngredient16 !== "" && recipeData.category.strMeasure16 ? 
                    <RecipeIngredients ingredient={[recipeData.category.strIngredient16, recipeData.category.strMeasure16]} /> :
                    <div></div>
                }

                { recipeData.category.strIngredient16 !== "" && recipeData.category.strMeasure16 ? 
                    <RecipeIngredients ingredient={[recipeData.category.strIngredient17, recipeData.category.strMeasure17]} /> :
                    <div></div>
                }

                { recipeData.category.strIngredient18 !== "" && recipeData.category.strMeasure18 ? 
                    <RecipeIngredients ingredient={[recipeData.category.strIngredient18, recipeData.category.strMeasure18]} /> :
                    <div></div>
                }

                { recipeData.category.strIngredient19 !== "" && recipeData.category.strMeasure19 ? 
                    <RecipeIngredients ingredient={[recipeData.category.strIngredient19, recipeData.category.strMeasure19]} /> :
                    <div></div>
                }

                { recipeData.category.strIngredient20 !== "" && recipeData.category.strMeasure20 ? 
                    <RecipeIngredients ingredient={[recipeData.category.strIngredient20, recipeData.category.strMeasure20]} /> :
                    <div></div>
                }    
            </ul> 
            <div>
                <h5>Full Recipe</h5>
                <p className="entire-recipe">{recipeData.category.strInstructions}.<br/> To check the Full Recipe 
                    <a href={recipeData.category.strSource} rel="noopener noreferrer" target="_blank"> Click here</a>
                </p>
            </div> 
        </div>
    </div>
    </>
  )
}
