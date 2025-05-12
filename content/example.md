---
date: "2025-03-28"
params:
    readTime: "5 min"
    author: "romeosarkar10x"
tags:
    - linux
    - system-programming
    - c
    - network-programming
---

# this is the page title!

## heading h2

some content

## heading h2

another content

## heading 😂 h2

some more content

## heading h2 2

i am a paragraph in markdown with line
wrapping so it fits this width.
i am a continuation of the first paragraph
as there is no empty line before me.

i am in the second paragraph.

i am the third one. even thought there are two line breaks before me, this does not create any newline characters. after me there are two spaces before the newline character.

## another heading h2

#just a tag
\# not a heading

### list:

- this is a list element
- this is another element

* this is gadha
* this is another gadha

- this is yet another element
- this is a plus list

### numbered list:

1. point 1
2. point 2
3. point 3 with subpoints
    1. subpoint 1
    - gadha
    - pig
    2. subpoint 2
    3. gadha again

### code block

```bash
echo hello world this is a test line. we will make it a very very very very long line so, that we can test the limits of a single line in a code block. hope this helps!
```

---

.

---

## abc

.xyz

---

gadha

> block quote

hello world this is a `preformatted text`. thanks!

[visible text](http://google.com "tooltip")

_this text is emphasised_

**this text is bold**

**_this text is bold and emphasised_**

_this text is italics_
**this text is bold**

copyright: &copy;
registered trademark: &reg;
less than: &lt;
greater than: &gt;
ampersand: &amp;
smiley: &#x1f604;
embedded html: x<sup>2</sup>

## some raw html

<div style="display: inline-block; text-align: center;">
  <div style="border: solid black 2px; display: inline-block; margin: 5px;">
    <div style="border-bottom: solid black 2px;"><strong>input layer</strong></div>
    <div style="padding: 10px;">
        <p style="margin: 0; text-align: center;">shape: (512, 512, 3)</p>
        <p style="margin: 0; text-align: center;">input image dimensions: 3 (rgb)</p>
    </div>
  </div>

  <div style="text-align: center; margin: 5px;">
    <strong>▼</strong>
  </div>

  <div style="border: solid black 2px; display: inline-block; margin: 5px;">
    <div style="border-bottom: solid black 2px;"><strong>xception base model</strong></div>
    <div style="padding: 10px;">
        <p style="margin: 0; text-align: center;">pre-trained on imagenet</p>
        <p style="margin: 0; text-align: center;">output: (16, 16, 2048)</p>
        <p style="margin: 0; text-align: center;">feature map</p>
    </div>
  </div>

  <div style="text-align: center; margin: 5px;">
    <strong>▼</strong>
  </div>

  <div style="border: solid black 2px; display: inline-block; margin: 5px;">
    <div style="border-bottom: solid black 2px;"><strong>flatten layer</strong></div>
    <div style="padding: 10px;">
        <p style="margin: 0; text-align: center;">output: (524288,)</p>
        <p style="margin: 0; text-align: center;">converts feature map to 1d vector</p>
    </div>
  </div>

  <div style="text-align: center; margin: 5px;">
    <strong>▼</strong>
  </div>

  <div style="border: solid black 2px; display: inline-block; margin: 5px;">
    <div style="border-bottom: solid black 2px;"><strong>dense layer</strong></div>
    <div style="padding: 10px;">
        <p style="margin: 0; text-align: center;">64 neurons, relu</p>
        <p style="margin: 0; text-align: center;">output: (64,)</p>
        <p style="margin: 0; text-align: center;">first fully connected layer</p>
    </div>
  </div>

  <div style="text-align: center; margin: 5px;">
    <strong>▼</strong>
  </div>

  <div style="border: solid black 2px; display: inline-block; margin: 5px;">
    <div style="border-bottom: solid black 2px;"><strong>dense layer</strong></div>
    <div style="padding: 10px;">
        <p style="margin: 0; text-align: center;">32 neurons, relu</p>
        <p style="margin: 0; text-align: center;">output: (32,)</p>
        <p style="margin: 0; text-align: center;">second fully connected layer</p>
    </div>
  </div>

  <div style="text-align: center; margin: 5px;">
    <strong>▼</strong>
  </div>

  <div style="border: solid black 2px; display: inline-block; margin: 5px;">
    <div style="border-bottom: solid black 2px;"><strong>dense layer</strong></div>
    <div style="padding: 10px;">
        <p style="margin: 0; text-align: center;">1 neuron, linear</p>
        <p style="margin: 0; text-align: center;">output: (1,)</p>
        <p style="margin: 0; text-align: center;">final regression output</p>
    </div>
  </div>
</div>

## tables

| name  | job              |
| ----- | ---------------- |
| alex  | web developer    |
| bob   | sys admin        |
| gabby | technical writer |

| header 1 | header 2 | header 3 |
| -------- | -------- | -------- |
| cell 1   | cell 2   | cell 3   |
| cell 4   | cell 5   | cell 6   |

| left-aligned | center-aligned | right-aligned |
| :----------- | :------------: | ------------: |
| left         |     center     |         right |
| text         |      text      |          text |

## task lists

- [ ] task 1
- [x] task 2
- [ ] task 3

## code blocks

```js
var x = 10;
x++;
console.log(x);
```

some c++ code block!

```cpp
#include <iostream>
#include <cstdint>

typedef uint16_t u16;
typedef uint32_t u32;

int main()
{
    std::cout << "hello world" << std::endl;
    return 0;
}
```

## Shortcodes

code/html:

{{< code/html-css-javascript
html=`<h1>Hugo Shortcodes</h1>

<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

<button>Click Me</button>

<p>The above button has been clicked <span>0</span> times.</p>`

css=`
body { background-color: wheat; }
button {
background-color: yellowgreen;
border-radius: 0.25rem;
cursor: pointer;
}`

javascript=`window.addEventListener("DOMContentLoaded", () => {
const dom_button = document.querySelector("button");
dom_button.addEventListener("click", () => {
const dom_span = document.querySelector("span");
const count = parseInt(dom_span.textContent);
dom_span.textContent = count + 1;
});
});`>}}

this is the end of document!
