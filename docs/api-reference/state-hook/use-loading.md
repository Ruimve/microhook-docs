---
sidebar_position: 1
---

# useLoading

**useLoading** is a custom React hook that handles the loading status of an API or Promise. It returns a tuple of two values, a **response** object, and an **action** object. The **response** object contains the loading state and data returned by the request, while the **action** object contains a function that wraps the request and handles the loading state.

## Installation

To use **useLoading**, you need to install it as a dependency in your React project. You can do this via **npm** or **yarn**.

```bash
npm install microhook
```

```bash
yarn add microhook
```

## Importing

Import **useLoading** from the package in your React component file.

```tsx
import { useLoading } from 'microhook';
```

## Usage

**useLoading** takes a function as an argument, which is the API or Promise to be executed. It returns a tuple containing the **response** object and **action** object.

```tsx
const [response, { wrapRequset }] = useLoading(apiCall);
```

## Response Object

The **response** object contains two properties:

- **loading** (boolean) - Indicates whether the request is currently loading or not.

- **data** (any) - The data returned by the request. It is **null** by default.

## Action Object

The **action** object contains one property:

- **wrapRequest** (function) - A function that wraps the API call and handles the loading state. It takes any number of arguments required by the API call.

```tsx
const fetchData = async (param1, param2) => {
  // Your API logic
}

const [response, { wrapRequest }] = useLoading(fetchData);

wrapRequest(param1, param2);
```

## Example

Here is an example of how to use **useLoading** in a React component.

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

In this example, the **getProducts** function is passed as an argument to **useLoading**. The **wrapRequest** function is called when the "Get Products" button is clicked, which executes the **getProducts** function and handles the loading state. The loading state is displayed on the page until the API call is completed. Once completed, the returned data is displayed in a list.

## Conclusion
**useLoading** is a handy custom React hook that handles the loading status of an API or Promise. It is easy to use and can be integrated into any React project.