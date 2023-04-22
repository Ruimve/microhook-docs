---
sidebar_position: 2
---

# Typescript Support

Microhook is a collection of lightweight and composable React hooks for common UI tasks. In addition to their simplicity and ease of use, each hook in the collection is designed with TypeScript support in mind, allowing you to write type-safe code with ease.

## ReturnValue Type

Each Microhook returns a tuple of two values: the first is the main value that the hook returns (usually a ref object), and the second is an optional object containing additional properties or functions that can be used to interact with the hook.

The type of this tuple is defined as `ReturnValue<T, P extends Object> = [T, P];`, where T is the main value type and P is the type of the additional properties.