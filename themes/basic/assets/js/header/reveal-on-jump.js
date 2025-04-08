let scrollCount = 0;

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");

    const internalLinks = Array.from(links).filter((link) => {
        const hasNonEmptyFragment = link.hash && link.hash.length > 1;
        const hasSameHostname = !link.hostname || link.hostname === window.location.hostname;
        const hasSamePathname = !link.pathname || link.pathname === window.location.pathname;
        return hasNonEmptyFragment && hasSameHostname && hasSamePathname;
    });

    function revealHeader() {
        const header = document.querySelector("body > header");
        header.style.transform = `translateY(0)`;
    }

    internalLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href").substring(1);
            const target = document.getElementById(targetId);

            if (!targetId) {
                return;
            }

            function isTargetAtScrollPosition(target) {
                const rectangle = target.getBoundingClientRect();
                const styles = getComputedStyle(document.documentElement);
                const scrollPaddingTopPixels = parseFloat(styles.scrollPaddingTop);
                return Math.abs(scrollPaddingTopPixels - rectangle.y) * devicePixelRatio < 1;
            }

            if (isTargetAtScrollPosition(target)) {
                console.log("nothing!");
                event.preventDefault();
                revealHeader();
                return;
            }

            window.addEventListener(
                "scroll",
                function (event) {
                    console.log(event);
                    console.log("scroll started");
                    const initialEvent = event;
                    window.addEventListener(
                        "scrollend",
                        function (event) {
                            console.log(event);
                            console.log(initialEvent == event);
                            revealHeader();
                        },
                        { once: true },
                    );
                },
                { once: true },
            );
        });
    });
});
