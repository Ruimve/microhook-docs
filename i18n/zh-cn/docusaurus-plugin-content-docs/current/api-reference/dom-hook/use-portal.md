---
sidebar_position: 1
description: 使用 portals 在指定容器中渲染内容的 React Hook。
---

# usePortal

<head>
  <meta name="keywords" content="React Portal Rendering（React Portal渲染）是指使用 React 提供的 createPortal API 在指定的容器中渲染内容的技术。使用 Portal 可以将动态的 UI 组件渲染到指定的 HTML 元素中，从而提供更好的容器管理和灵活性。Portal 的组成也是 React 组件，可以使用高阶组件（HOC）模式来包装组件，从而实现更好的复用性。使用 Portal 可以轻松地渲染 DOM 元素，同时也支持在 React 中进行嵌套渲染。" />
</head>

**usePortal** 是一个自定义的 React Hook，用于在 DOM 中的不同位置呈现 React 组件，而不是它的父容器。这对于创建模态对话框、工具提示和其他需要相对于 DOM 元素定位的组件非常有用。

## 安装

要使用 **usePortal**，需要将其作为依赖项安装在您的 React 项目中。您可以通过 **npm** 或 **yarn** 进行安装。

```bash
npm install microhook
```

```bash
yarn add microhook
```

## 用法

```tsx
import { useCallback } from 'react';
import { usePortal } from '@yourorg/use-portal';

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

在上面的例子中，我们定义了一个 **MyComponent**，它使用 **usePortal** Hook 将组件的内容呈现到 `document.body` 元素。

## API

### usePortal(callback, container)

**usePortal** Hook 接受两个参数：

- **callback**：返回要呈现的内容的函数。这个函数应该被包装在 **useCallback** Hook 和 React.memo 高阶组件中，以防止不必要的重新渲染。

- **container**：对应要呈现内容的容器元素的引用。

**usePortal** Hook 返回一个元组，其中包含 **undefined** 和一个 **Action** 对象。**Action** 对象包含一个 **render** 函数，可以调用该函数将内容呈现到指定的容器中。

### 示例

```tsx
import { useCallback } from 'react';
import { usePortal } from '@yourorg/use-portal';

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

在上面的例子中，我们添加了一个按钮，当点击时，调用 **usePortal** 返回的 **renderPortal** 函数，将内容呈现到指定的容器中。