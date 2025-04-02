function generateKey(tag) {
    const link = tag.querySelector("a").getAttribute("href");
    return `sidebar-left-${link}`;
}

document.addEventListener("DOMContentLoaded", function () {
    const details = document.querySelectorAll(".sidebar-left details");
    const sidebarLeft = document.querySelector("div.sidebar-left");

    /* restore state */
    details.forEach((tag) => {
        const state = sessionStorage.getItem(generateKey(tag), tag.open);
        if (state != null) {
            tag.open = state === "true";
        }
    });

    const scrollTop = sessionStorage.getItem("sidebar-left-scroll-top");
    if (scrollTop != null) {
        sidebarLeft.scrollTop = parseFloat(scrollTop);
    }

    /* save states */
    details.forEach((tag) => {
        tag.addEventListener("toggle", function () {
            sessionStorage.setItem(generateKey(tag), tag.open);
        });
    });

    window.addEventListener("beforeunload", function () {
        sessionStorage.setItem("sidebar-left-scroll-top", sidebarLeft.scrollTop);
    });
});
