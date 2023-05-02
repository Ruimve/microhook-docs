---
sidebar_position: 2
---

# TypeScript 支持

Microhook 是一个轻量级且可组合的 React Hooks 集合，用于常见的 UI 任务。除了它们的简单性和易用性外，集合中的每个 hook 都是为 TypeScript 支持而设计的，使您可以轻松编写类型安全的代码。

## ReturnValue 类型

每个 Microhook 返回两个值的元组：第一个是钩子返回的主要值（通常是 ref 对象），第二个是可选对象，其中包含其他属性或函数，可以用于与 hook 交互。

此元组的类型定义为 `ReturnValue<T, P extends Object> = [T, P];`， 其中 T 是主值类型，P 是附加属性的类型。