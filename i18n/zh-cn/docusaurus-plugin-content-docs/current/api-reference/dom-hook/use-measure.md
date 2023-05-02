---
sidebar_position: 2
description: 一个用于在 React 中测量 HTML 元素尺寸和位置的 Hook。
---

# useMeasure

<head>
  <meta name="keywords" content="React useMeasure hook，用于测量React元素的尺寸和位置，获取React元素的尺寸，使用ResizeObserver、useCallback、useEffect、RefObject等技术。" />
</head>

**useMeasure** 钩子是一个React钩子，用于测量 HTML 元素的尺寸和位置。它使用 **ResizeObserver** API来检测元素大小的变化，并返回一个包含元素尺寸的 **Measure** 对象。这个钩子对于实现响应式设计或在应用程序中需要知道元素尺寸的任何场景都很有用。

## 安装

要使用 **useMeasure**，您需要将其作为依赖项安装到您的 React 项目中。您可以通过 **npm** 或 **yarn** 完成此操作。

```bash
npm install microhook
```

```bash
yarn add microhook
```

## 用法

要使用 **useMeasure** 钩子，请将其导入到您的 React 组件中，并将一个 **element** 参数传递给它。**element** 参数可以是表示 CSS 选择器的字符串，也可以是引用您想要测量的元素的 React **RefObject**。

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

在这个例子中，**useMeasure** 钩子传递了CSS选择器 `#my-element`，它会选中一个 id 为 `my-element` 的` <div>` 元素。钩子返回的 **measure** 对象包含元素的尺寸和位置。由于该钩子不执行任何操作，因此 **actions** 对象为空。

## 结论

**useMeasure** 钩子是一个有用的工具，可用于测量您的 React 应用程序中的 HTML 元素的尺寸和位置。它易于使用，提供了一种方便的方式来实现响应式设计或收集有关应用程序中元素的信息。