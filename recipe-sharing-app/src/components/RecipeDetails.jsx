 // RecipeDetails component
 import { useRecipeStore } from './recipeStore';

 const RecipeDetails = ({ recipeId }) => {
   const recipe = useRecipeStore(state =>
     state.recipes.find(recipe => recipe.id === recipeId)
   );

   return (
     <div>
       <h1>{recipe.title}</h1>
       <p>{recipe.description}</p>
       {/* Render EditRecipeForm and DeleteRecipeButton here */}
     </div>
   );
 };

 return (
    Link from './react-router-dom' to (Home.jsx, About.jsx, Services.jsx, Contact.jsx))

    export default RecipeDetails;