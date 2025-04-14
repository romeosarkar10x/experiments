/* 
document.addEventListener("DOMContentLoaded", function () {
    const sidebarLeft = document.querySelector("aside.sidebar-left");
    const innerWhenCollapsed = sidebarLeft.querySelector("div.inner-when-collapsed");
    const ul = sidebarLeft.querySelector("ul");
    const title = inner.querySelector("div.title");

    function titleOnClick(event) {
        console.log("titleOnClick click done!");
        sidebarLeft.classList.add("collapsed");
        inner.classList.add("collapsed");

        sidebarLeft.addEventListener(
            "transitionend",
            function () {
                console.log("sidebarLeft collapse transition ended!");
                innerWhenCollapsed.classList.add("collapsed");
                sidebarLeft.classList.add("transition-end");

                sidebarLeft.addEventListener(
                    "click",
                    function () {
                        console.log("sidebarLeft click done!");
                        innerWhenCollapsed.classList.remove("collapsed");
                        sidebarLeft.classList.remove("transition-end");
                        sidebarLeft.classList.remove("collapsed");

                        sidebarLeft.addEventListener(
                            "transitionend",
                            function () {
                                console.log("sidebarLeft expand transition ended!");
                                inner.classList.remove("collapsed");

                                title.addEventListener("click", titleOnClick, { once: true });
                            },
                            { once: true },
                        );
                    },
                    { once: true },
                );
            },
            { once: true },
        );

        event.stopPropagation();
    }

    title.addEventListener("click", titleOnClick, { once: true });
});
*/
