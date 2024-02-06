
// recipe search card
const recipeInputEl = document.getElementById('searchRecipe');
const recipeSearchBtn = document.getElementById('recipeBtn');
const dietEl = document.getElementById('diet-option');
const mealEl = document.getElementById('meal-option');

// recipe display card
const displayRecipeDiv = document.querySelector('.displayRecipe');
const recipeTitleEl = document.getElementById('recipeTitle');
const recipeTextEl = document.querySelector('.displayRecipe').children[2];
const imgEl = document.getElementById('recipeImage');
const ulDiv = document.getElementById('UlDiv');

// recipe favorite buttons.
const favsBtnEl = document.getElementById('recipeFavsBtn');
const favsViewBtnEl = document.getElementById('viewRecipeFavsBtn');

// search array parameters.
let searchArr = [false, false, false];

// global variables.
let recipeUri;

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

    selectRecipe(searchArr[0], searchArr[1], searchArr[2]);   
}

// searches for recipe based on calorie input and optional diet type & meal type.
// the included random parameter is used in the api's url, which randomizes the response.
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
        searchRecipe(useUrl);
    // if diet, meal, and calorie is entered.
    } else {
        let useUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=1dd9ebcd&app_key=28e8360ca293fa5f78e0ef9ab5dbd9d0&diet=${dietType}&mealType=${mealType}&calories=${calories}&imageSize=SMALL&imageSize=REGULAR&imageSize=LARGE&random=true`;
        searchRecipe(useUrl);
    }    
}

// provides url based on the above if statement to the fetch function.
function searchRecipe(recipeUrl) {
    fetch(recipeUrl)
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                // console.log(data);
                console.log('recipe api works');
                console.log(data); 
                let recipeData = data;  
                displayInfo(recipeData);  
            })
        } else {
            location.href = "./404.html"
        }
    })
}

// displays data from API on the page
function displayInfo(api) {

    // removes previousely appended elements.
    ulDiv.innerHTML = '';

    // get required data from api.
    let recipeName = api.hits[0].recipe.label;
    let imgElSrc = api.hits[0].recipe.image;
    let apiCalories = api.hits[0].recipe.calories;
    let apiServing = api.hits[0].recipe.yield;
    let getRecipe = api.hits[0].recipe.url;
    
    // add content to existing page elements.
    recipeTitleEl.textContent = recipeName;
    imgEl.src = imgElSrc;

    // create new elements.
    const dataUl = document.createElement('ul')
    const calorieList = document.createElement('li');
    const totServingList = document.createElement('li');
    const CalperServingList = document.createElement('li');
    const extUrl = document.createElement('li');
    const aref = document.createElement('a');

    // add values to new elements.
    calorieList.textContent= `Total Calories: ${Math.round(apiCalories)}`;
    totServingList.textContent = `Servings: ${Math.round(apiServing)}`;
    CalperServingList.textContent = `Calories per serving: ${Math.round((apiCalories/apiServing))}`;
    aref.href = getRecipe;
    aref.innerHTML = 'Instructions'

    // append elements to page.
    extUrl.appendChild(aref);
    dataUl.appendChild(calorieList);
    dataUl.appendChild(totServingList);
    dataUl.appendChild(CalperServingList);
    dataUl.appendChild(extUrl);

    // appending diet lable requires a for loop due to having multiple values in an array.
    let dietLabelArr = api.hits[0].recipe.dietLabels;

    if (dietLabelArr.length !== 0) {
        for (let i = 0; i < dietLabelArr.length; i++) {
            let dietLabel =  document.createElement('li');
            dietLabel.textContent = dietLabelArr[i]
            dataUl.appendChild(dietLabel);
        }
    }

    ulDiv.appendChild(dataUl);

    // updates the global variable, which is used in the add favorites function.
    saveRecipe = api.hits[0].recipe;
}

// function to add favorites.
function addFav() {
    
    let storedRecipes = JSON.parse(localStorage.getItem('savedItems'));
    let storeRecipesArr;
    
    if (storedRecipes !== null) {
        storeRecipesArr = storedRecipes;
    } else {
        storeRecipesArr = [];
    }

    // added to favorite message. Only runs if a value is stored in saveRecipe variable.
    if (saveRecipe !== undefined) {
        const favMsg = document.getElementById('fav-msg');
        favMsg.classList.toggle('hidden');
    }

    // adds to favorite.
    storeRecipesArr.push(saveRecipe);
    localStorage.setItem('savedItems', JSON.stringify(storeRecipesArr));
    console.log(storeRecipesArr);
}

// search button event listener.
recipeSearchBtn.addEventListener('click', inputValues);

favsBtnEl.addEventListener('click', addFav);

favsViewBtnEl.addEventListener('click', function() {

    location.href = './Favs.html';

});

