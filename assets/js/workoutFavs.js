let storedWorkout = localStorage.getItem("storedWorkout");
let newFav = document.getElementById("allFavorites");
let clear = document.querySelector("#clear");
let goBack = document.querySelector("#goBack");

clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

goBack.addEventListener("click", function () {
    window.location.replace("index.html");
});

storedWorkout = JSON.parse(storedWorkout);

if (storedWorkout !== null) {

    for (let i = 0; i < storedWorkout.length; i++) {

        let workoutFavSection = document.createElement("li");
        workoutFavSection.textContent = storedWorkout[i].workout + storedWorkout[i].workoutDuration + storedWorkout[i].bruning 
        newFav.appendChild(workoutFavSection)
    }
}

