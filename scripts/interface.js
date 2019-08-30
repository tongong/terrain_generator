var refreshTime = 0;

function initIconAnimation() {
    var reload = document.getElementById("reloadIcon");
    var settings = document.getElementById("settingsIcon");

    reload.addEventListener("mouseenter", function() {
        this.classList.add("animated");
    }, false);
    reload.addEventListener("animationend", function() {
        this.classList.remove("animated");
    }, false);
    reload.addEventListener("click", function() {
        refreshTime = millis();
    }, false);
    reload.addEventListener('touchstart', function() {
        this.classList.add("animated");
    }, false);

    settings.addEventListener("mouseenter", function() {
        this.classList.add("animated");
    }, false);
    settings.addEventListener("animationend", function() {
        this.classList.remove("animated");
    }, false);
    settings.addEventListener("click", function() {
        var settings = document.getElementById("settings");
        if (settings.classList.contains("in")) {
            settings.classList.remove("in");
        } else {
            settings.classList.add("in");
        }
    }, false);
    settings.addEventListener('touchstart', function() {
        this.classList.add("animated");
    }, false);
}