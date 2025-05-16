---
params:
    author: romeosarkar10x
---

# Modern Frontend Development: A Comprehensive Guide

## Introduction

Modern frontend development has evolved significantly over the past decade. Gone are the days when HTML, basic CSS, and some jQuery were all you needed to build a website. Today's frontend landscape involves complex frameworks, build tools, performance optimization techniques, and accessibility considerations. This comprehensive guide will walk you through the intricacies of modern frontend development practices and technologies.

### Purpose of This Guide

This guide aims to provide developers of all experience levels with a thorough understanding of contemporary frontend development approaches, tools, and best practices. Whether you're just starting your journey or looking to refine your skills, you'll find valuable information here.

### Who Should Read This

- Beginner developers looking to understand the frontend ecosystem
- Intermediate developers wanting to expand their knowledge
- Experienced developers interested in staying updated with current trends
- Technical managers overseeing frontend development teams

## Core Technologies

### HTML5

HTML5 is the backbone of all web development. It provides the structural framework that browsers interpret to display web content.

#### Semantic HTML

Semantic HTML elements like `<header>`, `<article>`, and `<nav>` provide meaning to your markup, improving accessibility and SEO.

```html
<header>
    <h1>Site Title</h1>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </nav>
</header>
```

#### HTML5 APIs

Modern browsers offer powerful APIs through HTML5 that enable complex interactions:

- Canvas API for drawing graphics
- Web Storage for client-side data storage
- Geolocation API for location-aware web applications
- WebSockets for real-time communication

### CSS3

CSS3 brings powerful styling capabilities to web development, enabling complex layouts and animations that previously required JavaScript.

#### Box Model

Understanding the CSS box model is fundamental:

- Content: The actual content of the element
- Padding: Space between content and border
- Border: The boundary around the padding
- Margin: Space between elements

#### Flexbox

Flexbox provides a more efficient way to layout, align, and distribute space among items in a container:

```css
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

#### CSS Grid

CSS Grid enables two-dimensional layouts with rows and columns:

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}
```

#### CSS Variables

CSS variables (custom properties) allow for more maintainable stylesheets:

```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
}

.button {
    background-color: var(--primary-color);
}
```

#### Media Queries

Media queries enable responsive design by applying styles based on device characteristics:

```css
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}
```

### JavaScript

JavaScript powers the interactive aspects of web applications, transforming static pages into dynamic experiences.

#### ES6+ Features

Modern JavaScript includes numerous features that improve developer experience:

- Arrow functions
- Template literals
- Destructuring assignment
- Spread and rest operators
- Classes and modules

#### Asynchronous JavaScript

Managing asynchronous operations is essential for performance:

```javascript
// Promises
fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

// Async/Await
async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

## Frontend Frameworks

### React

React has transformed UI development with its component-based architecture and virtual DOM implementation.

#### JSX

JSX combines HTML and JavaScript for more intuitive component creation:

```jsx
function Welcome() {
    return <h1>Hello, world!</h1>;
}
```

#### Component Lifecycle

Understanding React's component lifecycle is crucial for optimization:

- Mounting: Component is being created and inserted into the DOM
- Updating: Component is being re-rendered
- Unmounting: Component is being removed from the DOM

#### Hooks

Hooks allow function components to use state and lifecycle features:

```jsx
import React, { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}
```

#### State Management

Managing state efficiently is essential for complex applications:

- Local state with useState
- Context API for shared state
- Redux for centralized state management
- Recoil for atomic state management

### Vue.js

Vue.js provides a progressive framework for building user interfaces, emphasizing declarative rendering and component composition.

#### Template Syntax

Vue's template syntax extends HTML with directives:

```vue
<template>
    <div>
        <p>{{ message }}</p>
        <button v-on:click="reverseMessage">Reverse Message</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "Hello Vue!",
        };
    },
    methods: {
        reverseMessage() {
            this.message = this.message.split("").reverse().join("");
        },
    },
};
</script>
```

#### Reactivity System

Vue's reactivity system automatically updates the DOM when data changes.

#### Composition API

The Composition API provides a more flexible way to organize component logic:

```vue
<script setup>
import { ref, computed } from "vue";

