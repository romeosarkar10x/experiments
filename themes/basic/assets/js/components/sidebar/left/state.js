function saveState() {
    const details = document.querySelectorAll(".sidebar-left details");
}

function generateKey(tag) {
    const link = tag.querySelector("a").getAttribute("href");
    return `sidebar-left-${link}`;
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded!");
    const details = document.querySelectorAll(".sidebar-left details");

    /* restore state */
    details.forEach((tag) => {
        const state = sessionStorage.getItem(generateKey(tag), tag.open);
        if (state != null) {
            tag.open = state === "true";
        }
    });

    /* save states */
    details.forEach((tag) => {
        tag.addEventListener("toggle", function () {
            console.log("toggle");
            sessionStorage.setItem(generateKey(tag), tag.open);
        });
    });
});
