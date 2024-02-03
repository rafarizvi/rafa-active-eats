//created variables for URL and key


document.getElementById("workoutBtn").addEventListener("click", function () {
let searchedWorkout = "running"
let workoutUrl = `https://api.api-ninjas.com/v1/caloriesburned?activity=${searchedWorkout}`
let workoutApi = "k163haKKqYGpamQeCQMW4A==hVWwjQzS9u8h36xK"

    function getExercises() {
        // let workoutNow = "running"
        $.ajax({
            method: 'GET',
            url: workoutUrl,
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
    let activity = workoutData[0].calories_per_hour;
    if (activity) {
        const workoutChoice = activity;
        const workoutChoiceEl = document.createElement('p');
        workoutChoiceEl.textContent = `${workoutChoice} calories`;
        const workoutChoiceElSection = document.getElementById('workoutName');
        workoutChoiceElSection.innerHTML = '';
        workoutChoiceElSection.appendChild(workoutChoiceEl);
    }
    console.log(activity);
}


document.getElementById("workoutFavBtn").addEventListener("click", function () {
        let workoutElement = document.getElementById('workoutName');
        let workoutText = workoutElement.textContent;
        localStorage.setItem('storedWorkout', workoutText);
    })

    document.getElementById("viewWorkoutFavBtn").addEventListener("click", function() {
        window.location.replace("favs.html");
})


function addFavoriteWorkout(workoutData) {
    document.getElementById("viewWorkoutFavBtn").addEventListener("click", function() {
        let calories = workoutData[0].total_calories;
        let workout = workoutData[0].name;
        let workoutDuration = workoutData[0].duration_minutes;
        let lastFave = {
            workout: "You will be " + workout,
            workoutDuration: " for " + workoutDuration + " minutes",
            bruning: ", burning a total of " + calories + " Calories."
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
    const resultsTitle = document.getElementById('searchWorkout')
    const result = resultsTitle.value;
    if (location.length > 0) {
        getExercises(result)

}
console.log(resultsTitle)
}
