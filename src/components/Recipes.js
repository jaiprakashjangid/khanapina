import React from 'react'
import recipeitem from './RecipesItem';
import RecipeItem from "./RecipesItem"

const Recipes = props =>{
    const {recipes} = props;
    return(
        <div class="row">
            {
                recipes.map(recipe =>(
                    <RecipeItem
                    name={recipe.recipe.label}
                    image={recipe.recipe.image}
                    ingredientLines={recipe.recipe.ingredientLines}
                    />
                ))
            }
        </div>
    );
};

export default Recipes;