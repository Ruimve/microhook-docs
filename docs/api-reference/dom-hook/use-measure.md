---
sidebar_position: 2
description: A hook to measure the dimensions and position of an HTML element in React.
---

# useMeasure

<head>
  <meta name="keywords" content="React useMeasure hook, measuring React elements, getting dimensions of React elements, ResizeObserver, useCallback, useEffect, RefObject, SEO-friendly React hooks." />
</head>

The **useMeasure** hook is a React hook that is used to measure the dimensions and position of an HTML element. It uses the **ResizeObserver** API to detect changes in the size of the element and returns a **Measure** object that contains the measurements of the element. This hook is useful for implementing responsive designs or for any scenario where you need to know the dimensions of an element in your application.

## Installation

To use **useMeasure**, you need to install it as a dependency in your React project. You can do this via **npm** or **yarn**.

```bash
npm install microhook
```

```bash
yarn add microhook
```

## Usage

To use the **useMeasure** hook, import it into your React component and pass it an **element** argument. The **element** argument can be either a string that represents a CSS selector or a React **RefObject** that references the element you want to measure.

```tsx
import { useMeasure } from 'microhook';

const ExampleComponent = () => {
  const [measure, actions] = useMeasure('#my-element');

  return (
    <div>
      <h1>Element measurements:</h1>
      <ul>
        <li>Width: {measure.width}px</li>
        <li>Height: {measure.height}px</li>
        <li>Top: {measure.top}px</li>
        <li>Right: {measure.right}px</li>
        <li>Bottom: {measure.bottom}px</li>
        <li>Left: {measure.left}px</li>
        <li>X: {measure.x}px</li>
        <li>Y: {measure.y}px</li>
      </ul>
      <div id="my-element">Hello world!</div>
    </div>
  );
};
```

In this example, the **useMeasure** hook is passed a CSS selector **'#my-element'**, which targets the **&lt;div&gt;** element with an id of **my-element**. The **measure** object returned by the hook contains the dimensions and position of the element. The **actions** object is empty, since this hook doesn't perform any actions.

## Conclusion
The **useMeasure** hook is a useful tool for measuring the dimensions and position of an HTML element in your React application. It is easy to use and provides a convenient way to implement responsive designs or to gather information about an element in your application.