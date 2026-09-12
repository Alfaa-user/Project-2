const track = document.querySelector(".farmer-track");
const nextButton = document.querySelector('#nextFarmer');
const prevButton = document.querySelector("#prevFarmer");

let currentFarmer = 0;

function showFarmer() {
    if (currentFarmer == 0) {
        track.style.transform = "translateX(0)";
    } else {
        track.style.transform = "translateX(-50%)";
    }

}

nextButton.addEventListener("click", function () {
    currentFarmer = currentFarmer == 0 ? 1 : 0;
    showFarmer();
});

prevButton.addEventListener("click", function () {
    currentFarmer = currentFarmer == 0 ? 1 : 0;
    showFarmer();
});

setInterval(function () {
    currentFarmer = currentFarmer == 0 ? 1 : 0;
    showFarmer();
}, 5000);
