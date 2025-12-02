# Core UI

A comprehensive React component library built with Tailwind CSS. Features a rich color palette, customizable theming via CSS variables, and a complete set of production-ready components.

## Features

- 🎨 **Rich Color Palette** - 22 color families with 11 shades each (50-950)
- 🎯 **Semantic Colors** - Primary, Secondary, Success, Warning, Error, Info
- 🔧 **Runtime Theming** - Customize brand colors via CSS variables
- 📦 **70+ Icons** - Built-in SVG icon set
- 🧱 **12+ Components** - Layout, Form, Data Display, and Feedback components
- 📱 **Responsive** - Mobile-first design approach
- 🔒 **TypeScript** - Full type safety with exported types
- ⚡ **Tree-shakeable** - Import only what you need

## Installation

```bash
pnpm add core-ui
# or
npm install core-ui
# or
yarn add core-ui
```

## Quick Start

1. Import the CSS in your main entry file:

```tsx
import 'core-ui/style.css';
```

2. Use components:

```tsx
import { Button, Input, Card, CardBody, Icon } from 'core-ui';

function App() {
  return (
    <Card variant="outline">
      <CardBody>
        <Input
          leftElement={<Icon name="search" size="sm" />}
          placeholder="Search..."
        />
        <Button color="primary">
          <Icon name="plus" size="sm" /> Add Item
        </Button>
      </CardBody>
    </Card>
  );
}
```

## Components

### Layout
- **Box** - Fundamental layout primitive with width, height, padding, margin controls
- **Stack / HStack / VStack** - Flexible layouts for arranging items
- **Divider** - Visual separators (horizontal/vertical)

### Typography
- **Heading** - Semantic headings (h1-h6)
- **Text** - Text with size, weight, color variants
- **Label** - Form labels with required/disabled states
- **Code** - Inline code snippets

### Form
- **Button** - Multiple variants (solid, outline, soft, ghost, link), sizes, colors
- **Input** - Text inputs with variants, addons, and icon elements

### Data Display
- **Card** - Container with Header, Body, Footer sections
- **Badge** - Status labels with dot variant
- **Avatar** - User images with fallback initials and status indicators
- **AvatarGroup** - Stacked avatar display

### Feedback
- **Alert** - Contextual messages (info, success, warning, error)
- **Spinner** - Loading indicators
- **Skeleton** - Content loading placeholders

### Icons
- **Icon** - 70+ SVG icons with size and color variants

## Theming

Customize brand colors via CSS variables:

```css
:root {
  /* Primary brand color */
  --color-primary-50: 239 246 255;
  --color-primary-500: 59 130 246;
  --color-primary-600: 37 99 235;
  /* ... all shades 50-950 */

  /* Secondary brand color */
  --color-secondary-50: 245 243 255;
  --color-secondary-500: 139 92 246;
  /* ... */
}
```

## Tailwind Integration

Add Core UI to your Tailwind content for class scanning:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/core-ui/dist/**/*.{js,mjs}',
  ],
};
```

## Color Palette

Available colors for component props:

**Semantic:** `primary`, `secondary`, `success`, `warning`, `error`, `info`

**Palette:** `slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`

## Icon Usage

```tsx
import { Icon, iconNames } from 'core-ui';

// Basic
<Icon name="check" />
<Icon name="home" size="lg" />
<Icon name="star" strokeWidth={1.5} />

// With colors (inherits text color)
<Icon name="heart" className="text-error-500" />

// List all available icon names
console.log(iconNames);
```

## TypeScript

All components export their prop types:

```tsx
import {
  Button,
  type ButtonProps,
  type ButtonColor,
  Box,
  type BoxProps,
  Icon,
  type IconName,
} from 'core-ui';
```

## License

MIT
