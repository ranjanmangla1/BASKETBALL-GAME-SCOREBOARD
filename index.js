let homeCount = 0;
let homeText = document.getElementById("home-text");
let guestCount = 0;
let guestText = document.getElementById("guest-text");

function add1PointHome() {
    homeCount++;
    homeText.textContent = homeCount;
}

function add2PointHome() {
    homeCount += 2;
    homeText.textContent = homeCount;
}

function add3PointHome() {
    homeCount += 3;
    homeText.textContent = homeCount;
}

function add1PointGuest() {
    guestCount++;
    guestText.textContent = guestCount;
}

function add2PointGuest() {
    guestCount += 2;
    guestText.textContent = guestCount;
}

function add3PointGuest() {
    guestCount += 3;
    guestText.textContent = guestCount;
}

function restart() {
    homeCount = guestCount = 00;
    homeText.textContent = homeCount + "0";
    guestText.textContent = guestCount + "0";
}