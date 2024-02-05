


const favDisplay = document.querySelector('.displayFav');
const recipeSection = document.getElementById('recipe-section-id');

let storedFavRecipes = JSON.parse(localStorage.getItem('savedItems'));

// function below displays recipe from local storage.
function displayFavs(fav) {
    // function runs only if local storage contains value(s).
    if (fav !== null) {

        // removed border-top on favs page.
        recipeSection.classList.remove('recipe-section');
        
        for (let i = 0; i < fav.length; i++){
            // get required data from api.
            let favRecipeName = fav[i].label;
            let favImgElSrc = fav[i].image;
            let favCalories = fav[i].calories;
            let favServing = fav[i].yield;
            let getRecipe = fav[i].url;
            
            // create new elements.
            const titleDiv = document.createElement('div');
            const titleEl = document.createElement('h5');
            const imageEl = document.createElement('img');
            const recipeUl = document.createElement('ul');
            const extUrl = document.createElement('li');
            const aref = document.createElement('a');
            
            const favCalorie = document.createElement('li');
            const favTotServing = document.createElement('li');
            const favCalperServing = document.createElement('li');
            
            // add attributes to new elements.
            titleDiv.classList.add('col-12', 'fav-Div');
            imageEl.classList.add('fav-img');
            
            // add values to new elements.
            titleEl.textContent = favRecipeName;
            imageEl.src = favImgElSrc;
            favCalorie.textContent= `Total Calories: ${Math.round(favCalories)}`;
            favTotServing.textContent = `Servings: ${Math.round(favServing)}`;
            favCalperServing.textContent = `Calories per serving: ${Math.round((favCalories/favServing))}`;
            aref.href = getRecipe;
            aref.innerHTML = 'Instructions'
     
        
            // append elements to page.
            extUrl.appendChild(aref);
            titleDiv.appendChild(titleEl);
            favDisplay.appendChild(titleDiv);
    
            favDisplay.appendChild(imageEl);
    
            recipeUl.appendChild(favCalorie);
            recipeUl.appendChild(favTotServing);
            recipeUl.appendChild(favCalperServing);
            recipeUl.appendChild(extUrl);
    
            favDisplay.appendChild(recipeUl);
        
            // appending diet lable requires a for loop due to having multiple values in an array.
            let favDietLabelArr = storedFavRecipes[i].dietLabels;
        
            if (favDietLabelArr.length !== 0) {
                for (let i = 0; i < favDietLabelArr.length; i++) {
                    let favDietLabel =  document.createElement('li');
                    favDietLabel.textContent = favDietLabelArr[i]
                    recipeUl.appendChild(favDietLabel);
                }
            }
    
        }
    }

}

displayFavs(storedFavRecipes);

