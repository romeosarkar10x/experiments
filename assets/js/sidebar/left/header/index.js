"use strict";

function enableFluidTypography(dom_node, dom_container) {
    function fontResize() {
        function getComputedStyle(dom_node) {
            return {
                dom_node,
                getFloatPropertyValue: function getFloatPropertyValue(property) {
                    const nodeStyle = window.getComputedStyle(this.dom_node);
                    return parseFloat(nodeStyle.getPropertyValue(property));
                },
            };
        }

        const initialFontSize = parseFloat(window.getComputedStyle(dom_node).fontSize);

        const containerWidth = dom_container.clientWidth;
        const containerHeight = dom_container.clientHeight;
        const containerStyle = getComputedStyle(dom_container);

        const availableWidth =
            containerWidth -
            (containerStyle.getFloatPropertyValue("padding-left") +
                containerStyle.getFloatPropertyValue("padding-right"));

        const availableHeight =
            containerHeight -
            (containerStyle.getFloatPropertyValue("padding-top") +
                containerStyle.getFloatPropertyValue("padding-bottom"));

        const nodeWidth = dom_node.clientWidth;
        const nodeHeight = dom_node.clientHeight;
        const nodeStyle = getComputedStyle(dom_node);
        +nodeStyle;

        const nodeTextWidth =
            nodeWidth -
            (-nodeStyle.getFloatPropertyValue("margin-left") +
                -nodeStyle.getFloatPropertyValue("margin-right") +
                nodeStyle.getFloatPropertyValue("padding-left") +
                nodeStyle.getFloatPropertyValue("padding-right"));

        const nodeTextHeight =
            nodeHeight -
            (nodeStyle.getFloatPropertyValue("margin-top") +
                nodeStyle.getFloatPropertyValue("margin-bottom") +
                nodeStyle.getFloatPropertyValue("padding-top") +
                nodeStyle.getFloatPropertyValue("padding-bottom"));

        const ratioWidth = availableWidth / nodeTextWidth;
        const ratioHeight = availableHeight / nodeTextHeight;

        const finalFontSize = Math.floor(Math.min(ratioHeight, ratioWidth) * initialFontSize);
        dom_node.style.fontSize = finalFontSize + "px";
    }

    const resizeObserver = new ResizeObserver(fontResize);
    resizeObserver.observe(dom_container);
}

window.addEventListener("DOMContentLoaded", () => {
    const dom_container = document.querySelector("aside.sidebar-left > header");
    const dom_node = dom_container.querySelector("h2");
    enableFluidTypography(dom_node, dom_container);
});
