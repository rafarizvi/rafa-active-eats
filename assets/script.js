<<<<<<< HEAD
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
=======
// Exercises API k163haKKqYGpamQeCQMW4A==hVWwjQzS9u8h36xK //tamer 



function exercises() {
    var activity = 'walking'
>>>>>>> ca44c4b5e32da1445d1e51ee936d852d2b7404ec
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

<<<<<<< HEAD
<<<<<<< HEAD

// function takes in calorie amount.
exercises();
searchRecipe(500);

=======
let activity = "Walking" //retype the workout activity type and will change via output
=======
let activity = "running"
>>>>>>> fe6c379bbe45d0ffacad4446609f22fa78471af1

function workout(workoutData) {
    const {name, calories_per_hour} = workoutData;
  
    if (workoutData) {
      const nameTitle = document.createElement('h6');
      nameTitle.textContent = `Workout Name: ${activity}, Calories Per Hour: ${calories_per_hour}`
      
      const nameSection = document.getElementById('name')
      nameSection.innerHTML = ''
      nameSection.appendChild(nameTitle);
      console.log(workoutData)
    }
  }
  
  document.getElementById('button').addEventListener('click', function() {
    const sampleWorkoutData = {
      name: 'activity',
      calories_per_hour: 500
    }
    workout(sampleWorkoutData);
  })
  exercises()
>>>>>>> ca44c4b5e32da1445d1e51ee936d852d2b7404ec
