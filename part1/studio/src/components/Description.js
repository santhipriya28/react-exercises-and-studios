import styles from './Description.module.css';
import {Component} from 'react';
let shortRecipeDescription ="The perfect summery quinoa salad – fresh corn, buttery avocado, nutty quinoa, juicy marinated tomatoes, and tons of fresh herbs.";
let recipeTitle = "Corn, Avocado, and Quinoa Salad with Marinated Tomatoes"
const RecipeAuthor = () => {
let authorLink = "https://pinchofyum.com/about";
let authorPhoto ="https://pinchofyum.com/wp-content/assets/images/sidebar/sidebar-lindsay.jpg";
let authorName = "Lindsay";
return (
    <div className = {styles.recipeAuthorBlock}>
       <img src={authorPhoto}
        alt = "authorName" 
        className={styles.imageUpdates} />
       <div>
          <h3>{authorName}</h3>
          <a href={authorLink}>Pinch of yum</a> 
       </div>
    </div>
);
};

class RecipeDescription extends Component {
    render() {
    return (
        <div> 
            <div>
                <h1>{recipeTitle}</h1>
                <p>{shortRecipeDescription}</p>
             </div>
            <RecipeAuthor />
        </div>
    );
    }
}
export default RecipeDescription;

