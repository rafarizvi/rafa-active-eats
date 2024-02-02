<<<<<<< HEAD
let storedWorkout = localStorage.getItem("storedWorkout");
=======
let allWorkouts = localStorage.getItem("allWorkouts");
>>>>>>> 6a9abbcc8cad7b37608dfe4602a24ef65bd6c78c
let newFav = document.getElementById("allFavorites");
let clear = document.querySelector("#clear");

clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});
<<<<<<< HEAD
storedWorkout = JSON.parse(storedWorkout);

if (storedWorkout !== null) {

    for (let i = 0; i < storedWorkout.length; i++) {

        let workoutFavSection = document.createElement("li");
        //workout and activity current undefinded
        workoutFavSection.textContent = storedWorkout[i].Workout + " : " + storedWorkout[i].Activity;
=======
allWorkouts = JSON.parse(allWorkouts);

if (allWorkouts !== null) {

    for (let i = 0; i < allWorkouts.length; i++) {

        let workoutFavSection = document.createElement("li");
        //workout and activity current undefinded
        workoutFavSection.textContent = allWorkouts[i].workout + " : " + allWorkouts[i].activity;
>>>>>>> 6a9abbcc8cad7b37608dfe4602a24ef65bd6c78c
        newFav.appendChild(workoutFavSection)

    }
}