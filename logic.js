

var planeImage = document.getElementById("plane-image")

var planePositionClasses = [
    "plane1",
    "plane2",
    "plane3",
    "plane4",
    "plane5"
]

var i = 0;
var goingLeft = false;
setInterval(() => {
    planeImage.classList = []
    planeImage.classList.add(planePositionClasses[i])
    if (goingLeft){
        i--
    } else {
        i++;
    }
    if (i == planePositionClasses.length - 1){
        goingLeft = true;
    } else if(i == 0){
        goingLeft = false;
    }
}, 1000);