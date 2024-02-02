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