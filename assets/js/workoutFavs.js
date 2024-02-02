let storedWorkout = localStorage.getItem("storedWorkout");
let newFav = document.getElementById("allFavorites");
let clear = document.querySelector("#clear");

clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

goBack.addEventListener("click", function () {
    window.location.replace("workout.html");
});
storedWorkout = JSON.parse(storedWorkout);

if (storedWorkout !== null) {

    for (let i = 0; i < storedWorkout.length; i++) {

        let workoutFavSection = document.createElement("li");
        //workout and activity current undefinded
        workoutFavSection.textContent = storedWorkout[i].Workout + " : " + storedWorkout[i].Activity;
        newFav.appendChild(workoutFavSection)

    }
}