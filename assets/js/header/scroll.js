window.addEventListener("DOMContentLoaded", function () {
    /*
    let yTransform = 0;
    */

    let scrollYPrevious = window.scrollY;
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        const scrollYCurrent = window.scrollY;

        /*
        const difference = scrollYCurrent - scrollYPrevious;

        if (scrollYCurrent > scrollYPrevious) {
            yTransform = Math.min(yTransform + difference, nav.offsetHeight);
        } else {
            yTransform = Math.max(0, yTransform + difference);
        }

        nav.style.transform = `translateY(-${yTransform}px)`;
        */

        if (scrollYCurrent > scrollYPrevious) {
            header.style.transform = `translateY(-${header.offsetHeight}px)`;
        } else {
            header.style.transform = `translateY(0)`;
        }

        scrollYPrevious = scrollYCurrent;
    });
});