const count = ref(0);
const doubleCount = computed(() => count.value * 2);

function increment() {
    count.value++;
}
</script>
```

### Angular

Angular provides a comprehensive framework for building large-scale applications with TypeScript integration.

#### TypeScript Integration

Angular leverages TypeScript for static typing and improved tooling:

```typescript
import { Component } from "@angular/core";

@Component({
    selector: "app-counter",
    template: `
        <p>Count: {{ count }}</p>
        <button (click)="increment()">Increment</button>
    `,
})
export class CounterComponent {
    count = 0;

    increment() {
        this.count++;
    }
}
```

#### Dependency Injection

Angular's dependency injection system promotes modular development:

```typescript
@Injectable({
    providedIn: "root",
})
export class DataService {
    getData() {
        return fetch("https://api.example.com/data").then((res) => res.json());
    }
}
```

#### Change Detection

Understanding Angular's change detection mechanism helps optimize performance.

## Build Tools and Module Bundlers

### Webpack

Webpack has become the standard for bundling JavaScript applications, transforming modular code into optimized bundles.

#### Configuration

Basic Webpack configuration involves entry points, output settings, and loaders:

```javascript
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
};
```

#### Code Splitting

Code splitting improves performance by separating code into smaller chunks:

```javascript
// Dynamic import for code splitting
const AdminModule = () => import("./admin/AdminModule");
```

### Vite

Vite offers a faster development experience with instant server start and hot module replacement.

#### Dev Server

Vite's dev server leverages native ES modules for near-instantaneous startup:

```javascript
// vite.config.js
export default {
    server: {
        port: 3000,
        open: true,
    },
};
```

### Rollup

Rollup excels at bundling libraries with tree-shaking capabilities.

#### Tree Shaking

Tree shaking eliminates unused code for smaller bundles:

```javascript
// rollup.config.js
export default {
    input: "src/main.js",
    output: {
        file: "bundle.js",
        format: "esm",
    },
};
```

## CSS Methodologies and Processors

### CSS Preprocessors

#### Sass/SCSS

Sass extends CSS with variables, nesting, mixins, and functions:

```scss
$primary-color: #3498db;

@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    @include flex-center;
    background-color: $primary-color;

    .item {
        padding: 1rem;
    }
}
```

#### Less

Less provides similar features to Sass with a different syntax.

### CSS Methodologies

#### BEM (Block Element Modifier)

BEM promotes predictable and maintainable CSS organization:

```css
/* Block */
.card {
    background: white;
}

/* Element */
.card__title {
    font-size: 1.5rem;
}

/* Modifier */
.card--featured {
    border: 2px solid gold;
}
```

#### CSS-in-JS

CSS-in-JS solutions co-locate styles with components:

```jsx
import styled from "styled-components";

const Button = styled.button`
    background-color: ${(props) => (props.primary ? "blue" : "white")};
    color: ${(props) => (props.primary ? "white" : "blue")};
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid blue;
    border-radius: 3px;
`;
```

#### Utility-First CSS

Frameworks like Tailwind CSS promote utility classes:

```html
<div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-xl font-bold mb-4">Card Title</h2>
    <p class="text-gray-700">Card content goes here.</p>
</div>
```

## Performance Optimization

### Core Web Vitals

Google's Core Web Vitals measure real-world user experience:

- Largest Contentful Paint (LCP): Loading performance
- First Input Delay (FID): Interactivity
- Cumulative Layout Shift (CLS): Visual stability

### Code Splitting

Divide your application into smaller chunks that load on demand:

```javascript
// React.lazy for component-based code splitting
const LazyComponent = React.lazy(() => import("./LazyComponent"));

function App() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
        </React.Suspense>
    );
}
```

### Image Optimization

Optimizing images significantly improves page load times:

- Use appropriate formats (JPEG, PNG, WebP, AVIF)
- Implement responsive images with srcset
- Lazy load images below the fold

```html
<img
    src="small.jpg"
    srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w"
    sizes="(max-width: 600px) 500px, (max-width: 1200px) 1000px, 1500px"
    alt="Responsive image"
    loading="lazy" />
