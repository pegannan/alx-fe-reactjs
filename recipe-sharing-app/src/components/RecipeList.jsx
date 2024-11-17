 // RecipeList component
 import { useRecipeStore } from './RecipeList';

 const RecipeList = () => {
   const recipes = useRecipeStore(state => state.recipes);

   return (
     <div>
       {recipes.map(recipe => (
         <div key={recipe.id}>
           <h3>{recipe.title}</h3>
           <p>{recipe.description}</p>
         </div>
       ))}
     </div>
   );
 };

 import filteredRecipe from './recipeStore.jsx'
 return (
  Link from './react-router-dom' to (Home.jsx, About.jsx, Services.jsx, Contact.jsx))
 export default RecipeList;