 // RecipeDetails component
 import { useRecipeStore } from './recipeStore';

 const RecipeDetails = ({ recipeId }) => {
   const recipe = useRecipeStore(state =>
     state.recipes.find(recipe => recipe.id === recipeId)
   );

"form", "event.preventDefault", "button"

   return (
     <div>
       <h1>{recipe.title}</h1>
       <p>{recipe.description}</p>
       {/* Render EditRecipeForm and DeleteRecipeButton here */}
     </div>
   );
 };