```

### Critical CSS

Inline critical styles to improve first paint:

```html
<head>
    <style>
        /* Critical CSS */
        body {
            margin: 0;
            font-family: sans-serif;
        }
        header {
            background: #333;
            color: white;
            padding: 1rem;
        }
    </style>
    <link
        rel="preload"
        href="styles.css"
        as="style"
        onload="this.onload=null;this.rel='stylesheet'" />
</head>
```

## Accessibility (a11y)

### Semantic HTML

Using the right HTML elements improves accessibility without additional effort:

```html
<!-- Instead of -->
<div
    class="button"
    onclick="submit()"
    >Submit</div
>

<!-- Use -->
<button type="submit">Submit</button>
```

### ARIA Attributes

ARIA helps when HTML semantics aren't sufficient:

```html
<div
    role="alert"
    aria-live="assertive">
    Form submitted successfully!
</div>
```

### Focus Management

Proper focus management ensures keyboard navigation works correctly:

```javascript
// After dynamic content changes
const newElement = document.getElementById("new-content");
newElement.focus();
```

### Color Contrast

Meeting WCAG contrast guidelines ensures content is readable:

- AA standard: 4.5:1 ratio for normal text, 3:1 for large text
- AAA standard: 7:1 ratio for normal text, 4.5:1 for large text

## Testing

### Unit Testing

Unit tests verify individual pieces of functionality:

```javascript
// Using Jest
test("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
});
```

### Integration Testing

Integration tests verify that components work together:

```javascript
// Using React Testing Library
test("form submission", async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/email/i), {
        target: { value: "test@example.com" },
    });

    fireEvent.click(screen.getByText(/submit/i));

    expect(await screen.findByText(/thank you/i)).toBeInTheDocument();
});
```

### End-to-End Testing

E2E tests simulate user behavior in a browser environment:

```javascript
// Using Cypress
describe("Login Flow", () => {
    it("should log in successfully", () => {
        cy.visit("/login");
        cy.get('input[name="email"]').type("user@example.com");
        cy.get('input[name="password"]').type("password123");
        cy.get('button[type="submit"]').click();
        cy.url().should("include", "/dashboard");
        cy.contains("Welcome back").should("be.visible");
    });
});
```

## State Management

### Redux

Redux provides predictable state management with a centralized store:

```javascript
// Action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Reducer
function counterReducer(state = { count: 0 }, action) {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + 1 };
        case DECREMENT:
            return { count: state.count - 1 };
        default:
            return state;
    }
}

// Store
const store = createStore(counterReducer);
```

### Context API

React's Context API provides a way to share state without prop drilling:

```jsx
// Create context
const ThemeContext = React.createContext("light");

// Provider
function App() {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <MainContent />
        </ThemeContext.Provider>
    );
}

// Consumer
function ThemedButton() {
    const { theme } = useContext(ThemeContext);

    return <button className={theme}>Themed Button</button>;
}
```

### Zustand

Zustand offers a simplified state management solution:

```javascript
import create from "zustand";

const useStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}));

function Counter() {
    const { count, increment, decrement } = useStore();

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}
```

## API Communication

### REST APIs

RESTful APIs follow a resource-oriented approach:

```javascript
// Fetching data from a REST API
async function getUsers() {
    const response = await fetch("https://api.example.com/users");
    return response.json();
}

