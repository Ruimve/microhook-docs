---
sidebar_position: 1
---

# 简介

你是否已经厌倦了臃肿的库让你的 React 应用变慢？ 🐌 你是否正在寻找一种轻量级的解决方案来处理你的组件逻辑？ 🤔 那么不要再寻找了，Microhook 就是你需要的！🚀

## 🧐 什么是 Microhook？

Microhook 是一个小型的 React hooks 库，旨在简化你的代码并提高性能。使用 Microhook，你可以轻松地管理组件状态、处理副作用等，所有这些都包含在一个紧凑且易于使用的软件包中。

## 🌟 特性

Microhook 提供了一系列强大的功能，帮助你构建更好的 React 应用程序。以下是其中一些亮点：

- **🚀 轻量级：**
Microhook 是可用的最小 React hooks 库之一，只有几个千字节，不会减慢应用程序的速度或使包大小变得臃肿。

- **🎣 易于使用：**
Microhook hooks 的设计旨在简单易用，具有直观的 API，使处理复杂逻辑变得轻松。

- **🕵️‍♀️ 全部类型化：**
Microhook 完全类型化，因此您可以放心，您的代码将按预期工作，而无需进行大量的测试或调试。

- **🌈 可自定义：**
使用 Microhook，你可以轻松地定制你的 hooks 以适应你的特定需求，而不会影响性能或可读性。

## 🤖 使用示例

这里是一个简单的示例，演示如何使用 Microhook 来管理组件状态：

```tsx
import { useLoading } from 'microhook';
/**
 * @input 
 * import { useLoading } from 'microhook';
 */

function fetchData(keyword: string) {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve(keyword + ': data received')
    }, 2000)
  })
}

function Demo() {
  const [result, { wrapRequset: requestData }] = useLoading<typeof fetchData>(fetchData);

  const handleClick = () => {
    requestData('1');
  }

  return <div>
    <button onClick={handleClick}>start fetch</button>
    <div>
      {
        result.loading ? 'loading' : result.data
      }
    </div>
  </div>
}

export {
  Demo
}
```

只需要几行代码，你就可以轻松地管理组件状态。

## 🤝 贡献

我们欢迎对 Microhook 进行贡献！无论你发现了 bug，还是有一个功能请求，或者想提交一个拉取请求，我们都很乐意听到你的声音。请查看我们的[贡献指南](https://github.com/Ruimve/microhook/blob/master/CONTRIBUTING.md)了解更多信息。

## 📖 文档

要了解如何使用 Microhook 的完整文档，请查看我们的[文档站点](https://github.com/Ruimve/microhook/blob/master/README.md)。

## 💻 支持

如果您在使用 Microhook 时遇到任何问题，请随时[提交问题](https://github.com/Ruimve/microhook/issues)或通过 [Twitter] (https://twitter.com/ruimve159626)与我们联系。我们非常乐意帮助！

## 🔜 路线图

我们计划为 Microhook 添加许多令人兴奋的功能，包括更多用于处理数据请求的 hooks、改进性能优化等。敬请期待更新！

## 🎉 结论

如果您正在寻找一种轻量级、易于使用的解决方案来管理状态和处理 React 应用程序中的逻辑，那么 Microhook 是您的理想选择。今天就试用它，看看它与众不同之处！🎉