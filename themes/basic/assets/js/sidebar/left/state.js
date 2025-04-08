const scrollTopKey = "sl-st";

function generateKey(tag) {
    const link = tag.querySelector("a").getAttribute("href");
    return `sl-${link}`;
}

document.addEventListener("DOMContentLoaded", function () {
    const details = document.querySelectorAll("aside.sidebar-left details");
    const sidebarLeft = document.querySelector("aside.sidebar-left");

    (function restoreState() {
        details.forEach((tag) => {
            const state = sessionStorage.getItem(generateKey(tag), tag.open);

            if (state != null) {
                tag.open = state === "true";
            }
        });

        const scrollTop = sessionStorage.getItem(scrollTopKey);

        if (scrollTop != null) {
            sidebarLeft.scrollTop = parseFloat(scrollTop);
        }
    })();

    (function setAnimationDelay() {
        sidebarLeft.classList.add("initialized");
    })();

    (function saveStates() {
        details.forEach((tag) => {
            tag.addEventListener("toggle", function () {
                sessionStorage.setItem(generateKey(tag), tag.open);
            });
        });

        window.addEventListener("beforeunload", function () {
            sessionStorage.setItem(scrollTopKey, sidebarLeft.scrollTop);
        });
    })();
});
