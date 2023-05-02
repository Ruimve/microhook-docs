---
sidebar_position: 1
description: 一个React Hook用于管理加载状态，支持异步/等待语法和超时控制。
---

# useLoading

<head>
  <meta name="keywords" content="React useLoading hook，React异步加载，React加载状态管理，处理React加载状态，React组件加载，React异步状态管理，优化React加载时间，提高React加载性能。" />
</head>

**useLoading** 是一个自定义的 React Hook，用于处理 API 或 Promise 的加载状态。它返回一个由两个值组成的元组，一个是 **response** 对象，另一个是 **action** 对象。**response** 对象包含请求返回的加载状态和数据，而 **action** 对象包含一个函数，它包装请求并处理加载状态。

## 安装

要使用 **useLoading**，您需要在 React 项目中将其安装为依赖项。您可以通过 **npm** 或 **yarn** 完成此操作。

```bash
npm install microhook
```

```bash
yarn add microhook
```

## 导入

在 React 组件文件中从包中导入 **useLoading**。

```tsx
import { useLoading } from 'microhook';
```

## 使用

**useLoading** 接受一个函数作为参数，该函数是要执行的 API 或 Promise。它返回一个包含 **response** 对象和 **action** 对象的元组。

```tsx
const [response, { wrapRequset }] = useLoading(apiCall);
```

## Response 对象

**response** 对象包含两个属性：

- **loading**（布尔值）- 表示当前请求是否正在加载。

- **data**（任意类型）- API 返回的数据。默认为 null。

## Action 对象

**action** 对象包含一个属性：

- **wrapRequest**（函数）- 一个函数，用于包装 API 调用并处理加载状态。它接受 API 调用所需的任意数量的参数。

```tsx
const fetchData = async (param1, param2) => {
  // Your API logic
}

const [response, { wrapRequest }] = useLoading(fetchData);

wrapRequest(param1, param2);
```

## 示例

以下是在 React 组件中使用 useLoading 的示例。

```tsx
import React from 'react';
import { useLoading } from 'microhook';
import { getProducts } from './api/products';

const Products = () => {
  const [response, { wrapRequest }] = useLoading(getProducts);

  const handleClick = () => {
    wrapRequest();
  }

  return (
    <div>
      <button onClick={handleClick}>Get Products</button>
      {response.loading && <p>Loading...</p>}
      {response.data && (
        <ul>
          {response.data.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Products;
```

在此示例中，**getProducts** 函数作为参数传递给了 **useLoading**。当单击“获取产品”按钮时，将调用 **wrapRequest** 函数，该函数执行 **getProducts** 函数并处理加载状态。在 API 调用完成之前，加载状态将显示在页面上。完成后，返回的数据将显示为列表。

## 结论

**useLoading** 是一个方便的自定义 React hook，可处理 API 或 Promise 的加载状态。它易于使用，并可集成到任何 React 项目中。