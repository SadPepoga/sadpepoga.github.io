img = document.getElementById("zoom");
let a = 0;
function zoom() {
    if (a == 0) {
        img.style.transform = "scale(2.0)";
        img.style.transition = "transform 0.40s ease";
        a = 1;
    } else {
        img.style.transform = "scale(1)";
        img.style.transition = "transform 0.40s ease";
        a = 0;
    }
}

img1 = document.getElementById("zoom1");
let b = 0;
function zoom1() {
    if (b == 0) {
        img1.style.transform = "scale(2.0)";
        img1.style.transition = "transform 0.40s ease";
        b = 1;
    } else {
        img1.style.transform = "scale(1)";
        img1.style.transition = "transform 0.40s ease";
        b = 0;
    }
}

img2 = document.getElementById("zoom2");
let c = 0;
function zoom2() {
    if (c == 0) {
        img2.style.transform = "scale(2.0)";
        img2.style.transition = "transform 0.40s ease";
        c = 1;
    } else {
        img2.style.transform = "scale(1)";
        img2.style.transition = "transform 0.40s ease";
        c = 0;
    }
}