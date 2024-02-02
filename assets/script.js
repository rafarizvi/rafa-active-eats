

function exercises() {

    var activity = 'skiing'
=======
// Exercises API k163haKKqYGpamQeCQMW4A==hVWwjQzS9u8h36xK //tamer 
=======
//created variables for URL and key
const workoutUrl = "https://api.api-ninjas.com/v1/caloriesburned?activity="
const workoutApi = "k163haKKqYGpamQeCQMW4A==hVWwjQzS9u8h36xK"


document.getElementById("workoutBtn").addEventListener("click", function () {
    function getExercises() {
        const activity = "running"
        $.ajax({
            method: 'GET',
            url: workoutUrl + activity,
            headers: { 'X-Api-Key': workoutApi },
            contentType: 'application/json',
            success: function (result) {
                console.log(result);
                exercises(result)
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
            
        });
        
    }
    getExercises()
    //to show that when the button is clicked, api is working
    console.log("button click to pull API working")
});


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


=======
let activity = "Walking" //retype the workout activity type and will change via output
=======
let activity = "running"

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

//! currently not working
function exercises(workoutData) {
    let running = workoutData[0].calories_per_hour
    if (running) {
        //created element for the date
        const calories = running
        const caloriesTitle = document.createElement('p')
        caloriesTitle.textContent = `${calories}`
        const caloriesSection = document.getElementById('workoutName')
        caloriesSection.innerHTML = ''
        caloriesSection.appendChild(caloriesTitle)
    }
    console.log(running)
}

document.getElementById('workoutBtn').addEventListener('click', exercises())

//! currently not working
function exercises(workoutData) {
    let running = workoutData[0].calories_per_hour
    if (running) {
        //created element for the date
        const calories = running
        const caloriesTitle = document.createElement('p')
        caloriesTitle.textContent = `${calories}`
        const caloriesSection = document.getElementById('workoutName')
        caloriesSection.innerHTML = ''
        caloriesSection.appendChild(caloriesTitle)
    }
    console.log(running)
}

document.getElementById('workoutBtn').addEventListener('click', exercises())

