const htmlCssJavascriptConsoles = {
    consoles: {
        html: "html",
        css: "css",
        javascript: "javascript",
    },

    select: function select(dom_parentElement, console) {
        return dom_parentElement.querySelector(`pre.console.${console}`);
    },

    selectAll: function selectAll(dom_parentElement) {
        return [
            this.select(dom_parentElement, this.consoles.html),
            this.select(dom_parentElement, this.consoles.css),
            this.select(dom_parentElement, this.consoles.javascript),
        ];
    },
};

class RadioButton {
    constructor(states, dom_elements, defaultState, callback_selectState, callback_unselectState) {
        this.states = states;
        this.dom_elements = dom_elements;

        this.index = this.states.indexOf(defaultState);

        if (this.index === -1) {
            console.error("Index not found!");
        }

        this.callback_selectState = callback_selectState;
        this.callback_unselectState = callback_unselectState;

        {
            /* default */
            this.dom_elements.forEach((dom_element, currentIndex) => {
                if (currentIndex === this.index) {
                    this.callback_selectState(dom_element, defaultState);
                } else {
                    this.callback_unselectState(dom_element, this.states[currentIndex]);
                }
            });
        }
    }

    selectState(state) {
        const currentIndex = this.states.indexOf(state);

        if (currentIndex === -1) {
            console.log("ERROR: Index not found!");
        }

        if (currentIndex === this.index) {
            return;
        }

        this.callback_selectState(this.dom_elements[currentIndex], state);
        this.callback_unselectState(this.dom_elements[this.index], this.states[this.index]);

        this.index = currentIndex;
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const dom_elements = document.querySelectorAll("body > main > article > div.shortcode.html-css-javascript");

    dom_elements.forEach((dom_element) => {
        dom_element.expt_radioButton = new RadioButton(
            ["html", "css", "javascript"],
            htmlCssJavascriptConsoles.selectAll(dom_element),
            "html",
            function selectState(dom_element, state) {
                dom_element.style.display = "block";
                dom_element.parentNode.parentNode.querySelector(`div.states > button.${state}`).classList.add("active");
            },
            function unselectState(dom_element, state) {
                dom_element.style.display = "none";
                dom_element.parentNode.parentNode
                    .querySelector(`div.states > button.${state}`)
                    .classList.remove("active");
            },
        );
    });
});

window.expt_radioButtonSelect = (event, name) => {
    event.target.parentNode.parentNode.expt_radioButton.selectState(name);
};
