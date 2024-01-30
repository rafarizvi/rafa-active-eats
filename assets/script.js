function searchRecipe(calorie) {
    

    const calorieUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=1dd9ebcd&app_key=28e8360ca293fa5f78e0ef9ab5dbd9d0&calories=${calorie}`;

    fetch(calorieUrl) 
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
             // console.log(data);
              console.log('works');
              console.log(data);

            })
        } else {
            alert(`Error: ${response.statusText}`); 
        }
    })
}

function exercises() {

    var activity = 'skiing'
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/caloriesburned?activity=' + activity,
        headers: { 'X-Api-Key': 'k163haKKqYGpamQeCQMW4A==hVWwjQzS9u8h36xK'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}


// function takes in calorie amount.
exercises();
searchRecipe(500);

