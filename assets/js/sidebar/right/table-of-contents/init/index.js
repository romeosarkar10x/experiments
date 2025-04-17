function generateKey(hint = "") {
    return `${window.location.hostname}/table-of-contents:${hint}${window.location.pathname}`;
}

function dfsClosure(callback, id = 0) {
    const root = document.querySelector("aside.sidebar-right > nav#table-of-contents > ul > li");

    (function dfs(node) {
        const nodeId = id++;
        const details = node.querySelector(":scope > details");

        if (details) {
            callback(nodeId, details);
            details.querySelector(":scope > ul").childNodes.forEach((node) => dfs(node));
        }
    })(root);
}

document.addEventListener("DOMContentLoaded", function () {
    const tableOfContents = document.querySelector("aside.sidebar-right > nav#table-of-contents");

    (function restoreState() {
        const statesItem = sessionStorage.getItem(generateKey());

        if (statesItem != null) {
            const states = statesItem.split(",").map((element) => element === "true");
            dfsClosure(function (nodeId, details) {
                details.open = states[nodeId];
            });
        } else {
            const rootDetails = tableOfContents.querySelector(":scope > ul > li > details");

            if (rootDetails != null) {
                rootDetails.open = true;
            }
        }

        const scrollItem = sessionStorage.getItem(generateKey("scroll"));

        if (scrollItem != null) {
            requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                    tableOfContents.classList.add("init");
                    tableOfContents.scrollTop = parseFloat(scrollItem);
                });
            });
        } else {
            requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                    tableOfContents.classList.add("init");
                });
            });
        }
    })();

    (function saveState() {
        window.addEventListener("beforeunload", function () {
            const states = [];
            dfsClosure(function (nodeId, details) {
                states[nodeId] = details.open;
            });
            sessionStorage.setItem(generateKey(), states);
            sessionStorage.setItem(generateKey("scroll"), tableOfContents.scrollTop);
        });
    })();
});
