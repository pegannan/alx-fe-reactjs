
const todoList = () => {
    const favorites = useRecipeStore(state => state.favorites.map(id =>
      state.recipes.find(recipe => recipe.id === id)
    ));
  
    return (
      <div>
        <h2>My Todo List</h2>
        {favorites.map(recipe => (
          <div key={list.id}>
            <h3>{list.title}</h3>
            <p>{list.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default todoList;