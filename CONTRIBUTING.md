# Contributing to Our Documentation Website

Thank you for your interest in contributing to our documentation website! This guide will help you understand our workflow, coding standards, and best practices to ensure a consistent and high-quality documentation experience.

# Table of Contents

- [Getting Started](#getting-started)
- [Hugo Project Structure](#hugo-project-structure)
- [Naming Conventions](#naming-conventions)
- [Content Guidelines](#content-guidelines)
- [Front Matter](#front-matter)
- [Shortcodes](#shortcodes)
- [CSS/SCSS Guidelines](#cssscss-guidelines)
- [JavaScript Guidelines](#javascript-guidelines)
- [Images and Assets](#images-and-assets)
- [Pull Request Process](#pull-request-process)
- [Local Development](#local-development)

# Getting Started

1. **Fork the repository** to your GitHub account
2. **Clone your fork** to your local machine
3. **Install Hugo** (ensure you have the correct version as specified in our README)
4. **Run the local development server** with `hugo server -D`

# Hugo Project Structure

Our project follows the standard Hugo structure:

```
.
├── archetypes/
├── config/
├── content/
├── themes/
```

# Naming Conventions

Consistent naming helps maintain a clean, professional codebase. Please follow these conventions:

## File and Directory Naming

- **Content files**: Use **Kebab case** for all Markdown files (e.g., `getting-started.md`, `api-reference.md`)
- **Layout partials**: Use kebab-case for HTML partials (e.g., `header-nav.html`, `social-links.html`)
- **Shortcodes**: Use kebab-case (e.g., `code-example.html`, `note-box.html`)
- **CSS/SCSS files**: Use kebab-case (e.g., `main-navigation.scss`, `code-highlighting.scss`)
- **JavaScript files**: Use kebab-case (e.g., `search-functionality.js`, `table-of-contents.js`)
- **Images**: Use kebab-case, include descriptive names (e.g., `architecture-diagram.png`, `user-flow-chart.svg`)

## URL Structure

- All URLs should be lowercase and use hyphens as separators
- Keep URLs concise but descriptive
- Group related content under appropriate sections

## Content Organization

- Group related documents in meaningful directories
- Use a logical hierarchy that follows user journey when possible
- Place reusable components in the appropriate directories (partials, shortcodes)

# Content Guidelines

## Writing Style

- Use clear, concise language
- Write in a friendly, conversational tone
- Use active voice where possible
- Break content into readable chunks with appropriate headings
- Target a general technical audience unless writing advanced documentation

## Markdown Usage

- Use appropriate heading levels (H1 is generally reserved for page titles)
- Use code blocks with appropriate syntax highlighting
- Use bulleted or numbered lists for sequential steps or related items
- Use tables for comparing options or displaying structured data
- Use blockquotes for important notes or callouts

# Front Matter

Every content file should include front matter at the top. Required fields:

```yaml
---
title: "Your Page Title"
description: "A brief description of this page (used for SEO)"
date: 2023-04-04T14:53:12+01:00
lastmod: 2023-04-04T14:53:12+01:00
draft: false
weight: 10
categories: ["category1", "category2"]
tags: ["tag1", "tag2"]
---
```

# Shortcodes

- Place custom shortcodes in `layouts/shortcodes/`
- Document each shortcode with comments explaining parameters and usage
- Use kebab-case for shortcode names
- Example usage: `{{< note-box type="warning" >}}This is a warning{{< /note-box >}}`

# CSS/SCSS Guidelines

- Use descriptive class names with kebab-case
- Follow a component-based approach when possible
- Comment complex CSS rules
- Minimize the use of !important
- Consider responsive design for all components

# JavaScript Guidelines

- Follow modern JavaScript practices
- Document functions and complex logic
- Keep scripts focused on specific functionality
- Minimize dependencies when possible
- Consider accessibility in interactive elements

# Images and Assets

- Optimize images before adding them to the repository
- Use SVG for icons and simple graphics when possible
- Include alt text for all images in Markdown: `![Alt text](image.jpg)`
- Place images in the appropriate content subdirectory or in `static/images/`

# Pull Request Process

1. Create a branch with a descriptive name related to your changes
2. Make your changes following the guidelines in this document
3. Test locally using `hugo serve`
4. Commit with clear, descriptive messages
5. Push your changes and create a pull request
6. Respond to any feedback during the review process

# Local Development

To preview your changes locally:

1. Run `hugo serve` to start the development server
2. Access the site at http://localhost:1313/
3. The site will automatically refresh when you make changes

---

Thank you for helping improve our documentation! If you have any questions or need further clarification, please open an issue or contact the maintainers.
