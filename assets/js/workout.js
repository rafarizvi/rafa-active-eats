
//when the user clicks on the search button, the API will generate data and search for the activity they
//entered into the text/search field

document.getElementById("workoutBtn").addEventListener("click", function () {
    let searchedWorkout = document.getElementById("searchWorkout").value;
    getExercises(searchedWorkout);
    console.log("button click to pull API working");
});

let workoutEl = document.getElementById("workout-option")
let favEl = document.getElementById("addedFavBtn")
workoutEl.addEventListener("change", function (e) {
    let choseWorkout = e.target.value
    getExercises(choseWorkout)
    favEl.textContent = ""
})


function getExercises(searchedWorkout) {
    //the API and the key. Used searchedWorkout as a variable to complete the URL with the user seached activity
    let workoutUrl = `https://api.api-ninjas.com/v1/caloriesburned?activity=${searchedWorkout}`
    let workoutApi = "k163haKKqYGpamQeCQMW4A==hVWwjQzS9u8h36xK"
    //grabbing data from the API's data
    $.ajax({
        method: 'GET',
        url: workoutUrl,
        headers: { 'X-Api-Key': workoutApi },
        contentType: 'application/json',
        success: function (result) {
            console.log(result);
            exercises(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

//variables for the three main keys the user will get generated- the workout, the time and the calories it burns from the API
function exercises(workoutData) {
    let workout;
    let workoutDuration;
    let calories;

    //user will get a generated workout at random when searching for a workout
    function randomWorkout(max) {
        return Math.floor(Math.random() * max)
    }
    let length = randomWorkout(workoutData.length)

    // these variables are defined by the API data
    if (workoutData[length]) {
        workout = workoutData[length].name
        workoutDuration = workoutData[length].duration_minutes;
        calories = workoutData[length].calories_per_hour;


        //the activity will append on the page after the user searches for it and will included text to make the sentence more complete and concise.
        let activity = [
            "This workout will include " + workout,
            " for " + workoutDuration + " minutes",
            " which will burn " + calories + " total calories."
        ];
        //The activity, time and calories will append from this if statement and append to the page for the user to see
        if (activity) {
            const workoutChoice = activity;
            const workoutChoiceEl = document.createElement('p');
            workoutChoiceEl.textContent = `${workoutChoice}`;
            const workoutChoiceElSection = document.getElementById('workoutName');
            workoutChoiceElSection.innerHTML = '';
            workoutChoiceElSection.appendChild(workoutChoiceEl);
            console.log(activity);
        }
    }
    //when the user clicks on the workoutFav butto, the users generated workout will go to local storage
    //and append to their favorites page. The workout they saved will stay there until they decide to clear it
    document.getElementById("workoutFavBtn").addEventListener("click", function () {
        let workoutElement = document.getElementById('workoutName');
        let workoutText = workoutElement.textContent;
        workoutElement.textContent = workoutText
        localStorage.setItem('allWorkouts', workoutText);

        favEl.textContent = ""
    })

    document.getElementById("workoutFavBtn").addEventListener("click", function () {
        let favElement = document.getElementById('addedFavBtn');
        let favText = favElement.textContent;
        favElement.textContent = favText + " You have favorited this workout.";
    })

    //When the user saves/favorites the workout, it will go to their favorites page along with the following text for a cleaner look and complete sentence.
    document.getElementById("viewWorkoutFavBtn").addEventListener("click", function () {
        if (workout) {
            let lastFave = {
                workout: workout,
                workoutDuration: " for " + workoutDuration + " minutes",
                bruning: ", burning a total of " + calories + " calories."
            };
            //The user will have their activity with the API be pushed to the local storage.
            let storedWorkout = localStorage.getItem("storedWorkout") || "[]";
            storedWorkout = JSON.parse(storedWorkout);
            //the data from the local storage will also take the users last favorited activity and move it to the favorites HTML page and the page will also change to at the same time
            storedWorkout.push(lastFave);
            let newFav = JSON.stringify(storedWorkout);
            localStorage.setItem("storedWorkout", newFav);
            window.location.replace("favs.html");
        }
    });
}

//the button will allow the user to go their favorites page at any point when on the main page.
document.getElementById("viewWorkoutFavBtn").addEventListener("click", function () {
    window.location.replace("favs.html")
})

// when user types an acitivity in the workout search field it will look for activity in the API
document.getElementById("searchWorkout").addEventListener("input", function () {
});


