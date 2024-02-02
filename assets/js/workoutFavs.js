let allWorkouts = localStorage.getItem("allWorkouts");
let newFav = document.getElementById("allFavorites");
let clear = document.querySelector("#clear");

clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});
allWorkouts = JSON.parse(allWorkouts);

if (allWorkouts !== null) {

    for (let i = 0; i < allWorkouts.length; i++) {

        let workoutFavSection = document.createElement("li");
        //workout and activity current undefinded
        workoutFavSection.textContent = allWorkouts[i].workout + " : " + allWorkouts[i].activity;
        newFav.appendChild(workoutFavSection)

    }
}