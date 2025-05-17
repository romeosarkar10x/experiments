# Contributing Content as an Author

This guide is for **Authors** who want to contribute content to this Hugo-based website without getting involved in the technical development aspects.

## Prerequisites

Before you begin, make sure you have:

1. [Hugo](https://gohugo.io/installation/) installed on your machine
2. Git installed for version control
3. A fork of this repository in your GitHub account
4. Node.js and npm for running formatting checks

## Creating New Content

### 1. Create a New Content File

Use Hugo's content creation command:

```bash
hugo new content hello-world.md
```

This will create a new markdown file with pre-populated front matter.

### 2. Set Up Your Author Profile (First-time Contributors)

Before writing your first article, you need to:

- Create an author profile YAML file at `data/authors/<your-username>.yaml`
- Add your profile photo to `static/profile-photos/<your-username>.[png|jpeg|jpg]`

#### Author YAML File Example

```yaml
name: Your Full Name
bio: A short biography about yourself
social:
    twitter: yourtwitterhandle
    github: yourgithubusername
    linkedin: yourlinkedinprofile
    # Add other social links as needed
```

#### Profile Photo Requirements

- Place your photo in `static/profile-photos/` directory
- Name it with your username: `<your-username>.png` (or .jpg, .jpeg, etc.)
- Use a clear, professional photo (recommended size: 400x400 pixels)

### 3. Edit the Front Matter

In your new content file, update the front matter (the section at the top between `---` marks):

```yaml
---
title: "" # Optional, will be overridden by first H1 heading
date: 2023-04-13T12:00:00+00:00
draft: false
author: your-username # Must match your author YAML file name
tags:
    - tag1
    - tag2
categories:
    - category1
---
```

### 4. Write Your Content

After the front matter, write your content using Markdown:

- Start with a **single H1 heading** which will be used as the title:
    ```markdown
    # Your Article Title
    ```
- Use H2 to H6 headings (## to ######) for sections within your article
- **Important**: There should be only ONE H1 heading in your content

Example content structure:

```markdown
# My Amazing Tutorial

This is an introduction to my tutorial.

## First Steps

Let's start with these steps...

### Sub-section

More detailed information...

## Second Part

Additional content here...
```

### 5. Reference Example

For more advanced Markdown formatting, check the example file:

```bash
cat content/example.md
```

This shows you how to:

- Include images
- Create code blocks with syntax highlighting
- Add blockquotes
- Format tables
- And more

## Testing and Submitting Your Content

### 1. Preview Locally

To see how your content will look on the website:

```bash
hugo serve
```

Visit the URL shown in the terminal (typically http://localhost:1337) to preview your content.

### 2. Check Formatting

Before submitting, verify that your files follow our formatting standards:

```bash
npm run check-format
```

If there are formatting issues, you can fix them with:

```bash
npm run format
```

### 3. Create a Pull Request

After you're satisfied with your content:

1. Commit your changes:

    ```bash
    git add .
    git commit -m "Add new article: Your Article Title"
    ```

2. Push to your fork:

    ```bash
    git push origin your-branch-name
    ```

3. Go to the original repository on GitHub and create a pull request

## Content Guidelines

- Use a single H1 heading for the title
- Structure your content with H2-H6 headings
- Include relevant images or code samples when helpful
- Write clear, concise content
- Follow proper Markdown formatting
- Check spelling and grammar before submitting

That's it! Once your pull request is approved and merged, your content will be published to the website.

## Need Help?

If you have questions or run into issues, please open an issue in the repository or contact the maintainers for assistance.
