---
sidebar_position: 1
description: 使用usePrefetch hook有效地预取资源，以实现更快的导航。
---

# usePrefetch

<head>
  <meta name="keywords" content="预取数据，预加载数据，性能优化，更快的加载时间，降低延迟，改善用户体验，异步加载，惰性加载，数据缓存，网络效率，Web 应用程序速度，减少服务器负载，React 钩子用于预取。" />
</head>

**usePrefetch** 是一个自定义的 React Hook，提供了一种有效的方式，在需要之前预取资源（例如图片、视频和其他媒体内容）。这可以加快页面加载速度，改善用户体验。本文档将指导您如何使用此 Hook。

## 安装

要使用 **usePrefetch**，您需要在 React 项目中将其安装为依赖项。您可以通过 **npm** 或 **yarn** 来完成此操作。

```bash
npm install microhook
```

```bash
yarn add microhook
```

## 用法

要使用 **usePrefetch** Hook，您首先需要从模块中导入它：

```tsx
import { usePrefetch } from './path/to/usePrefetch';
```

然后您可以在组件中像这样使用 Hook：

```tsx
function MyComponent() {
  const [cache, actions] = usePrefetch('https://example.com/image.png');

  return (
    <div>
      <img src={'https://example.com/image.png'} alt="example image" />
    </div>
  );
}
```

在此示例中，我们正在预取位于 `https://example.com/image.png` 的图像。**usePrefetch** Hook返回一个具有两个值的数组：缓存和操作。缓存是一个对象，保存已成功加载的资源。操作是一个空对象，在此示例中未使用。

您还可以通过传递 URL 数组来预取多个资源：

```tsx
function MyComponent() {
  const [cache, actions] = usePrefetch([
    'https://example.com/image.png',
    'https://example.com/video.mp4'
  ]);

  return (
    <div>
      <img src={'https://example.com/image.png'} alt="example image" />
      <video src={'https://example.com/video.mp4'} controls />
    </div>
  );
}
```

## 选项

**usePrefetch** Hook还接受一个可选的 options 对象，该对象具有以下属性：

- **type**：要获取的资源类型。默认值为 **image**。此属性可以接受 **createResource** 函数有效的任何值。

- **crossOrigin**：资源的跨域模式。此属性可以将其值设置为 **anonymous** 或 **use-credentials**。

- **maxRetryTimes**：如果发生错误，最多尝试多少次获取资源。默认值为 **3**。

- **onLoad**：当资源成功加载时调用的回调函数。此函数以已加载的资源作为其参数。

```tsx
function MyComponent() {
  const handleLoad = (resource) => console.log('Resource loaded:', resource);

  const [cache, actions] = usePrefetch('https://example.com/image.png', {
    type: 'image',
    crossOrigin: 'anonymous',
    maxRetryTimes: 5,
    onLoad: handleLoad
  });

  return (
    <div>
      <img src={'https://example.com/image.png'} alt="example image" />
    </div>
  );
}
```

## 资源

**usePrefetch** hook使用 **createResource** 函数创建和管理资源。您可以在与 **usePrefetch** hook 相同的目录中的 **createResource.js** 文件中了解更多有关此函数的信息。

## 结论

使用 **usePrefetch** hook，您可以在需要之前获取资源，从而实现更快的页面加载和更好的用户体验。我们希望本文档能够帮助您开始使用此 hook。