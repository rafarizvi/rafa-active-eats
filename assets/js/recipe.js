
// recipe search card
const recipeInputEl = document.getElementById('searchRecipe');
const recipeSearchBtn = document.getElementById('recipeBtn');

// recipe display card
const recipeTitleEl = document.querySelector('.displayRecipe').children[0];
const recipeTextEl = document.querySelector('.displayRecipe').children[1];

// recipe favorite buttons.
const favsBtnEl = document.getElementById('recipeFavsBtn');
const favsViewBtnEl = document.getElementById('viewRecipeFavsBtn');

// gets user input for calories.

function inputValues() {
    let calorieVal = recipeInputEl.value;
    console.log(calorieVal);
}


// searches for recipe base on calorie input and optional diet type & meal type.
function selectRecipe(dietType, mealType, calories) {
        
    if (diet && !meal) {
        let useUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=1dd9ebcd&app_key=28e8360ca293fa5f78e0ef9ab5dbd9d0&diet=${dietType}&calories=${calories}&imageSize=SMALL&imageSize=REGULAR&imageSize=LARGE&random=true`;
        searchRecipe(useUrl);
    } else if (!diet && meal) {
        let useUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=1dd9ebcd&app_key=28e8360ca293fa5f78e0ef9ab5dbd9d0&mealType=${mealType}&calories=${calories}&imageSize=SMALL&imageSize=REGULAR&imageSize=LARGE&random=true`;
        searchRecipe(useUrl);
    } else {
        let useUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=1dd9ebcd&app_key=28e8360ca293fa5f78e0ef9ab5dbd9d0&diet=${dietType}&mealType=${mealType}&calories=${calories}&imageSize=SMALL&imageSize=REGULAR&imageSize=LARGE&random=true`;
        searchRecipe(useUrl);
    }
    
    // const recipeUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=1dd9ebcd&app_key=28e8360ca293fa5f78e0ef9ab5dbd9d0&diet=${dietType}&mealType=${mealType}&calories=${calories}&imageSize=SMALL&imageSize=REGULAR&imageSize=LARGE&random=true`;
}

function searchRecipe(recipeUrl) {
    
    fetch(recipeUrl)
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                // console.log(data);
                console.log('recipe2 api works');
                console.log(data);
                
                
            })
        } else {
            alert(`Error: ${response.statusText}`);
        }
    })
}


let diet = '';
let meal = 'dinner';
let calories = '300';

selectRecipe(diet, meal, calories);