// Creating a resource
async function createUser(userData) {
    const response = await fetch("https://api.example.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    return response.json();
}
```

### GraphQL

GraphQL provides more flexibility by allowing clients to request exactly what they need:

```javascript
// Using Apollo Client
const GET_USER = gql`
    query GetUser($id: ID!) {
        user(id: $id) {
            id
            name
            email
            posts {
                id
                title
            }
        }
    }
`;

function UserProfile({ userId }) {
    const { loading, error, data } = useQuery(GET_USER, {
        variables: { id: userId },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>{data.user.name}</h1>
            <p>{data.user.email}</p>
            <h2>Posts</h2>
            <ul>
                {data.user.posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}
```

### WebSockets

WebSockets enable real-time bidirectional communication:

```javascript
const socket = new WebSocket("wss://example.com/socket");

socket.onopen = () => {
    console.log("Connection established");
    socket.send(JSON.stringify({ type: "subscribe", channel: "notifications" }));
};

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log("Message received:", data);
};

socket.onclose = () => {
    console.log("Connection closed");
};
```

## Authentication and Authorization

### JWT Authentication

JSON Web Tokens provide a stateless authentication mechanism:

```javascript
// Client-side authentication with JWT
async function login(credentials) {
    const response = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });

    const { token } = await response.json();
    localStorage.setItem("token", token);

    return token;
}

// Adding JWT to requests
function authenticatedFetch(url, options = {}) {
    const token = localStorage.getItem("token");

    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${token}`,
        },
    });
}
```

### OAuth 2.0

OAuth 2.0 enables third-party authentication:

```javascript
// Redirecting to OAuth provider
function initiateOAuth() {
    const clientId = "your-client-id";
    const redirectUri = encodeURIComponent("https://your-app.com/callback");
    const scope = encodeURIComponent("profile email");

    window.location.href = `https://oauth-provider.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
}

// Handling the callback
async function handleOAuthCallback(code) {
    const response = await fetch("/api/oauth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
    });

    const { access_token } = await response.json();
    localStorage.setItem("token", access_token);
}
```

## Progressive Web Apps (PWAs)

### Service Workers

Service workers enable offline functionality and background processing:

```javascript
// Registering a service worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("/service-worker.js")
            .then((registration) => {
                console.log("ServiceWorker registered:", registration.scope);
            })
            .catch((error) => {
                console.log("ServiceWorker registration failed:", error);
            });
    });
}

// service-worker.js
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("app-cache-v1").then((cache) => {
            return cache.addAll(["/", "/index.html", "/styles.css", "/app.js", "/offline.html"]);
        }),
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return (
                response ||
                fetch(event.request).catch(() => {
                    return caches.match("/offline.html");
                })
            );
        }),
    );
});
```

### Web App Manifest

The manifest file defines how the app appears when installed:

```json
{
    "name": "My PWA App",
    "short_name": "PWA",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#3498db",
    "icons": [
        {
            "src": "/icons/icon-192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/icons/icon-512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
}
```

### Offline Support

Design applications to function without an internet connection:

```javascript
// Check network status
window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);

function updateOnlineStatus() {
    const status = navigator.onLine ? "online" : "offline";
    console.log(`App is now ${status}`);

    if (!navigator.onLine) {
        // Switch to offline mode UI
        document.body.classList.add("offline-mode");
        showNotification("You are offline. Some features may be unavailable.");
    } else {
        document.body.classList.remove("offline-mode");
        showNotification("You are back online!");

        // Sync any pending changes
        syncData();
    }
}
```

## Internationalization (i18n)

### Translation Management

Organize translations in a maintainable way:

```javascript
// Translation files
const translations = {
    en: {
        greeting: "Hello",
        welcome: "Welcome to our app",
        buttons: {
            submit: "Submit",
            cancel: "Cancel",
        },
    },
    es: {
        greeting: "Hola",
        welcome: "Bienvenido a nuestra aplicación",
        buttons: {
            submit: "Enviar",
            cancel: "Cancelar",
        },
    },
};

// Translation function
function t(key, locale = "en") {
    const keys = key.split(".");
    let result = translations[locale];

    for (const k of keys) {
        if (!result[k]) return key; // Fallback to key if translation missing
        result = result[k];
    }

    return result;
}

// Usage
console.log(t("buttons.submit", "es")); // Enviar
```

### Date and Number Formatting

Use the Intl API for locale-aware formatting:

```javascript
// Date formatting
const date = new Date();
const dateFormatter = new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
});
console.log(dateFormatter.format(date)); // 12.04.2023

