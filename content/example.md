---
date: "2025-03-28"
author:
    name: "Romeo Sarkar"
    imageUrl: "https://pub-b61cfa1258734ed6ba1ddf94ae5a46ed.r2.dev"
---

# This is the page title!

## Heading H2

I am a paragraph in Markdown with line
wrapping so it fits this width.
I am a continuation of the first paragraph
as there is no empty line before me.

I am in the second paragraph.

I am the third one. Even thought there are two line breaks before me, this does not create any newline characters. After me there are two spaces before the newline character.

## Another heading H2

#Just a tag
\# Not a Heading

### List:

- This is a list element
- This is another element

* This is gadha
* This is another gadha

- This is yet another element
- This is a plus list

### Numbered List:

1. Point 1
2. Point 2
3. Point 3 with Subpoints
    1. Subpoint 1
    - Gadha
    - Pig
    2. Subpoint 2
    3. Gadha Again

### Code block

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

Hello world this is a `Preformatted Text`. Thanks!

[visible text](http://google.com "Tooltip")

_this text is emphasised_

**this text is bold**

**_this text is bold and emphasised_**

_this text is italics_
**this text is bold**

Copyright: &copy;
Registered trademark: &reg;
Less than: &lt;
Greater than: &gt;
Ampersand: &amp;
Smiley: &#x1F604;
Embedded HTML: x<sup>2</sup>

## Some raw html

<div style="display: inline-block; text-align: center;">
  <div style="border: solid black 2px; display: inline-block; margin: 5px;">
    <div style="border-bottom: solid black 2px;"><strong>Input Layer</strong></div>
    <div style="padding: 10px;">
        <p style="margin: 0; text-align: center;">Shape: (512, 512, 3)</p>
        <p style="margin: 0; text-align: center;">Input image dimensions: 3 (RGB)</p>
    </div>
  </div>

  <div style="text-align: center; margin: 5px;">
    <strong>▼</strong>
  </div>

  <div style="border: solid black 2px; display: inline-block; margin: 5px;">
    <div style="border-bottom: solid black 2px;"><strong>Xception Base Model</strong></div>
    <div style="padding: 10px;">
        <p style="margin: 0; text-align: center;">Pre-trained on ImageNet</p>
        <p style="margin: 0; text-align: center;">Output: (16, 16, 2048)</p>
        <p style="margin: 0; text-align: center;">Feature map</p>
    </div>
  </div>

  <div style="text-align: center; margin: 5px;">
    <strong>▼</strong>
  </div>

  <div style="border: solid black 2px; display: inline-block; margin: 5px;">
    <div style="border-bottom: solid black 2px;"><strong>Flatten Layer</strong></div>
    <div style="padding: 10px;">
        <p style="margin: 0; text-align: center;">Output: (524288,)</p>
        <p style="margin: 0; text-align: center;">Converts feature map to 1D vector</p>
    </div>
  </div>

  <div style="text-align: center; margin: 5px;">
    <strong>▼</strong>
  </div>

  <div style="border: solid black 2px; display: inline-block; margin: 5px;">
    <div style="border-bottom: solid black 2px;"><strong>Dense Layer</strong></div>
    <div style="padding: 10px;">
        <p style="margin: 0; text-align: center;">64 Neurons, ReLU</p>
        <p style="margin: 0; text-align: center;">Output: (64,)</p>
        <p style="margin: 0; text-align: center;">First fully connected layer</p>
    </div>
  </div>

  <div style="text-align: center; margin: 5px;">
    <strong>▼</strong>
  </div>

  <div style="border: solid black 2px; display: inline-block; margin: 5px;">
    <div style="border-bottom: solid black 2px;"><strong>Dense Layer</strong></div>
    <div style="padding: 10px;">
        <p style="margin: 0; text-align: center;">32 Neurons, ReLU</p>
        <p style="margin: 0; text-align: center;">Output: (32,)</p>
        <p style="margin: 0; text-align: center;">Second fully connected layer</p>
    </div>
  </div>

  <div style="text-align: center; margin: 5px;">
    <strong>▼</strong>
  </div>

  <div style="border: solid black 2px; display: inline-block; margin: 5px;">
    <div style="border-bottom: solid black 2px;"><strong>Dense Layer</strong></div>
    <div style="padding: 10px;">
        <p style="margin: 0; text-align: center;">1 Neuron, Linear</p>
        <p style="margin: 0; text-align: center;">Output: (1,)</p>
        <p style="margin: 0; text-align: center;">Final regression output</p>
    </div>
  </div>
</div>

## Tables

| Name  | Job              |
| ----- | ---------------- |
| Alex  | Web Developer    |
| Bob   | Sys Admin        |
| Gabby | Technical Writer |

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

| Left-aligned | Center-aligned | Right-aligned |
| :----------- | :------------: | ------------: |
| Left         |     Center     |         Right |
| Text         |      Text      |          Text |

## Task lists

- [ ] task 1
- [x] task 2
- [ ] task 3

## Code Blocks

```js
var x = 10;
x++;
console.log(x);
```

Some c++ code block!

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

This is the end of document!
