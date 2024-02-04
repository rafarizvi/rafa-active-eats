
// recipe search card
const recipeInputEl = document.getElementById('searchRecipe');
const recipeSearchBtn = document.getElementById('recipeBtn');
const dietEl = document.getElementById('diet-option');
const mealEl = document.getElementById('meal-option');

// recipe display card
const recipeTitleEl = document.querySelector('.displayRecipe').children[0];
const recipeTextEl = document.querySelector('.displayRecipe').children[1];

// recipe favorite buttons.
const favsBtnEl = document.getElementById('recipeFavsBtn');
const favsViewBtnEl = document.getElementById('viewRecipeFavsBtn');

// search array parameters.
let searchArr = [false, false, false];

// gets user unput for diet type.
dietEl.addEventListener('change', function(e) {
    let chosenDiet = e.target.value;
    searchArr.splice(0, 1, chosenDiet);
});

// gets user unput for meal type.
mealEl.addEventListener('change', function(e) {
    let chosenMeal = e.target.value;
    searchArr.splice(1, 1, chosenMeal);
});

// gets user input for calories.
function inputValues() {
    let calorieVal = recipeInputEl.value;
    searchArr.splice(2, 1, calorieVal);

    //selectRecipe(searchArr[0], searchArr[1], searchArr[2]);
    
}

// searches for recipe base on calorie input and optional diet type & meal type.
function selectRecipe(dietType, mealType, calories) {    

    // if only diet is selected and calorie is entered.
    if ((searchArr[0] && !searchArr[1]) || (searchArr[0] !== '' && searchArr[1] === '')) {
        let useUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=1dd9ebcd&app_key=28e8360ca293fa5f78e0ef9ab5dbd9d0&diet=${dietType}&calories=${calories}&imageSize=SMALL&imageSize=REGULAR&imageSize=LARGE&random=true`;
        searchRecipe(useUrl);
    // if only meal is selected and calorie is entered.
    } else if ((!searchArr[0] && searchArr[1]) || (searchArr[0] === '' && searchArr[1] !== '')) {
        let useUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=1dd9ebcd&app_key=28e8360ca293fa5f78e0ef9ab5dbd9d0&mealType=${mealType}&calories=${calories}&imageSize=SMALL&imageSize=REGULAR&imageSize=LARGE&random=true`;
        searchRecipe(useUrl);
    // if only calorie is entered.
    } else if (!(searchArr[0] && searchArr[1]) || (searchArr[0] === '' && searchArr[1] === '')) {
        let useUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=1dd9ebcd&app_key=28e8360ca293fa5f78e0ef9ab5dbd9d0&calories=${calories}&imageSize=SMALL&imageSize=REGULAR&imageSize=LARGE&random=true`;
    // if diet, meal, and calorie is entered.
    } else {
        let useUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=1dd9ebcd&app_key=28e8360ca293fa5f78e0ef9ab5dbd9d0&diet=${dietType}&mealType=${mealType}&calories=${calories}&imageSize=SMALL&imageSize=REGULAR&imageSize=LARGE&random=true`;
        searchRecipe(useUrl);
    }    
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



//selectRecipe(diet, meal, calories);

// search button event listener.
recipeSearchBtn.addEventListener('click', inputValues);