// Number formatting
const number = 1234567.89;
const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});
console.log(numberFormatter.format(number)); // $1,234,567.89
```

### RTL Support

Support right-to-left languages with proper CSS:

```css
/* Base styles */
html[dir="ltr"] .sidebar {
    left: 0;
}

html[dir="rtl"] .sidebar {
    right: 0;
}

/* Switch direction based on language */
html[lang="ar"],
html[lang="he"] {
    direction: rtl;
}
```

## Security Best Practices

### Cross-Site Scripting (XSS) Prevention

Protect against XSS attacks by properly sanitizing user input:

```javascript
// Escaping HTML
function escapeHTML(string) {
    return string
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// React automatically escapes content
function Comment({ content }) {
    return <div>{content}</div>; // Content is automatically escaped
}
```

### Content Security Policy (CSP)

Implement CSP to restrict resource loading:

```html
<meta
    http-equiv="Content-Security-Policy"
    content="default-src 'self'; script-src 'self' https://trusted-cdn.com; style-src 'self' 'unsafe-inline';" />
```

### CSRF Protection

Prevent cross-site request forgery:

```javascript
// Adding CSRF token to requests
const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

fetch("/api/user", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken,
    },
    body: JSON.stringify({ name: "John" }),
});
```

## CI/CD for Frontend

### Continuous Integration

Automate testing and quality checks with CI:

```yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
    test:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v2
            - name: Use Node.js
              uses: actions/setup-node@v2
              with:
                  node-version: "16"
            - run: npm ci
            - run: npm run lint
            - run: npm test
```

### Continuous Deployment

Automate the deployment process:

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
    push:
        branches: [main]

jobs:
    deploy:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v2
            - name: Use Node.js
              uses: actions/setup-node@v2
              with:
                  node-version: "16"
            - run: npm ci
            - run: npm run build
            - name: Deploy to Production
              uses: netlify/actions/cli@master
              with:
                  args: deploy --prod
              env:
                  NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
                  NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## Monitoring and Analytics

### Error Tracking

Implement error tracking to identify issues in production:

```javascript
// Using a service like Sentry
import * as Sentry from "@sentry/browser";

Sentry.init({
    dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
    environment: process.env.NODE_ENV,
});

// Capture errors
try {
    someRiskyFunction();
} catch (error) {
    Sentry.captureException(error);
}
```

### Performance Monitoring

Monitor real-user performance metrics:

```javascript
// Web Vitals
import { getCLS, getFID, getLCP } from "web-vitals";

function sendToAnalytics(metric) {
    const body = {
        name: metric.name,
        value: metric.value,
        id: metric.id,
    };

    navigator.sendBeacon("/analytics", JSON.stringify(body));
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getLCP(sendToAnalytics);
```

### User Behavior Analytics

Track how users interact with your application:

```javascript
// Basic event tracking
function trackEvent(category, action, label = null, value = null) {
    if (typeof gtag === "function") {
        gtag("event", action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
}

// Usage
document.querySelector("#signup-button").addEventListener("click", () => {
    trackEvent("Conversion", "Signup", "Homepage");
});
```

## Documentation

### Code Documentation

Document your code for better maintainability:

```javascript
/**
 * Calculates the total price including tax.
 *
 * @param {number} price - The base price without tax
 * @param {number} taxRate - The tax rate as a decimal (e.g., 0.07 for 7%)
 * @param {boolean} [formatAsCurrency=false] - Whether to format the result as currency
 * @returns {number|string} The total price with tax, formatted as currency if requested
 * @throws {Error} If price or taxRate is negative
 *
 * @example
 * // Returns 107
 * calculateTotalWithTax(100, 0.07);
 *
 * @example
 * // Returns "$107.00"
 * calculateTotalWithTax(100, 0.07, true);
 */
function calculateTotalWithTax(price, taxRate, formatAsCurrency = false) {
    if (price < 0 || taxRate < 0) {
        throw new Error("Price and tax rate must be non-negative");
    }

    const total = price * (1 + taxRate);

    if (formatAsCurrency) {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(total);
    }

    return total;
}
```
