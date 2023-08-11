import styles from './Ingredients.module.css';
 const RecipeIngredients = () => {
    let ingredients = ["quinoa","raw sweet corn","marinated tomatoes","limes","avocados"]
    return(
        <div className = {styles.ingredientList}>
      <h3>Recipe Ingredients</h3>
      <ol>
         <li>{ingredients[0]}</li>
         <li>{ingredients[1]}</li>
         <li>{ingredients[2]}</li>
         <li>{ingredients[3]}</li>
         <li>{ingredients[4]}</li>
      </ol>
   </div>
    );
}
export default RecipeIngredients;