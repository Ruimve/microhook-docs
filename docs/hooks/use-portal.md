---
sidebar_position: 5
description: React hook for rendering content in a specified container using portals.
---

# usePortal

<head>
  <meta name="keywords" content="react portal rendering, createPortal API, dynamic UI components, HTML element rendering, container management, portal composition in React, high-order component (HOC) pattern, DOM element rendering, nested rendering in React." />
</head>

**usePortal** is a custom React hook that enables rendering a React component to a different location in the DOM, other than its parent container. This can be useful for creating modal dialogs, tooltips, and other components that need to be positioned relative to an element in the DOM.

## Installation

To use **usePortal**, you need to install it as a dependency in your React project. You can do this via **npm** or **yarn**.

```bash
npm install microhook
```

```bash
yarn add microhook
```

## Usage

```tsx
import { useCallback } from 'react';
import { usePortal } from 'microhook';

interface Props {
  text: string;
}

function MyComponent({ text }: Props) {
  const container = document.body;

  const render = useCallback(() => <div>{text}</div>, [text]);

  usePortal(render, container);

  return null;
}
```

In the above example, we have defined a **MyComponent** that uses the **usePortal** hook to render the component's content to the **document.body** element.

## API

### usePortal(callback, container)

The **usePortal** hook takes two arguments:

- **callback**: A function that returns the content to be rendered. This function should be wrapped in a **useCallback** hook and a **React.memo** higher-order component to prevent unnecessary re-renders.

- **container**: A reference to the container element where the content should be rendered.

The **usePortal** hook returns a tuple containing **undefined** and an **Action** object. The **Action** object contains a **render** function, which can be called to render the content to the specified container.

### Example

```tsx
import { useCallback } from 'react';
import { usePortal } from 'microhook';

interface Props {
  text: string;
}

function MyComponent({ text }: Props) {
  const container = document.body;

  const render = useCallback(() => <div>{text}</div>, [text]);

  const { renderPortal } = usePortal(render, container);

  return (
    <>
      <button onClick={renderPortal}>Render to portal</button>
      <div id="target"></div>
    </>
  );
}
```

In the above example, we have added a button that, when clicked, calls the **renderPortal** function returned by **usePortal** to render the content to the specified container.