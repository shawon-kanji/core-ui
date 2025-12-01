# Core UI Design System Plan

> A comprehensive design system for building consistent, accessible, and scalable React applications across the organization.

---

## Table of Contents

1. [Design Tokens](#design-tokens)
2. [Component Categories](#component-categories)
3. [Component Specifications](#component-specifications)
4. [Playbook Page Template](#playbook-page-template)

---

## Design Tokens

Before building components, establish these foundational tokens:

### Colors

| Token | Purpose |
|-------|---------|
| `primary` | Brand primary color (50-950 scale) |
| `secondary` | Secondary brand color |
| `neutral` | Grays for text, borders, backgrounds |
| `success` | Positive actions/states |
| `warning` | Caution states |
| `error` | Error/destructive states |
| `info` | Informational states |

### Spacing Scale

```
0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64
(in 4px base units: 0, 4px, 8px, 12px, 16px, 20px, 24px, 32px...)
```

### Typography Scale

| Token | Size | Line Height | Use Case |
|-------|------|-------------|----------|
| `xs` | 12px | 16px | Captions, labels |
| `sm` | 14px | 20px | Secondary text |
| `base` | 16px | 24px | Body text |
| `lg` | 18px | 28px | Large body |
| `xl` | 20px | 28px | Small headings |
| `2xl` | 24px | 32px | Section headings |
| `3xl` | 30px | 36px | Page headings |
| `4xl` | 36px | 40px | Display |
| `5xl` | 48px | 48px | Hero |

### Grid System

| Breakpoint | Min Width | Columns | Gutter | Margin |
|------------|-----------|---------|--------|--------|
| `xs` | 0px | 4 | 16px | 16px |
| `sm` | 640px | 8 | 24px | 24px |
| `md` | 768px | 12 | 24px | 32px |
| `lg` | 1024px | 12 | 32px | 48px |
| `xl` | 1280px | 12 | 32px | 64px |
| `2xl` | 1536px | 12 | 32px | 80px |

### Border Radius

| Token | Value | Use Case |
|-------|-------|----------|
| `none` | 0 | Sharp edges |
| `sm` | 2px | Subtle rounding |
| `md` | 4px | Default |
| `lg` | 8px | Cards, modals |
| `xl` | 12px | Large cards |
| `2xl` | 16px | Feature cards |
| `full` | 9999px | Pills, avatars |

### Shadows

| Token | Use Case |
|-------|----------|
| `xs` | Subtle depth |
| `sm` | Buttons, inputs |
| `md` | Cards, dropdowns |
| `lg` | Modals, popovers |
| `xl` | Dialogs |

---

## Component Categories

### 1. Layout Components

| Component | Description | Priority |
|-----------|-------------|----------|
| `Container` | Max-width wrapper with responsive padding | 🔴 High |
| `Grid` | CSS Grid-based layout system | 🔴 High |
| `Stack` | Vertical/horizontal flex layout | 🔴 High |
| `Box` | Primitive layout building block | 🔴 High |
| `Divider` | Visual separator | 🟡 Medium |
| `Spacer` | Flexible space filler | 🟡 Medium |
| `AspectRatio` | Fixed aspect ratio container | 🟢 Low |

### 2. Typography Components

| Component | Description | Priority |
|-----------|-------------|----------|
| `Heading` | H1-H6 headings | 🔴 High |
| `Text` | Paragraph and inline text | 🔴 High |
| `Label` | Form labels | 🔴 High |
| `Code` | Inline code | 🟡 Medium |
| `Kbd` | Keyboard shortcuts | 🟢 Low |

### 3. Form Components

| Component | Description | Priority |
|-----------|-------------|----------|
| `Button` | Primary action trigger | 🔴 High |
| `IconButton` | Icon-only button | 🔴 High |
| `Input` | Text input field | 🔴 High |
| `Textarea` | Multi-line text input | 🔴 High |
| `Select` | Dropdown selection | 🔴 High |
| `Checkbox` | Boolean selection | 🔴 High |
| `Radio` | Single selection from group | 🔴 High |
| `Switch` | Toggle on/off | 🔴 High |
| `Slider` | Range selection | 🟡 Medium |
| `DatePicker` | Date selection | 🟡 Medium |
| `TimePicker` | Time selection | 🟡 Medium |
| `FileUpload` | File input | 🟡 Medium |
| `Form` | Form wrapper with validation | 🔴 High |
| `FormField` | Field wrapper with label/error | 🔴 High |

### 4. Data Display Components

| Component | Description | Priority |
|-----------|-------------|----------|
| `Avatar` | User/entity image | 🔴 High |
| `AvatarGroup` | Stacked avatars | 🟡 Medium |
| `Badge` | Status indicator | 🔴 High |
| `Card` | Content container | 🔴 High |
| `Table` | Data table | 🔴 High |
| `DataTable` | Advanced table with sorting/filtering | 🟡 Medium |
| `List` | Ordered/unordered lists | 🟡 Medium |
| `DescriptionList` | Key-value pairs | 🟡 Medium |
| `Tag` | Categorization label | 🔴 High |
| `Stat` | Metric display | 🟡 Medium |
| `EmptyState` | No data placeholder | 🟡 Medium |

### 5. Feedback Components

| Component | Description | Priority |
|-----------|-------------|----------|
| `Alert` | Contextual messages | 🔴 High |
| `Toast` | Temporary notifications | 🔴 High |
| `Progress` | Progress indicator | 🟡 Medium |
| `Spinner` | Loading indicator | 🔴 High |
| `Skeleton` | Content placeholder | 🔴 High |

### 6. Overlay Components

| Component | Description | Priority |
|-----------|-------------|----------|
| `Modal` | Dialog overlay | 🔴 High |
| `Drawer` | Slide-in panel | 🔴 High |
| `Popover` | Floating content | 🔴 High |
| `Tooltip` | Hover information | 🔴 High |
| `DropdownMenu` | Action menu | 🔴 High |
| `ContextMenu` | Right-click menu | 🟡 Medium |
| `AlertDialog` | Confirmation dialog | 🔴 High |

### 7. Navigation Components

| Component | Description | Priority |
|-----------|-------------|----------|
| `Navbar` | Top navigation bar | 🔴 High |
| `Sidebar` | Side navigation | 🔴 High |
| `Breadcrumb` | Navigation path | 🔴 High |
| `Tabs` | Tabbed navigation | 🔴 High |
| `Pagination` | Page navigation | 🔴 High |
| `Link` | Navigation link | 🔴 High |
| `Menu` | Vertical menu | 🟡 Medium |
| `Steps` | Step indicator | 🟡 Medium |

### 8. Media Components

| Component | Description | Priority |
|-----------|-------------|----------|
| `Image` | Optimized image | 🟡 Medium |
| `Icon` | SVG icon wrapper | 🔴 High |
| `Video` | Video player | 🟢 Low |

### 9. Utility Components

| Component | Description | Priority |
|-----------|-------------|----------|
| `Portal` | Render outside DOM hierarchy | 🔴 High |
| `VisuallyHidden` | Accessible hidden content | 🔴 High |
| `FocusTrap` | Trap focus within element | 🔴 High |
| `Transition` | Animation wrapper | 🟡 Medium |

---

## Component Specifications

### Button

```typescript
interface ButtonProps {
  /** Visual style variant */
  variant?: 'solid' | 'outline' | 'ghost' | 'link';

  /** Color scheme */
  colorScheme?: 'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'error';

  /** Size of the button */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /** Full width button */
  fullWidth?: boolean;

  /** Disabled state */
  disabled?: boolean;

  /** Loading state */
  loading?: boolean;

  /** Loading text (replaces children when loading) */
  loadingText?: string;

  /** Icon on the left */
  leftIcon?: React.ReactNode;

  /** Icon on the right */
  rightIcon?: React.ReactNode;

  /** Button type */
  type?: 'button' | 'submit' | 'reset';

  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /** Button content */
  children: React.ReactNode;

  /** Additional class names */
  className?: string;
}
```

---

### Input

```typescript
interface InputProps {
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';

  /** Size of the input */
  size?: 'sm' | 'md' | 'lg';

  /** Visual variant */
  variant?: 'outline' | 'filled' | 'flushed';

  /** Placeholder text */
  placeholder?: string;

  /** Default value (uncontrolled) */
  defaultValue?: string;

  /** Controlled value */
  value?: string;

  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /** Disabled state */
  disabled?: boolean;

  /** Read-only state */
  readOnly?: boolean;

  /** Required field */
  required?: boolean;

  /** Error state */
  isInvalid?: boolean;

  /** Element on the left inside input */
  leftElement?: React.ReactNode;

  /** Element on the right inside input */
  rightElement?: React.ReactNode;

  /** Addon on the left outside input */
  leftAddon?: React.ReactNode;

  /** Addon on the right outside input */
  rightAddon?: React.ReactNode;

  /** Additional class names */
  className?: string;
}
```

---

### Card

```typescript
interface CardProps {
  /** Visual variant */
  variant?: 'elevated' | 'outline' | 'filled' | 'unstyled';

  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg';

  /** Border radius */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl';

  /** Clickable/hoverable */
  isHoverable?: boolean;

  /** Pressable/clickable */
  isPressable?: boolean;

  /** Click handler */
  onClick?: () => void;

  /** Card content */
  children: React.ReactNode;

  /** Additional class names */
  className?: string;
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}
```

---

### Modal

```typescript
interface ModalProps {
  /** Open state */
  isOpen: boolean;

  /** Close handler */
  onClose: () => void;

  /** Size of the modal */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /** Close on overlay click */
  closeOnOverlayClick?: boolean;

  /** Close on Escape key */
  closeOnEsc?: boolean;

  /** Show close button */
  showCloseButton?: boolean;

  /** Center modal vertically */
  isCentered?: boolean;

  /** Scroll behavior */
  scrollBehavior?: 'inside' | 'outside';

  /** Preserve scroll position */
  preserveScrollBarGap?: boolean;

  /** Modal content */
  children: React.ReactNode;
}

interface ModalHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface ModalBodyProps {
  children: React.ReactNode;
  className?: string;
}

interface ModalFooterProps {
  children: React.ReactNode;
  className?: string;
}
```

---

### Alert

```typescript
interface AlertProps {
  /** Status/color scheme */
  status?: 'info' | 'success' | 'warning' | 'error';

  /** Visual variant */
  variant?: 'subtle' | 'solid' | 'left-accent' | 'top-accent';

  /** Alert title */
  title?: string;

  /** Alert description/content */
  children: React.ReactNode;

  /** Closable alert */
  isClosable?: boolean;

  /** Close handler */
  onClose?: () => void;

  /** Custom icon */
  icon?: React.ReactNode;

  /** Additional class names */
  className?: string;
}
```

---

### Table

```typescript
interface TableProps {
  /** Visual variant */
  variant?: 'simple' | 'striped' | 'unstyled';

  /** Size */
  size?: 'sm' | 'md' | 'lg';

  /** Layout algorithm */
  layout?: 'auto' | 'fixed';

  /** Additional class names */
  className?: string;

  children: React.ReactNode;
}

interface TableHeadProps {
  children: React.ReactNode;
  className?: string;
}

interface TableBodyProps {
  children: React.ReactNode;
  className?: string;
}

interface TableRowProps {
  /** Hoverable row */
  isHoverable?: boolean;

  /** Selected state */
  isSelected?: boolean;

  children: React.ReactNode;
  className?: string;
}

interface TableCellProps {
  /** Header cell */
  isHeader?: boolean;

  /** Numeric content (right-aligned) */
  isNumeric?: boolean;

  children: React.ReactNode;
  className?: string;
}
```

---

### Avatar

```typescript
interface AvatarProps {
  /** Image source */
  src?: string;

  /** Alt text */
  alt?: string;

  /** Fallback name (generates initials) */
  name?: string;

  /** Size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  /** Border radius */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';

  /** Show online/offline status */
  showStatus?: boolean;

  /** Status value */
  status?: 'online' | 'offline' | 'busy' | 'away';

  /** Fallback icon */
  icon?: React.ReactNode;

  /** Additional class names */
  className?: string;
}
```

---

### Tabs

```typescript
interface TabsProps {
  /** Controlled active tab */
  value?: string;

  /** Default active tab (uncontrolled) */
  defaultValue?: string;

  /** Change handler */
  onChange?: (value: string) => void;

  /** Visual variant */
  variant?: 'line' | 'enclosed' | 'soft-rounded' | 'solid-rounded';

  /** Color scheme */
  colorScheme?: 'primary' | 'secondary' | 'neutral';

  /** Size */
  size?: 'sm' | 'md' | 'lg';

  /** Orientation */
  orientation?: 'horizontal' | 'vertical';

  /** Fit tabs to container width */
  isFitted?: boolean;

  children: React.ReactNode;
}

interface TabListProps {
  children: React.ReactNode;
  className?: string;
}

interface TabProps {
  /** Tab value/id */
  value: string;

  /** Disabled state */
  disabled?: boolean;

  /** Left icon */
  leftIcon?: React.ReactNode;

  /** Right icon */
  rightIcon?: React.ReactNode;

  children: React.ReactNode;
  className?: string;
}

interface TabPanelProps {
  /** Corresponding tab value */
  value: string;

  children: React.ReactNode;
  className?: string;
}
```

---

### Badge

```typescript
interface BadgeProps {
  /** Visual variant */
  variant?: 'solid' | 'subtle' | 'outline';

  /** Color scheme */
  colorScheme?: 'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'error';

  /** Size */
  size?: 'sm' | 'md' | 'lg';

  /** Border radius */
  radius?: 'none' | 'sm' | 'md' | 'full';

  /** Dot indicator (no content) */
  dot?: boolean;

  children?: React.ReactNode;
  className?: string;
}
```

---

### Stack

```typescript
interface StackProps {
  /** Direction */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';

  /** Responsive direction */
  responsiveDirection?: {
    base?: 'row' | 'column';
    sm?: 'row' | 'column';
    md?: 'row' | 'column';
    lg?: 'row' | 'column';
    xl?: 'row' | 'column';
  };

  /** Gap between items */
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;

  /** Align items on cross axis */
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';

  /** Justify content on main axis */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

  /** Wrap items */
  wrap?: boolean;

  /** Show dividers between items */
  divider?: React.ReactNode;

  children: React.ReactNode;
  className?: string;
}
```

---

### Grid

```typescript
interface GridProps {
  /** Number of columns */
  columns?: number | {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };

  /** Gap between items */
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;

  /** Row gap */
  rowGap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;

  /** Column gap */
  columnGap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;

  /** Align items */
  align?: 'start' | 'center' | 'end' | 'stretch';

  /** Justify items */
  justify?: 'start' | 'center' | 'end' | 'stretch';

  children: React.ReactNode;
  className?: string;
}

interface GridItemProps {
  /** Column span */
  colSpan?: number | {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };

  /** Row span */
  rowSpan?: number;

  /** Column start */
  colStart?: number;

  /** Column end */
  colEnd?: number;

  children: React.ReactNode;
  className?: string;
}
```

---

## Playbook Page Template

Each component should have a dedicated playbook page following this structure:

```
/packages/playbook/src/pages/components/[ComponentName].tsx
```

### Template Structure

```tsx
// Example: ButtonPage.tsx

import { useState } from 'react';
import { Button } from 'core-ui';

export default function ButtonPage() {
  return (
    <div className="space-y-12">
      {/* ============================================ */}
      {/* HEADER SECTION */}
      {/* ============================================ */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">Button</h1>
        <p className="text-lg text-neutral-600">
          Buttons allow users to take actions with a single tap.
        </p>

        {/* Component metadata */}
        <div className="flex gap-4 text-sm">
          <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
            Stable
          </span>
          <span className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded">
            v1.0.0
          </span>
        </div>
      </header>

      {/* ============================================ */}
      {/* QUICK START */}
      {/* ============================================ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Quick Start</h2>

        <div className="p-4 bg-neutral-50 rounded-lg font-mono text-sm">
          {`import { Button } from 'core-ui';`}
        </div>

        {/* Basic usage example */}
        <div className="p-6 border rounded-lg">
          <Button>Click me</Button>
        </div>
      </section>

      {/* ============================================ */}
      {/* VARIANTS SECTION */}
      {/* ============================================ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Variants</h2>
        <p className="text-neutral-600">
          Different visual styles for different contexts.
        </p>

        <ComponentShowcase title="Visual Variants">
          <div className="flex flex-wrap gap-4">
            <Button variant="solid">Solid</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </ComponentShowcase>
      </section>

      {/* ============================================ */}
      {/* SIZES SECTION */}
      {/* ============================================ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Sizes</h2>
        <p className="text-neutral-600">
          Available in multiple sizes to fit your layout.
        </p>

        <ComponentShowcase title="Button Sizes">
          <div className="flex flex-wrap items-center gap-4">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
        </ComponentShowcase>
      </section>

      {/* ============================================ */}
      {/* COLOR SCHEMES SECTION */}
      {/* ============================================ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Color Schemes</h2>

        <ComponentShowcase title="Available Colors">
          <div className="flex flex-wrap gap-4">
            <Button colorScheme="primary">Primary</Button>
            <Button colorScheme="secondary">Secondary</Button>
            <Button colorScheme="success">Success</Button>
            <Button colorScheme="warning">Warning</Button>
            <Button colorScheme="error">Error</Button>
          </div>
        </ComponentShowcase>
      </section>

      {/* ============================================ */}
      {/* STATES SECTION */}
      {/* ============================================ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">States</h2>

        <ComponentShowcase title="Button States">
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
            <Button loading loadingText="Saving...">Save</Button>
          </div>
        </ComponentShowcase>
      </section>

      {/* ============================================ */}
      {/* WITH ICONS SECTION */}
      {/* ============================================ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">With Icons</h2>

        <ComponentShowcase title="Icon Buttons">
          <div className="flex flex-wrap gap-4">
            <Button leftIcon={<PlusIcon />}>Add Item</Button>
            <Button rightIcon={<ArrowRightIcon />}>Continue</Button>
            <Button leftIcon={<DownloadIcon />} rightIcon={<ExternalIcon />}>
              Download
            </Button>
          </div>
        </ComponentShowcase>
      </section>

      {/* ============================================ */}
      {/* INTERACTIVE PLAYGROUND */}
      {/* ============================================ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Playground</h2>
        <p className="text-neutral-600">
          Experiment with different prop combinations.
        </p>

        <InteractivePlayground
          component={Button}
          defaultProps={{
            children: 'Button',
            variant: 'solid',
            colorScheme: 'primary',
            size: 'md',
          }}
          propControls={{
            variant: {
              type: 'select',
              options: ['solid', 'outline', 'ghost', 'link'],
            },
            colorScheme: {
              type: 'select',
              options: ['primary', 'secondary', 'success', 'warning', 'error'],
            },
            size: {
              type: 'select',
              options: ['xs', 'sm', 'md', 'lg', 'xl'],
            },
            disabled: { type: 'boolean' },
            loading: { type: 'boolean' },
            fullWidth: { type: 'boolean' },
          }}
        />
      </section>

      {/* ============================================ */}
      {/* PROPS TABLE */}
      {/* ============================================ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>

        <PropsTable
          props={[
            {
              name: 'variant',
              type: "'solid' | 'outline' | 'ghost' | 'link'",
              default: "'solid'",
              description: 'Visual style variant',
            },
            {
              name: 'colorScheme',
              type: "'primary' | 'secondary' | 'success' | 'warning' | 'error'",
              default: "'primary'",
              description: 'Color scheme',
            },
            {
              name: 'size',
              type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
              default: "'md'",
              description: 'Size of the button',
            },
            {
              name: 'disabled',
              type: 'boolean',
              default: 'false',
              description: 'Disabled state',
            },
            {
              name: 'loading',
              type: 'boolean',
              default: 'false',
              description: 'Loading state',
            },
            {
              name: 'loadingText',
              type: 'string',
              default: '-',
              description: 'Text to show when loading',
            },
            {
              name: 'leftIcon',
              type: 'ReactNode',
              default: '-',
              description: 'Icon on the left',
            },
            {
              name: 'rightIcon',
              type: 'ReactNode',
              default: '-',
              description: 'Icon on the right',
            },
            {
              name: 'fullWidth',
              type: 'boolean',
              default: 'false',
              description: 'Full width button',
            },
          ]}
        />
      </section>

      {/* ============================================ */}
      {/* ACCESSIBILITY */}
      {/* ============================================ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Accessibility</h2>

        <ul className="list-disc list-inside space-y-2 text-neutral-600">
          <li>Uses native <code>&lt;button&gt;</code> element</li>
          <li>Supports keyboard navigation (Tab, Enter, Space)</li>
          <li>Disabled buttons are not focusable</li>
          <li>Loading state announces to screen readers</li>
          <li>Color contrast meets WCAG 2.1 AA standards</li>
        </ul>
      </section>

      {/* ============================================ */}
      {/* DESIGN GUIDELINES */}
      {/* ============================================ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Design Guidelines</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 border-l-4 border-green-500 bg-green-50">
            <h3 className="font-semibold text-green-800">Do</h3>
            <ul className="mt-2 space-y-1 text-green-700 text-sm">
              <li>✓ Use primary for main actions</li>
              <li>✓ Use consistent button sizes in a group</li>
              <li>✓ Provide loading feedback for async actions</li>
              <li>✓ Use descriptive button labels</li>
            </ul>
          </div>

          <div className="p-4 border-l-4 border-red-500 bg-red-50">
            <h3 className="font-semibold text-red-800">Don't</h3>
            <ul className="mt-2 space-y-1 text-red-700 text-sm">
              <li>✗ Don't use multiple primary buttons</li>
              <li>✗ Don't use vague labels like "Click here"</li>
              <li>✗ Don't disable without explanation</li>
              <li>✗ Don't mix button sizes randomly</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* RELATED COMPONENTS */}
      {/* ============================================ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Related Components</h2>

        <div className="flex flex-wrap gap-2">
          <Link to="/components/icon-button">IconButton</Link>
          <Link to="/components/link">Link</Link>
          <Link to="/components/dropdown-menu">DropdownMenu</Link>
        </div>
      </section>
    </div>
  );
}
```

---

### Reusable Playbook Components

Create these helper components for consistent documentation:

```
/packages/playbook/src/components/
├── ComponentShowcase.tsx    # Display component with optional code
├── PropsTable.tsx           # Render props documentation table
├── InteractivePlayground.tsx # Live prop editor
├── CodeBlock.tsx            # Syntax highlighted code
├── PageHeader.tsx           # Consistent page header
├── DosDonts.tsx             # Design guidelines
└── RelatedComponents.tsx    # Links to related components
```

---

## Implementation Roadmap

### Phase 1: Foundation (Week 1-2)
- [ ] Design tokens (colors, spacing, typography)
- [ ] Tailwind configuration
- [ ] Base utilities (`cn()` function)
- [ ] Button component
- [ ] Input component
- [ ] Playbook infrastructure

### Phase 2: Core Components (Week 3-4)
- [ ] Typography (Heading, Text, Label)
- [ ] Layout (Stack, Grid, Container, Box)
- [ ] Card
- [ ] Badge / Tag
- [ ] Avatar
- [ ] Spinner / Skeleton

### Phase 3: Form Components (Week 5-6)
- [ ] Textarea
- [ ] Select
- [ ] Checkbox
- [ ] Radio
- [ ] Switch
- [ ] FormField wrapper

### Phase 4: Overlays & Feedback (Week 7-8)
- [ ] Modal
- [ ] Drawer
- [ ] Tooltip
- [ ] Popover
- [ ] Alert
- [ ] Toast

### Phase 5: Navigation (Week 9-10)
- [ ] Tabs
- [ ] Breadcrumb
- [ ] Pagination
- [ ] Link
- [ ] DropdownMenu

### Phase 6: Data Display (Week 11-12)
- [ ] Table
- [ ] List
- [ ] EmptyState
- [ ] Stat

---

## File Structure

```
packages/ui/
├── src/
│   ├── index.ts                 # Main exports
│   ├── index.css                # Global styles
│   │
│   ├── tokens/                  # Design tokens
│   │   ├── colors.ts
│   │   ├── spacing.ts
│   │   ├── typography.ts
│   │   └── index.ts
│   │
│   ├── components/              # All components
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.stories.tsx  # Optional Storybook
│   │   │   └── index.ts
│   │   ├── Input/
│   │   │   ├── Input.tsx
│   │   │   └── index.ts
│   │   └── ...
│   │
│   ├── hooks/                   # Shared hooks
│   │   ├── useDisclosure.ts
│   │   ├── useMediaQuery.ts
│   │   └── index.ts
│   │
│   └── lib/                     # Utilities
│       ├── utils.ts             # cn() and helpers
│       └── index.ts
│
└── package.json
```

---

## Next Steps

1. **Review and approve** this component plan
2. **Finalize design tokens** with your design team
3. **Set up Tailwind config** with custom theme
4. **Build playbook infrastructure** (layout, routing, helper components)
5. **Start with Button** as the reference implementation
6. **Iterate** on the pattern, then scale to other components

---

*Document Version: 1.0.0*
*Last Updated: December 2024*
