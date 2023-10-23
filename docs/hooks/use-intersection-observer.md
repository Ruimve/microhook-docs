---
sidebar_position: 1
description: A React hook for observing element intersections in the viewport.
---

# useIntersectionObserver

<head>
  <meta name="keywords" content="useIntersectionObserver, IntersectionObserver, React IntersectionObserver hook, Detect element visibility, Track element intersection, Observe element visibility changes, Trigger actions on element intersection, React visibility hook." />
</head>

The **useIntersectionObserver** hook is a custom React hook that uses the Intersection Observer API to determine whether a specified HTML element is currently visible on the screen. This hook can be useful for implementing lazy loading of images, infinite scrolling, or other dynamic UI components that need to be triggered when the user scrolls to a certain part of the page.

## Installation

To use **useIntersectionObserver**, you need to install it as a dependency in your React project. You can do this via **npm** or **yarn**.

```bash
npm install microhook
```

```bash
yarn add microhook
```

## Usage
To use the **useIntersectionObserver** hook in your React components, follow these steps:

1. Import the hook at the top of your file:

```tsx
import { useIntersectionObserver } from 'microhook';
```

2. Create a ref for the HTML element that you want to observe:

```tsx
const myRef = useRef<HTMLDivElement>(null);
```

3. Pass the ref object and any optional options as arguments to the **useIntersectionObserver** hook:

```tsx
const [intersectionEntry, action] = useIntersectionObserver(myRef, {
  root: null,
  rootMargin: '0px',
  threshold: 0,
});
```

The **intersectionEntry** variable will contain the current IntersectionObserverEntry object representing the observed element's intersection data. The **action** variable is an empty object that can be used to trigger any additional actions.

4. Use the intersectionEntry object to conditionally render UI elements:

```tsx
return (
  <div>
    <h1>My Page</h1>
    <div ref={myRef}>
      <p>Some content here...</p>
    </div>
    {intersectionEntry && intersectionEntry.isIntersecting && (
      <p>Hey! You scrolled to this part of the page!</p>
    )}
  </div>
);
```

In this example, the **isIntersecting** property of the intersectionEntry object is used to conditionally render a message when the observed element becomes visible on the screen.

## Options
The **useIntersectionObserver** hook accepts an optional **options** object as its second argument, with the following properties:

- **root**: The element that is used as the viewport for checking the visibility of the target element. If not specified, the browser viewport is used.
- **rootMargin**: Margin around the root element. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px".
- **threshold**: A single number or an array of numbers indicating at what percentage of the target's visibility the observer's callback should be executed. Can be any number between 0 and 1. A value of 0 means that the observer's callback will be executed as soon as even one pixel of the target element is visible on the screen. A value of 1 means that the observer's callback will only be executed when the entire target element is visible on the screen.

## Conclusion

The **useIntersectionObserver** hook is a useful tool for creating dynamic and responsive UI components in React. By tracking the visibility of HTML elements on the screen, you can create effects such as lazy loading of images, infinite scrolling, and more. Try it out in your next React project!