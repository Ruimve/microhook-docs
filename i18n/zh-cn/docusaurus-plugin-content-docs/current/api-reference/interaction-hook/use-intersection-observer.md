---
sidebar_position: 2
description: 一个用于观察视口中元素相交的 React Hook。
---

# useIntersectionObserver

<head>
  <meta name="keywords" content="useIntersectionObserver，IntersectionObserver，React IntersectionObserver hook，检测元素可见性，跟踪元素交集，观察元素可见性更改，在元素交集时触发操作，React 可见性 hook。" />
</head>

**useIntersectionObserver** 是一个自定义的 React hook，使用 Intersection Observer API 来确定指定的 HTML 元素是否当前可见在屏幕上。该 hook 可以用于实现图片的懒加载、无限滚动或其他需要在用户滚动到页面的某个部分时触发的动态 UI 组件。

## 安装

要使用 **useIntersectionObserver**，你需要在你的 React 项目中安装它作为依赖项。你可以通过 **npm** 或 **yarn** 安装它。

```bash
npm install microhook
```

```bash
yarn add microhook
```

## 使用方法

要在你的 React 组件中使用 **useIntersectionObserver** hook，请按照以下步骤：

1. 在文件的顶部导入该 hook：

```tsx
import { useIntersectionObserver } from 'microhook';
```

2. 为要观察的 HTML 元素创建一个 ref：

```tsx
const myRef = useRef<HTMLDivElement>(null);
```

3. 将 ref 对象和任何可选的选项作为参数传递给 **useIntersectionObserver** hook：

```tsx
const [intersectionEntry, action] = useIntersectionObserver(myRef, {
  root: null,
  rootMargin: '0px',
  threshold: 0,
});
```

**intersectionEntry** 变量将包含当前 IntersectionObserverEntry 对象，表示观察的元素的交叉数据。**action** 变量是一个空对象，可用于触发任何其他操作。

4. 使用 intersectionEntry 对象来有条件地呈现 UI 元素：

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

在此示例中，使用 **intersectionEntry** 对象的 isIntersecting 属性有条件地呈现消息，当观察的元素在屏幕上可见时。

## 选项

**useIntersectionObserver** hook 接受一个可选的 **options** 对象作为第二个参数，具有以下属性：

- **root**：用作检查目标元素的可见性的视口的元素。如果未指定，则使用浏览器视口。
- **rootMargin**：根元素周围的边距。可以有类似于 CSS margin 属性的值，例如“10px 20px 30px 40px”。
- **threshold**：表示观察器回调应在目标可见性的百分比处执行的单个数字或数字数组。可以是 0 到 1 之间的任何数字。值为 0 表示观察器的回调将在目标元素的任何一个像素可见时执行。值为 1 表示观察器的回调只有在整个目标元素可见时才会执行。

## 结论

**useIntersectionObserver** 钩子是在 React 中创建动态和响应式 UI 组件的有用工具。通过跟踪屏幕上 HTML 元素的可见性，您可以创建诸如图像的延迟加载、无限滚动等效果。在您的下一个 React 项目中尝试使用它！