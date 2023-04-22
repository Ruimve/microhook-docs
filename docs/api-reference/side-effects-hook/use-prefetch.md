---
sidebar_position: 1
---

# usePrefetch

The **usePrefetch** hook is a custom React hook that provides an efficient way to prefetch resources such as images, videos, and other media content before they are needed. This can lead to faster page loads and improved user experience. This documentation will guide you on how to use this hook.

## Installation

To use **usePrefetch**, you need to install it as a dependency in your React project. You can do this via **npm** or **yarn**.

```bash
npm install microhook
```

```bash
yarn add microhook
```

## Usage

To use the **usePrefetch** hook, you first need to import it from the module:

```tsx
import { usePrefetch } from './path/to/usePrefetch';
```

You can then use the hook in your component like this:

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

In this example, we are prefetching the image at **https://example.com/image.png**. The **usePrefetch** hook returns an array with two values: the cache and the actions. The cache is an object that holds the resources that have been successfully loaded. The actions is an empty object, and it is not used in this example.

You can also prefetch multiple resources by passing an array of URLs:

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

## Options

The **usePrefetch** hook also accepts an optional options object with the following properties:

- **type**: The type of resource to fetch. The default value is **'image'**. This property can take any value that is valid for the **createResource** function.

- **crossOrigin**: The cross-origin mode for the resource. This property can take either **'anonymous'** or **'use-credentials'** as its value.

- **maxRetryTimes**: The maximum number of times to retry fetching a resource if an error occurs. The default value is **3**.

- **onLoad**: A callback function that is called when a resource is successfully loaded. This function takes the loaded resource as its argument.

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

## Resources

The **usePrefetch** hook uses the **createResource** function to create and manage the resources. You can learn more about this function in the **createResource.js** file in the same directory as the **usePrefetch** hook.

## Conclusion

With the **usePrefetch** hook, you can prefetch resources before they are needed, leading to faster page loads and improved user experience. We hope this documentation has been helpful in getting you started with using this hook.