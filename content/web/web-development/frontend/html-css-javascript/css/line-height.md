---
date: "2025-04-15T13:56:48+05:30"
params:
    author: "romeosarkar10x"
---

# Understanding CSS Line Height: The Surprising Behavior of Inline Elements

This experiment how the `line-height` property behaves with inline elements like `<a>` tags, and clarifies the often-misunderstood relationship between parent and child line heights.

## Basic Concepts

In CSS, `line-height` controls the vertical space occupied by a line of text. But its behavior differs based on whether it's applied to block or inline elements.

## The Key Discoveries

1. **Inline elements don't fully control their own line height**
2. **Parent elements establish "line boxes" that control spacing**
3. **Line height inheritance follows an asymmetric pattern**

## Experiments

Let's explore this behavior with code examples:

### Experiment 1: Basic Line Height Behavior

```html
<div style="border: 1px solid black; margin-bottom: 20px;">
    <p style="line-height: 1.5; margin: 0;">
        This is a paragraph with line-height set to 1.5.<br />
        See how the lines are spaced?<br />
        The spacing is consistent throughout.
    </p>
</div>

<div style="border: 1px solid black;">
    <p style="line-height: 2.5; margin: 0;">
        This is a paragraph with line-height set to 2.5.<br />
        Notice how the lines are spaced much further apart?<br />
        The spacing is again consistent.
    </p>
</div>
```

### Experiment 2: Inline Element Inherits Parent's Line Height

```html
<div style="line-height: 2.5; border: 1px solid black; margin-bottom: 20px;">
    This is normal text with
    <a
        href="#"
        style="line-height: 1; background: yellow;">
        a link that has line-height:1 but it's ignored because the parent has line-height:2.5
    </a>
    and the spacing remains consistent.
</div>
```

### Experiment 3: The Asymmetric Rule - Larger Line Height Wins

```html
<div style="line-height: 1; border: 1px solid black; margin-bottom: 20px;">
    This is text with small line height, but
    <a
        href="#"
        style="line-height: 3; background: yellow;">
        this link has line-height:3 which is larger than the parent's so it expands the line height of the entire line
        box
    </a>
    effectively overriding the parent's setting.
</div>
```

### Experiment 4: Multiple Lines Inside an Inline Element

```html
<div style="border: 1px solid black; margin-bottom: 20px; width: 300px;">
    <p style="line-height: 2; margin: 0;">
        Here's a paragraph containing
        <a
            href="#"
            style="background: yellow;">
            a link with multiple lines of text that will wrap according to the container width and maintain the parent's
            line height no matter how long the content inside the link element might be
        </a>
        and the spacing remains dictated by the parent.
    </p>
</div>
```

### Experiment 5: Making It Work - Setting Line Height on Parent

```html
<div style="border: 1px solid black; margin-bottom: 20px; width: 300px;">
    <p style="line-height: 1; margin: 0;">
        This paragraph has reduced line height.
        <a
            href="#"
            style="background: yellow;">
            This link contains text that will wrap to multiple lines and because the parent has a small line-height of
            1, the lines will appear close together as desired
        </a>
        which is what we want.
    </p>
</div>
```

## Understanding the "Strut" Concept

According to the W3C specification, every inline element contributes a conceptual "strut" to the line box calculation:

1. Each inline element has an invisible "strut" with its font and line height properties
2. The line box must be at least as tall as the tallest strut it contains
3. This ensures content doesn't overlap or get clipped

This explains why:

- Setting `line-height: 0` on an `<a>` tag doesn't work (the parent's strut is taller)
- Setting a very large `line-height` on an `<a>` tag does work (it creates the tallest strut)

## Best Practices

Based on these discoveries:

1. **Set line height on containing block elements**, not on inline elements
2. **Use reasonable values** (0.8 to 1.5) for readability
3. **Be consistent** with line height throughout your document
4. **Test thoroughly**, especially with wrapped text in links and other inline elements

## References

- [W3C CSS Line Height Specification](https://www.w3.org/TR/CSS21/visudet.html#line-height)
- [MDN Web Docs: line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
