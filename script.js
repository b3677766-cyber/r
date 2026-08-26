const button = document.getElementById("openButton");
const rakhi = document.getElementById("rakhi");
const ghewar = document.getElementById("ghewar");

button.onclick = function() {
    document.getElementById("heading").style.display = "none";
    button.style.display = "none";
    rakhi.style.display = "block";
    ghewar.style.display = "block";
};
const dogGlow = document.getElementById("dogGlow");
const nextButton = document.getElementById("nextButton");

rakhi.addEventListener("click", function() {

    // Show golden glow
    dogGlow.style.display = "block";
    nextButton.style.visibility = "visible";

    // Don't create the sparkles twice
    if (document.querySelector(".sparkle")) {
        return;
    }

    const symbols = ["✦", "✧", "⋆", "✦", "✧"];

    for (let i = 0; i < 24; i++) {

        const sparkle = document.createElement("span");

        sparkle.classList.add("sparkle");

        // Some sparkles will be white
        if (Math.random() > 0.5) {
            sparkle.classList.add("white");
        }

        sparkle.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        // Random size
        sparkle.style.fontSize =
            (10 + Math.random() * 20) + "px";

        // Random position around centre/dog face
        const angle = Math.random() * Math.PI * 2;
        const distance = 75 + Math.random() * 100;

        const rakhiBox = rakhi.getBoundingClientRect();

const centerX = rakhiBox.left + rakhiBox.width / 2;
const centerY = rakhiBox.top + rakhiBox.height / 2;

const x =
    centerX +
    Math.cos(angle) * distance;

const y =
    centerY +
    Math.sin(angle) * distance;
        sparkle.style.left = x + "px";
        sparkle.style.top = y + "px";

        // Makes them twinkle at different times
        sparkle.style.animationDelay =
            (Math.random() * 1.2) + "s";

        document.body.appendChild(sparkle);
    }
});
const messageScreen = document.getElementById("messageScreen");

nextButton.addEventListener("click", function() {
    rakhi.style.display = "none";
    ghewar.style.display = "none";
    dogGlow.style.display = "none";
    nextButton.style.display = "none";

    document.querySelectorAll(".sparkle").forEach(function(sparkle) {
        sparkle.style.display = "none";
    });

    messageScreen.style.display = "flex";
});
const paraNextButton = document.getElementById("paraNextButton");
const messageScreen2 = document.getElementById("messageScreen2");

paraNextButton.addEventListener("click", function() {
    messageScreen.style.display = "none";
    messageScreen2.style.display = "flex";
});
const paraNextButton2 = document.getElementById("paraNextButton2");
const messageScreen3 = document.getElementById("messageScreen3");

paraNextButton2.addEventListener("click", function() {
    messageScreen2.style.display = "none";
    messageScreen3.style.display = "flex";
});
const couponNextButton = document.getElementById("couponNextButton");
const couponScreen = document.getElementById("couponScreen");

couponNextButton.addEventListener("click", function() {
    messageScreen3.style.display = "none";
    couponScreen.style.display = "flex";
});
const redeemButton = document.getElementById("redeemButton");
const redeemedStamp = document.getElementById("redeemedStamp");

redeemButton.addEventListener("click", function() {

    redeemButton.style.display = "none";

    redeemedStamp.style.display = "block";

});