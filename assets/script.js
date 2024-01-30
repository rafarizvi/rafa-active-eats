// Exercises API k163haKKqYGpamQeCQMW4A==hVWwjQzS9u8h36xK //tamer 



function exercises() {
    var activity = 'walking'
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