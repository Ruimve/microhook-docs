---
sidebar_position: 4
description: Detect outside click event and perform action, for React.
---

# useOutClick

<head>
  <meta name="keywords" content="React hook for detecting clicks outside a target element, useOutClick example code and tutorial, React.js onClickOutside hook for modal and dropdown components, How to use useOutClick hook in React for handling click events, Typescript useOutClick hook for closing modals and dropdowns, Handling click events outside React components with useOutClick hook, Better click event handling with useOutClick in React applications" />
</head>

The **useOutClick** hook is a React hook that allows you to detect clicks outside of a specified HTML element. This can be useful for implementing various user interface features, such as closing a modal or hiding a dropdown menu when the user clicks outside of it.

## Installation

To use **useOutClick**, you need to install it as a dependency in your React project. You can do this via **npm** or **yarn**.

```bash
npm install microhook
```

```bash
yarn add microhook
```

## Importing

After installing the hook, you can import it into your component like this:

```tsx
import { useOutClick } from 'microhook';
```

## Usage

The **useOutClick** hook takes a single parameter, which is a callback function to be called when a click outside of the specified element is detected. It returns an array containing a ref object that should be attached to the element that you want to track clicks outside of.

Here is an example of how you can use the **useOutClick** hook:

```tsx
import { useOutClick } from 'microhook';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOutClick = () => {
    setIsOpen(false);
  }

  const [ref] = useOutClick(handleOutClick);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Menu</button>
      {isOpen && (
        <div ref={ref}>
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}
```

In this example, we create a state variable called **isOpen** to keep track of whether the menu is open or closed. We also define a function called **handleOutClick** that sets **isOpen** to **false** when called.

We then call the **useOutClick** hook, passing in **handleOutClick** as the callback function. The hook returns an array containing a ref object, which we attach to the div element that wraps the menu. This allows the hook to detect clicks outside of the menu and call the **handleOutClick** function.

## Conclusion

The **useOutClick** hook is a useful tool for detecting clicks outside of a specified element in your React application. By using this hook, you can implement various user interface features that improve the overall user experience.