function generateKey() {
    return `${window.location.hostname}/table-of-contents${window.location.pathname}`;
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
    (function restoreState() {
        const value = sessionStorage.getItem(generateKey());
        if (value != null) {
            console.log(value.split(","));
            const states = value.split(",").map((element) => element === "true");
            console.log("restoring States");
            console.log("states:", states);
            dfsClosure(function (nodeId, details) {
                console.log(states);
                console.log("nodeId:", nodeId, "value:", states[nodeId]);
                details.open = states[nodeId];
            });
        }
        // const scrollTop = sessionStorage.getItem(generateKey());
        // if (scrollTop != null) {
        // sidebarRight.scrollTop = parseFloat(scrollTop);
        // }
    })();

    (function saveState() {
        window.addEventListener("beforeunload", function () {
            const states = [];
            dfsClosure(function (nodeId, details) {
                states[nodeId] = details.open;
            });
            sessionStorage.setItem(generateKey(), states);
            // sessionStorage.setItem(generateKey(), sidebarRight.scrollTop);
        });
    })();

    document.querySelector("aside.sidebar-right nav#table-of-contents").classList.add("init");
});
