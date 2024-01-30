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

//! currently not working
function exercises(workoutData) {
    const {calories_per_hour} = workoutData
    if (workoutData) {
        //created element for the date
        const calories = calories_per_hour
        const caloriesTitle = document.createElement('p')
        caloriesTitle.textContent = `${calories}`
        const caloriesSection = document.getElementById('workoutName')
        caloriesSection.innerHTML = ''
        caloriesSection.appendChild(caloriesTitle)
    }
}

document.getElementById('workoutBtn').addEventListener('click', exercises())