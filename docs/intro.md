---
sidebar_position: 1
---

# Introduction

Are you tired of bloated libraries that slow down your React applications? 🐌 Are you looking for a lightweight solution to handle your component logic? 🤔 Then look no further than Microhook! 🚀

## 🧐 What is Microhook?

Microhook is a tiny library of React hooks designed to simplify your code and improve performance. With Microhook, you can easily manage component state, handle side effects, and more, all in a compact and easy-to-use package.

## 🌟 Features

Microhook offers a range of powerful features to help you build better React applications. Here are just a few of the highlights:

- **🚀 Lightweight:** 
At just a few kilobytes, Microhook is one of the smallest React hooks libraries available. It won't slow down your application or bloat your bundle size.

- **🎣 Easy to Use:** 
Microhook hooks are designed to be simple and easy to use, with intuitive APIs that make it easy to handle complex logic.

- **🕵️‍♀️ Fully Typed:** 
Microhook is fully typed, so you can be confident that your code will work as expected, without the need for extensive testing or debugging.

- **🌈 Customizable:** 
With Microhook, you can easily customize your hooks to fit your specific needs, without sacrificing performance or readability.

## 🤖 Example Usage

Here's a simple example of how you can use Microhook to manage component state:

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

With just a few lines of code, you can easily manage state in your component.

## 🤝 Contributing
We welcome contributions to Microhook! Whether you find a bug, have a feature request, or want to submit a pull request, we'd love to hear from you. Check out our [contributing guidelines](https://github.com/Ruimve/microhook/blob/master/CONTRIBUTING.md) for more information.

## 📖 Documentation
For full documentation on how to use Microhook, check out our [documentation site](https://github.com/Ruimve/microhook/blob/master/README.md).

## 💻 Support
If you run into any issues with Microhook, feel free to [open an issue](https://github.com/Ruimve/microhook/issues) or reach out to us on [Twitter](https://twitter.com/ruimve159626). We're always happy to help!

## 🔜 Roadmap
We have a lot of exciting features planned for Microhook, including more hooks for handling data requests, improved performance optimizations, and more. Stay tuned for updates!

## 🎉 Conclusion
If you're looking for a lightweight, easy-to-use solution for managing state and handling logic in your React applications, Microhook is the perfect choice. Try it out today and see the difference for yourself! 🎉