---
sidebar_position: 7
description: Adjusts the height of an element to fill the remaining vertical space in its container.
---

# useRestHeight

<head>
  <meta name="keywords" content="React hook, height measurement, flexible layout, dynamic content, CSS styles, DOM element, responsive design, TypeScript, front-end development, web development." />
</head>

The **useRestHeight** Hook is a custom React Hook that calculates the remaining height of a parent element after subtracting the height of its child elements and any specified offsets. It returns an array with the remaining height and a function to recalculate the height.

## Installation

To use **useRestHeight**, you need to install it as a dependency in your React project. You can do this via **npm** or **yarn**.

```bash
npm install microhook
```

```bash
yarn add microhook
```

## Usage

Here is an example of how to use the **useRestHeight** Hook:

```tsx
import React, { useRef } from 'react';
import { useRestHeight } from 'microhook';

function MyComponent() {
  const parentRef = useRef(null);
  const childRef1 = useRef(null);
  const childRef2 = useRef(null);

  const [restHeight, { recalculateHeight }] = useRestHeight(
    parentRef,
    [childRef1, childRef2],
    [10, 20],
  );

  return (
    <div ref={parentRef}>
      <div ref={childRef1}>Child element 1</div>
      <div ref={childRef2}>Child element 2</div>
      <div>Remaining height: {restHeight}px</div>
      <button onClick={recalculateHeight}>Recalculate height</button>
    </div>
  );
}
```

The **useRestHeight** Hook takes three arguments:

- **parent**: The parent element or its RefObject.
- **children**: The child elements or their RefObjects.
- **offsets**: An optional array of offsets to subtract from the parent element's height.

The **useRestHeight** Hook returns an array with two elements:

- **restHeight**: The remaining height of the parent element.
- **actions**: An object with the following action:
- **recalculateHeight**: A function that recalculates the height of the parent element.

## Conclusion

The **useRestHeight** Hook is a useful tool for calculating the remaining height of a parent element. It can be helpful in situations where you need to position elements within a container with a fixed height, such as a modal or a sidebar. The Hook is easy to use and comes with a **recalculateHeight** function that makes it simple to update the height whenever the content of the parent or child elements changes.