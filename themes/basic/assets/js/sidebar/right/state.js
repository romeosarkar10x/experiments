function generateKey() {
    return `sr-st-${window.location.pathname}`;
}

document.addEventListener("DOMContentLoaded", function () {
    const sidebarRight = document.querySelector("div.sidebar-right");

    (function restoreState() {
        const scrollTop = sessionStorage.getItem(generateKey());

        if (scrollTop != null) {
            sidebarRight.scrollTop = parseFloat(scrollTop);
        }
    })();

    (function saveState() {
        window.addEventListener("beforeunload", function () {
            sessionStorage.setItem(generateKey(), sidebarRight.scrollTop);
        });
    })();
});
