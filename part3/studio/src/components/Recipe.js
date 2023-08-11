const RecipeAuthor = () => {
   let authorLink = "";
   let authorPhoto = "https://hips.hearstapps.com/rover/profile_photos/743afec2-8cb0-4247-8722-05b4d891fe7a_1576786937.file?fill=1:1&resize=200:*";
   let authorName = "MAKINZE GORE";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["crust","unsalted butter","granulated sugar"," graham crackers","Cooking spray"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Best Classic Cheesecake</h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://hips.hearstapps.com/hmg-prod/images/classic-cheesecake-lead-642c57b870999.jpg?crop=1xw:0.9996297667530544xh;center,top&resize=980:*" alt="Cheese Cake" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}