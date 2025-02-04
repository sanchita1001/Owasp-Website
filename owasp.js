document.getElementById("Events").addEventListener("click", function () {
    document.getElementById("events").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("Our_team").addEventListener("click", function () {
    document.getElementById("team").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("About").addEventListener("click", function () {
 document.getElementsByClassName("aboutus")[0].scrollIntoView({ behavior: "smooth" });
});

function scroll_Animation() {
    if (document.body.scrollTop >100 || document.documentElement.scrollTop > 350) {
        document.getElementsByClassName("event").classname = "slideUp";
    }
}