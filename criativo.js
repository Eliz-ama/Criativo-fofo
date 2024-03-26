document.addEventListener("DOMContentLoaded", function() {
    var deniedBtn = document.getElementById("deniedBtn");
    deniedBtn.addEventListener("mouseover", function() {
        var x = Math.random() * (window.innerWidth - 120);
        var y = Math.random() * (window.innerHeight - 40);
        deniedBtn.style.position = "absolute";
        deniedBtn.style.left = x + "px";
        deniedBtn.style.top = y + "px";
    });

    var acceptedBtn = document.getElementById("acceptedBtn");
    acceptedBtn.addEventListener("click", function() {
        alert("Te amo my lady");
    });
});
