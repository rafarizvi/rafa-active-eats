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
                addFavoriteWorkout(result)
                searchWorkout(result)
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

//When clicking on the search bar, the user will get the data appended to the page
//the variable RUNNING is just for testing purposes. It will be replaced with the TEXT
//the user enters into the search field.

function exercises(workoutData) {
    let running = workoutData[0].calories_per_hour;
    if (running) {
        const workoutChoice = running;
        const workoutChoiceEl = document.createElement('p');
        workoutChoiceEl.textContent = `${workoutChoice} calories`;
        const workoutChoiceElSection = document.getElementById('workoutName');
        workoutChoiceElSection.innerHTML = '';
        workoutChoiceElSection.appendChild(workoutChoiceEl);
    }
    console.log(running);
}


document.getElementById("workoutFavBtn").addEventListener("click", function () {
        let workoutElement = document.getElementById('workoutName');
        let workoutText = workoutElement.textContent;
        localStorage.setItem('storedWorkout', workoutText);
    })

let workoutInput = document.createElement("input")

function addFavoriteWorkout(workoutData) {
    document.getElementById("viewWorkoutFavBtn").addEventListener("click", function() {
        let calories = workoutData[0].calories_per_hour;
        let workout = workoutData[1].name;
        let lastFave = {
            workout: "You will be running " + workout,
            bruning: calories + " Calories"
        }
        let storedWorkout = localStorage.getItem("allWorkouts");

        if (storedWorkout === null) {
            storedWorkout = [];
        } else {
            storedWorkout = JSON.parse(storedWorkout);
        }

        storedWorkout.push(lastFave);
        let newFav = JSON.stringify(storedWorkout);
        localStorage.setItem("storedWorkout", newFav);
        window.location.replace("favs.html");
    });
    console.log(addFavoriteWorkout)
}


function searchWorkout() {
    const locationTitle = document.getElementById('searchWorkout')
    const location = locationTitle.value;
    if (location.length > 0) {
    }
}