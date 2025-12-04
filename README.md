# Core UI Monorepo

A modern, standardized React UI component library built with Tailwind CSS and TypeScript, managed as a monorepo.

## 📂 Project Structure

This project is organized as a monorepo using `pnpm` workspaces:

- **`packages/ui`**: The core component library.
  - Built with React, Tailwind CSS, and Vite (Library Mode).
  - Exports ESM and UMD bundles + Type definitions.
  - Fully typed with TypeScript.
- **`packages/playbook`**: Documentation and component showcase application.
  - Interactive playground to view and test components.
  - Built with Vite and React.

## 🚀 Getting Started

### Prerequisites

- Node.js (v22+ recommended)
- pnpm (v22+)

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:shawon-kanji/core-ui.git
   cd core-ui
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

## 🛠 Development Workflow

### Building the UI Library

To build the `core-ui` package:

```bash
pnpm --filter core-ui build
# or from the root to build everything
pnpm build
```

### Running the Playbook

To start the documentation/playground app:

```bash
pnpm --filter playbook dev
```

Open [http://localhost:5173](http://localhost:5173) to view the playbook.

## 📦 Using the Library

To use `core-ui` in another project (once published):

1. Install the package:
   ```bash
   npm install @shawonkanji/core-ui
   # or
   yarn add @shawonkanji/core-ui
   ```

2. Import the CSS in your root file (e.g., `main.tsx` or `App.tsx`):
   ```tsx
   import '@shawonkanji/core-ui/dist/style.css';
   ```

3. Import and use components:
   ```tsx
   import { Button } from '@shawonkanji/core-ui';

   function App() {
     return <Button variant="primary">Click Me</Button>;
   }
   ```

## 🎨 Tailwind Configuration

If you need to customize the theme or scan `core-ui` classes in your consuming application's Tailwind config:

```js
// tailwind.config.js
module.exports = {
  content: [
    // ...
    "./node_modules/@shawonkanji/core-ui/dist/**/*.{js,mjs}",
  ],
  // ...
}
```

## 🧱 Available Components

The library currently includes:
- Alert
- Avatar
- Badge
- Box
- Button
- Card
- Divider
- Input
- Skeleton
- Spinner
- Stack
- Typography

## 📄 License

MIT
