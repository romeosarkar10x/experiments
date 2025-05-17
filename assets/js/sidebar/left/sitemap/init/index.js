const scrollTopKey = "sitemapScrollTop";
const sitemapStateKey = "sitemapState";

function getSitemapState() {
    return window.sessionStorage
        .getItem(sitemapStateKey)
        ?.split(",")
        .map((state) => Boolean(state));
}

function setSitemapState(sitemapState) {
    window.sessionStorage.setItem(sitemapStateKey, sitemapState.map((state) => (state ? "1" : "")).join(","));
}

function dfsFactory(callback_operation, callback_getChildNodes, data, id = -1) {
    return function dfs(dom_node) {
        id !== -1 && callback_operation(dom_node, id, data);
        callback_getChildNodes(dom_node, id, data)?.forEach((dom_node) => dfs(dom_node, ++id));
    };
}

document.addEventListener("DOMContentLoaded", function () {
    const dom_sitemap = document.querySelector("aside.sidebar-left nav#sitemap");

    (function restoreState() {
        const sitemapState = getSitemapState();

        if (sitemapState != null) {
            dfsFactory(
                (dom_node, id, data) => void (dom_node.open = data[id]),
                (dom_node) => dom_node.querySelectorAll(":scope > ul  > li > details"),
                sitemapState,
            )(dom_sitemap);
        }

        const scrollTop = sessionStorage.getItem(scrollTopKey);

        if (scrollTop != null) {
            dom_sitemap.scrollTop = parseFloat(scrollTop);
        }
    })();

    (function setAnimationDelay() {
        dom_sitemap.classList.add("initialized");
    })();

    (function saveStateBeforeUnload() {
        window.addEventListener("beforeunload", function saveState() {
            const sitemapState = [];

            dfsFactory(
                (dom_node, id, data) => void (data[id] = dom_node.open),
                (dom_node) => dom_node.querySelectorAll(":scope > ul  > li > details"),
                sitemapState,
            )(dom_sitemap);
            setSitemapState(sitemapState);

            sessionStorage.setItem(scrollTopKey, dom_sitemap.scrollTop);
        });
    })();
});
