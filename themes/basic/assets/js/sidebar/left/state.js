const scrollTopKey = "sl-st";

function generateKey(tag) {
    const link = tag.querySelector("a").getAttribute("href");
    return `sl-${link}`;
}

document.addEventListener("DOMContentLoaded", function () {
    const details = document.querySelectorAll("div.sidebar-left details");
    const sidebarLeft = document.querySelector("div.sidebar-left");

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
