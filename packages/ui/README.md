# Core UI

A React UI kit wrapper using Tailwind CSS.

## Installation

```bash
yarn add core-ui
# or
npm install core-ui
```

## Usage

1. Import the CSS in your main entry file (e.g., `main.tsx` or `App.tsx`):

```tsx
import 'core-ui/dist/style.css';
```

2. Import and use components:

```tsx
import { Button } from 'core-ui';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  );
}
```

## Tailwind Configuration (Optional)

If you want to customize the theme or use the classes directly, you can add the library to your `tailwind.config.js` content:

```js
module.exports = {
  content: [
    // ...
    "./node_modules/core-ui/dist/**/*.{js,mjs}",
  ],
  // ...
}
```
