import { useState } from 'react';
import 'core-ui/style.css';

// Import all components
import {
  Button,
  Input,
  Card, CardHeader, CardBody, CardFooter,
  Badge,
  Avatar, AvatarGroup,
  Stack, HStack, VStack,
  Alert,
  Spinner,
  Skeleton, SkeletonText, SkeletonCircle,
  Text, Heading, Label, Code,
  Divider,
  colors,
} from 'core-ui';

// =============================================
// COMPONENT LIST
// =============================================

const componentCategories = [
  {
    name: 'Getting Started',
    items: [
      { name: 'Colors', id: 'colors' },
      { name: 'Typography', id: 'typography' },
    ],
  },
  {
    name: 'Layout',
    items: [
      { name: 'Stack', id: 'stack' },
      { name: 'Divider', id: 'divider' },
    ],
  },
  {
    name: 'Form',
    items: [
      { name: 'Button', id: 'button' },
      { name: 'Input', id: 'input' },
    ],
  },
  {
    name: 'Data Display',
    items: [
      { name: 'Card', id: 'card' },
      { name: 'Badge', id: 'badge' },
      { name: 'Avatar', id: 'avatar' },
    ],
  },
  {
    name: 'Feedback',
    items: [
      { name: 'Alert', id: 'alert' },
      { name: 'Spinner', id: 'spinner' },
      { name: 'Skeleton', id: 'skeleton' },
    ],
  },
];

// =============================================
// CODE BLOCK COMPONENT
// =============================================

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1.5 rounded bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs"
      >
        {copied ? '✓ Copied' : 'Copy'}
      </button>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
}

// =============================================
// SHOWCASE WRAPPER WITH CODE
// =============================================

function Showcase({ title, description, code, children }: {
  title: string;
  description?: string;
  code?: string;
  children: React.ReactNode;
}) {
  const [showCode, setShowCode] = useState(false);

  return (
    <section className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {code && (
            <button
              onClick={() => setShowCode(!showCode)}
              className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
            >
              {showCode ? '◁ Hide Code' : '▷ Show Code'}
            </button>
          )}
        </div>
        {description && <p className="text-sm text-gray-500 mb-4">{description}</p>}
        <div>{children}</div>
      </div>
      {code && showCode && (
        <div className="border-t border-gray-200 p-4 bg-gray-50">
          <CodeBlock code={code} />
        </div>
      )}
    </section>
  );
}

// =============================================
// COLOR PALETTE PAGE
// =============================================

function ColorsPage() {
  const paletteColors = [
    'slate', 'gray', 'zinc', 'neutral', 'stone',
    'red', 'orange', 'amber', 'yellow', 'lime',
    'green', 'emerald', 'teal', 'cyan', 'sky',
    'blue', 'indigo', 'violet', 'purple', 'fuchsia',
    'pink', 'rose',
  ] as const;

  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

  return (
    <div className="space-y-8">
      <div>
        <Heading as="h2">Colors</Heading>
        <Text color="muted" className="mt-2">
          A rich color palette based on Tailwind CSS. Primary, Secondary, and semantic colors are configurable via CSS variables.
        </Text>
      </div>

      {/* Brand Colors */}
      <Showcase title="Brand Colors (Configurable)" description="These colors use CSS variables and can be customized per organization.">
        <div className="space-y-4">
          {['primary', 'secondary'].map((colorName) => (
            <div key={colorName}>
              <Text weight="medium" className="mb-2 capitalize">{colorName}</Text>
              <div className="flex gap-1">
                {shades.map((shade) => (
                  <div
                    key={shade}
                    className={`h-10 flex-1 rounded flex items-end justify-center pb-1 bg-${colorName}-${shade}`}
                  >
                    <span className={`text-xs ${shade < 400 ? 'text-gray-600' : 'text-white'}`}>
                      {shade}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Showcase>

      {/* Semantic Colors */}
      <Showcase title="Semantic Colors" description="Used for status, feedback, and actions.">
        <div className="space-y-4">
          {['success', 'warning', 'error', 'info'].map((colorName) => (
            <div key={colorName}>
              <Text weight="medium" className="mb-2 capitalize">{colorName}</Text>
              <div className="flex gap-1">
                {shades.map((shade) => (
                  <div
                    key={shade}
                    className={`h-10 flex-1 rounded flex items-end justify-center pb-1 bg-${colorName}-${shade}`}
                  >
                    <span className={`text-xs ${shade < 400 ? 'text-gray-600' : 'text-white'}`}>
                      {shade}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Showcase>

      {/* Full Palette */}
      <Showcase title="Full Color Palette" description="All available colors that can be used via props.">
        <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
          {paletteColors.map((colorName) => (
            <div key={colorName} className="flex items-center gap-2">
              <Text weight="medium" className="w-20 text-sm capitalize">{colorName}</Text>
              <div className="flex gap-0.5 flex-1">
                {shades.map((shade) => (
                  <div
                    key={shade}
                    className="h-8 flex-1 rounded-sm"
                    style={{ backgroundColor: colors[colorName][shade] }}
                    title={`${colorName}-${shade}: ${colors[colorName][shade]}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Showcase>
    </div>
  );
}

// =============================================
// TYPOGRAPHY PAGE
// =============================================

function TypographyPage() {
  return (
    <div className="space-y-8">
      <div>
        <Heading as="h2">Typography</Heading>
        <Text color="muted" className="mt-2">
          Text and heading components for consistent typography.
        </Text>
      </div>

      <Showcase
        title="Headings"
        description="Semantic headings with automatic sizing."
        code={`import { Heading } from 'core-ui';

<Heading as="h1">Heading 1</Heading>
<Heading as="h2">Heading 2</Heading>
<Heading as="h3">Heading 3</Heading>
<Heading as="h4">Heading 4</Heading>
<Heading as="h5">Heading 5</Heading>
<Heading as="h6">Heading 6</Heading>`}
      >
        <VStack align="start" gap={4}>
          <Heading as="h1">Heading 1</Heading>
          <Heading as="h2">Heading 2</Heading>
          <Heading as="h3">Heading 3</Heading>
          <Heading as="h4">Heading 4</Heading>
          <Heading as="h5">Heading 5</Heading>
          <Heading as="h6">Heading 6</Heading>
        </VStack>
      </Showcase>

      <Showcase
        title="Text Sizes"
        code={`import { Text } from 'core-ui';

<Text size="xs">Extra Small (xs)</Text>
<Text size="sm">Small (sm)</Text>
<Text size="base">Base</Text>
<Text size="lg">Large (lg)</Text>
<Text size="xl">Extra Large (xl)</Text>
<Text size="2xl">2XL</Text>`}
      >
        <VStack align="start" gap={2}>
          <Text size="xs">Extra Small (xs) - 12px</Text>
          <Text size="sm">Small (sm) - 14px</Text>
          <Text size="base">Base - 16px</Text>
          <Text size="lg">Large (lg) - 18px</Text>
          <Text size="xl">Extra Large (xl) - 20px</Text>
          <Text size="2xl">2XL - 24px</Text>
        </VStack>
      </Showcase>

      <Showcase
        title="Text Colors"
        code={`<Text color="default">Default</Text>
<Text color="muted">Muted</Text>
<Text color="subtle">Subtle</Text>
<Text color="primary">Primary</Text>
<Text color="success">Success</Text>
<Text color="error">Error</Text>`}
      >
        <HStack gap={6} wrap>
          <Text color="default">Default</Text>
          <Text color="muted">Muted</Text>
          <Text color="subtle">Subtle</Text>
          <Text color="primary">Primary</Text>
          <Text color="secondary">Secondary</Text>
          <Text color="success">Success</Text>
          <Text color="warning">Warning</Text>
          <Text color="error">Error</Text>
        </HStack>
      </Showcase>

      <Showcase
        title="Font Weights"
        code={`<Text weight="thin">Thin weight</Text>
<Text weight="light">Light weight</Text>
<Text weight="normal">Normal weight</Text>
<Text weight="medium">Medium weight</Text>
<Text weight="semibold">Semibold weight</Text>
<Text weight="bold">Bold weight</Text>`}
      >
        <VStack align="start" gap={2}>
          <Text weight="thin">Thin weight</Text>
          <Text weight="light">Light weight</Text>
          <Text weight="normal">Normal weight</Text>
          <Text weight="medium">Medium weight</Text>
          <Text weight="semibold">Semibold weight</Text>
          <Text weight="bold">Bold weight</Text>
          <Text weight="extrabold">Extrabold weight</Text>
        </VStack>
      </Showcase>

      <Showcase
        title="Labels"
        code={`import { Label } from 'core-ui';

<Label>Default Label</Label>
<Label isRequired>Required Label</Label>
<Label isDisabled>Disabled Label</Label>`}
      >
        <HStack gap={8}>
          <Label>Default Label</Label>
          <Label isRequired>Required Label</Label>
          <Label isDisabled>Disabled Label</Label>
        </HStack>
      </Showcase>

      <Showcase
        title="Code"
        code={`import { Code } from 'core-ui';

<Code>const x = 42;</Code>
<Code color="primary">primary</Code>
<Code color="success">success</Code>
<Code color="error">error</Code>`}
      >
        <HStack gap={4} wrap>
          <Code>const x = 42;</Code>
          <Code color="primary">primary</Code>
          <Code color="success">success</Code>
          <Code color="error">error</Code>
        </HStack>
      </Showcase>
    </div>
  );
}

// =============================================
// BUTTON PAGE
// =============================================

function ButtonPage() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <Heading as="h2">Button</Heading>
        <Text color="muted" className="mt-2">
          Buttons allow users to take actions with a single click.
        </Text>
        <div className="flex gap-2 mt-3">
          <Badge color="green">Stable</Badge>
          <Badge color="gray" variant="outline">v1.0.0</Badge>
        </div>
      </div>

      <Showcase
        title="Variants"
        description="Different visual styles for different contexts."
        code={`import { Button } from 'core-ui';

<Button variant="solid">Solid</Button>
<Button variant="outline">Outline</Button>
<Button variant="soft">Soft</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
      >
        <HStack gap={4} wrap>
          <Button variant="solid">Solid</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="soft">Soft</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </HStack>
      </Showcase>

      <Showcase
        title="Sizes"
        code={`<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>`}
      >
        <HStack gap={4} align="center" wrap>
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </HStack>
      </Showcase>

      <Showcase
        title="Semantic Colors"
        description="Use these for primary actions and feedback."
        code={`<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="error">Error</Button>
<Button color="info">Info</Button>`}
      >
        <HStack gap={3} wrap>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="success">Success</Button>
          <Button color="warning">Warning</Button>
          <Button color="error">Error</Button>
          <Button color="info">Info</Button>
        </HStack>
      </Showcase>

      <Showcase
        title="Palette Colors"
        description="Full color palette available via props."
        code={`// Any Tailwind color can be used
<Button color="red">Red</Button>
<Button color="orange">Orange</Button>
<Button color="purple">Purple</Button>
<Button color="pink">Pink</Button>
<Button color="teal">Teal</Button>`}
      >
        <div className="flex flex-wrap gap-2">
          {['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal',
            'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'
          ].map((color) => (
            <Button key={color} color={color as any} size="sm">
              {color}
            </Button>
          ))}
        </div>
      </Showcase>

      <Showcase
        title="Outline Variant with Colors"
        code={`<Button variant="outline" color="primary">Primary</Button>
<Button variant="outline" color="success">Success</Button>
<Button variant="outline" color="purple">Purple</Button>`}
      >
        <div className="flex flex-wrap gap-2">
          {['primary', 'success', 'warning', 'error', 'purple', 'pink', 'teal'].map((color) => (
            <Button key={color} variant="outline" color={color as any} size="sm">
              {color}
            </Button>
          ))}
        </div>
      </Showcase>

      <Showcase
        title="Soft Variant with Colors"
        code={`<Button variant="soft" color="primary">Primary</Button>
<Button variant="soft" color="success">Success</Button>
<Button variant="soft" color="indigo">Indigo</Button>`}
      >
        <div className="flex flex-wrap gap-2">
          {['primary', 'success', 'warning', 'error', 'indigo', 'rose', 'cyan'].map((color) => (
            <Button key={color} variant="soft" color={color as any} size="sm">
              {color}
            </Button>
          ))}
        </div>
      </Showcase>

      <Showcase
        title="Loading State"
        code={`<Button loading>Loading</Button>
<Button loading loadingText="Saving...">Save</Button>

// With state management
const [loading, setLoading] = useState(false);

<Button
  loading={loading}
  loadingText="Processing..."
  onClick={() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }}
>
  Click to Load
</Button>`}
      >
        <HStack gap={4} wrap>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
          <Button loading loadingText="Saving...">Save</Button>
          <Button
            loading={loading}
            loadingText="Processing..."
            onClick={() => {
              setLoading(true);
              setTimeout(() => setLoading(false), 2000);
            }}
          >
            Click to Load
          </Button>
        </HStack>
      </Showcase>

      <Showcase
        title="Rounded Styles"
        code={`<Button rounded="none">None</Button>
<Button rounded="sm">Small</Button>
<Button rounded="md">Medium</Button>
<Button rounded="lg">Large</Button>
<Button rounded="full">Full</Button>`}
      >
        <HStack gap={4}>
          <Button rounded="none">None</Button>
          <Button rounded="sm">Small</Button>
          <Button rounded="md">Medium</Button>
          <Button rounded="lg">Large</Button>
          <Button rounded="xl">XL</Button>
          <Button rounded="full">Full</Button>
        </HStack>
      </Showcase>

      <Showcase
        title="Full Width"
        code={`<Button fullWidth>Full Width Button</Button>
<Button fullWidth variant="outline">Full Width Outline</Button>`}
      >
        <VStack gap={3}>
          <Button fullWidth>Full Width Button</Button>
          <Button fullWidth variant="outline">Full Width Outline</Button>
        </VStack>
      </Showcase>
    </div>
  );
}

// =============================================
// INPUT PAGE
// =============================================

function InputPage() {
  return (
    <div className="space-y-8">
      <div>
        <Heading as="h2">Input</Heading>
        <Text color="muted" className="mt-2">
          Text input fields for user data entry.
        </Text>
      </div>

      <Showcase
        title="Variants"
        code={`import { Input, Label } from 'core-ui';

<Label>Outline (default)</Label>
<Input variant="outline" placeholder="Enter text..." />

<Label>Filled</Label>
<Input variant="filled" placeholder="Enter text..." />

<Label>Flushed</Label>
<Input variant="flushed" placeholder="Enter text..." />`}
      >
        <VStack gap={4} className="max-w-md">
          <div>
            <Label className="mb-1.5">Outline (default)</Label>
            <Input variant="outline" placeholder="Enter text..." />
          </div>
          <div>
            <Label className="mb-1.5">Filled</Label>
            <Input variant="filled" placeholder="Enter text..." />
          </div>
          <div>
            <Label className="mb-1.5">Flushed</Label>
            <Input variant="flushed" placeholder="Enter text..." />
          </div>
        </VStack>
      </Showcase>

      <Showcase
        title="Sizes"
        code={`<Input size="sm" placeholder="Small input" />
<Input size="md" placeholder="Medium input" />
<Input size="lg" placeholder="Large input" />`}
      >
        <VStack gap={4} className="max-w-md">
          <Input size="sm" placeholder="Small input" />
          <Input size="md" placeholder="Medium input (default)" />
          <Input size="lg" placeholder="Large input" />
        </VStack>
      </Showcase>

      <Showcase
        title="States"
        code={`<Input placeholder="Normal input" />
<Input placeholder="Disabled" isDisabled />
<Input placeholder="Read only" isReadOnly value="Read only value" />
<Input placeholder="Invalid" isInvalid />`}
      >
        <VStack gap={4} className="max-w-md">
          <Input placeholder="Normal input" />
          <Input placeholder="Disabled input" isDisabled />
          <Input placeholder="Read only input" isReadOnly value="Read only value" />
          <Input placeholder="Invalid input" isInvalid />
        </VStack>
      </Showcase>

      <Showcase
        title="With Addons"
        code={`<Input leftAddon="https://" placeholder="website.com" />
<Input rightAddon=".com" placeholder="domain" />
<Input leftAddon="$" rightAddon=".00" placeholder="Amount" />`}
      >
        <VStack gap={4} className="max-w-md">
          <Input leftAddon="https://" placeholder="website.com" />
          <Input rightAddon=".com" placeholder="domain" />
          <Input leftAddon="$" rightAddon=".00" placeholder="Amount" />
        </VStack>
      </Showcase>

      <Showcase
        title="With Icons/Elements"
        code={`<Input
  leftElement={<span>🔍</span>}
  placeholder="Search..."
/>

<Input
  type="email"
  rightElement={<span>📧</span>}
  placeholder="Enter email..."
/>

<Input
  leftElement={<span>💵</span>}
  rightElement={<span>USD</span>}
  placeholder="0.00"
/>`}
      >
        <VStack gap={4} className="max-w-md">
          <Input
            leftElement={<span>🔍</span>}
            placeholder="Search..."
          />
          <Input
            type="email"
            rightElement={<span>📧</span>}
            placeholder="Enter email..."
          />
          <Input
            leftElement={<span>💵</span>}
            rightElement={<span>USD</span>}
            placeholder="0.00"
          />
        </VStack>
      </Showcase>
    </div>
  );
}

// =============================================
// CARD PAGE
// =============================================

function CardPage() {
  return (
    <div className="space-y-8">
      <div>
        <Heading as="h2">Card</Heading>
        <Text color="muted" className="mt-2">
          A container for grouping related content and actions.
        </Text>
      </div>

      <Showcase
        title="Variants"
        code={`import { Card, CardBody, Heading, Text } from 'core-ui';

<Card variant="elevated">
  <CardBody>
    <Heading as="h4">Elevated</Heading>
    <Text color="muted">Default with shadow</Text>
  </CardBody>
</Card>

<Card variant="outline">...</Card>
<Card variant="filled">...</Card>
<Card variant="ghost">...</Card>`}
      >
        <div className="grid grid-cols-2 gap-4">
          <Card variant="elevated">
            <CardBody>
              <Heading as="h4" size="lg">Elevated</Heading>
              <Text color="muted" size="sm">Default with shadow</Text>
            </CardBody>
          </Card>
          <Card variant="outline">
            <CardBody>
              <Heading as="h4" size="lg">Outline</Heading>
              <Text color="muted" size="sm">With border</Text>
            </CardBody>
          </Card>
          <Card variant="filled">
            <CardBody>
              <Heading as="h4" size="lg">Filled</Heading>
              <Text color="muted" size="sm">Gray background</Text>
            </CardBody>
          </Card>
          <Card variant="ghost">
            <CardBody>
              <Heading as="h4" size="lg">Ghost</Heading>
              <Text color="muted" size="sm">Transparent</Text>
            </CardBody>
          </Card>
        </div>
      </Showcase>

      <Showcase
        title="With Header and Footer"
        code={`import { Card, CardHeader, CardBody, CardFooter, Button, HStack } from 'core-ui';

<Card variant="outline">
  <CardHeader>
    <Heading as="h4">Card Title</Heading>
    <Text color="muted" size="sm">Card subtitle</Text>
  </CardHeader>
  <CardBody>
    <Text>Main content area.</Text>
  </CardBody>
  <CardFooter>
    <HStack justify="end" gap={3}>
      <Button variant="ghost">Cancel</Button>
      <Button>Submit</Button>
    </HStack>
  </CardFooter>
</Card>`}
      >
        <Card variant="outline" className="max-w-md">
          <CardHeader>
            <Heading as="h4" size="lg">Card Title</Heading>
            <Text color="muted" size="sm">Card subtitle or description</Text>
          </CardHeader>
          <CardBody>
            <Text>
              This is the main content area of the card. You can put any content here.
            </Text>
          </CardBody>
          <CardFooter>
            <HStack justify="end" gap={3}>
              <Button variant="ghost" color="gray">Cancel</Button>
              <Button>Submit</Button>
            </HStack>
          </CardFooter>
        </Card>
      </Showcase>

      <Showcase
        title="Hoverable & Pressable"
        code={`<Card variant="outline" isHoverable>
  <CardBody>
    <Text weight="medium">Hoverable</Text>
    <Text color="muted" size="sm">Hover to see effect</Text>
  </CardBody>
</Card>

<Card
  variant="outline"
  isPressable
  onClick={() => alert('Card clicked!')}
>
  <CardBody>
    <Text weight="medium">Pressable</Text>
    <Text color="muted" size="sm">Click me!</Text>
  </CardBody>
</Card>`}
      >
        <HStack gap={4}>
          <Card variant="outline" isHoverable className="w-48">
            <CardBody>
              <Text weight="medium">Hoverable</Text>
              <Text color="muted" size="sm">Hover to see effect</Text>
            </CardBody>
          </Card>
          <Card
            variant="outline"
            isPressable
            onClick={() => alert('Card clicked!')}
            className="w-48"
          >
            <CardBody>
              <Text weight="medium">Pressable</Text>
              <Text color="muted" size="sm">Click me!</Text>
            </CardBody>
          </Card>
        </HStack>
      </Showcase>
    </div>
  );
}

// =============================================
// BADGE PAGE
// =============================================

function BadgePage() {
  return (
    <div className="space-y-8">
      <div>
        <Heading as="h2">Badge</Heading>
        <Text color="muted" className="mt-2">
          Small labels for status, categories, or counts.
        </Text>
      </div>

      <Showcase
        title="Variants"
        code={`import { Badge } from 'core-ui';

<Badge variant="solid">Solid</Badge>
<Badge variant="soft">Soft</Badge>
<Badge variant="outline">Outline</Badge>`}
      >
        <HStack gap={4}>
          <Badge variant="solid">Solid</Badge>
          <Badge variant="soft">Soft</Badge>
          <Badge variant="outline">Outline</Badge>
        </HStack>
      </Showcase>

      <Showcase
        title="Semantic Colors"
        code={`<Badge color="primary">Primary</Badge>
<Badge color="secondary">Secondary</Badge>
<Badge color="success">Success</Badge>
<Badge color="warning">Warning</Badge>
<Badge color="error">Error</Badge>
<Badge color="info">Info</Badge>

// With solid variant
<Badge color="success" variant="solid">Success</Badge>`}
      >
        <VStack gap={3} align="start">
          <HStack gap={2}>
            <Badge color="primary">Primary</Badge>
            <Badge color="secondary">Secondary</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="warning">Warning</Badge>
            <Badge color="error">Error</Badge>
            <Badge color="info">Info</Badge>
          </HStack>
          <HStack gap={2}>
            <Badge color="primary" variant="solid">Primary</Badge>
            <Badge color="success" variant="solid">Success</Badge>
            <Badge color="warning" variant="solid">Warning</Badge>
            <Badge color="error" variant="solid">Error</Badge>
          </HStack>
          <HStack gap={2}>
            <Badge color="primary" variant="outline">Primary</Badge>
            <Badge color="success" variant="outline">Success</Badge>
            <Badge color="error" variant="outline">Error</Badge>
          </HStack>
        </VStack>
      </Showcase>

      <Showcase
        title="Palette Colors"
        code={`<Badge color="red">red</Badge>
<Badge color="purple">purple</Badge>
<Badge color="teal">teal</Badge>
<Badge color="pink">pink</Badge>`}
      >
        <div className="flex flex-wrap gap-2">
          {['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal',
            'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'
          ].map((color) => (
            <Badge key={color} color={color as any}>
              {color}
            </Badge>
          ))}
        </div>
      </Showcase>

      <Showcase
        title="Sizes"
        code={`<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>`}
      >
        <HStack gap={3} align="center">
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
          <Badge size="lg">Large</Badge>
        </HStack>
      </Showcase>

      <Showcase
        title="Dot Badges"
        description="Status indicators without text."
        code={`<Badge dot color="success" />
<Badge dot color="warning" />
<Badge dot color="error" />
<Badge dot color="info" />`}
      >
        <HStack gap={4}>
          <Badge dot color="success" />
          <Badge dot color="warning" />
          <Badge dot color="error" />
          <Badge dot color="info" />
          <Badge dot color="purple" />
        </HStack>
      </Showcase>

      <Showcase
        title="Rounded Styles"
        code={`<Badge radius="none">Square</Badge>
<Badge radius="sm">SM</Badge>
<Badge radius="md">MD</Badge>
<Badge radius="full">Pill</Badge>`}
      >
        <HStack gap={3}>
          <Badge radius="none">Square</Badge>
          <Badge radius="sm">SM</Badge>
          <Badge radius="md">MD</Badge>
          <Badge radius="lg">LG</Badge>
          <Badge radius="full">Pill</Badge>
        </HStack>
      </Showcase>
    </div>
  );
}

// =============================================
// AVATAR PAGE
// =============================================

function AvatarPage() {
  return (
    <div className="space-y-8">
      <div>
        <Heading as="h2">Avatar</Heading>
        <Text color="muted" className="mt-2">
          Display user or entity images with fallbacks.
        </Text>
      </div>

      <Showcase
        title="Sizes"
        code={`import { Avatar } from 'core-ui';

<Avatar size="xs" name="John Doe" />
<Avatar size="sm" name="John Doe" />
<Avatar size="md" name="John Doe" />
<Avatar size="lg" name="John Doe" />
<Avatar size="xl" name="John Doe" />
<Avatar size="2xl" name="John Doe" />`}
      >
        <HStack gap={4} align="center">
          <Avatar size="xs" name="John Doe" />
          <Avatar size="sm" name="John Doe" />
          <Avatar size="md" name="John Doe" />
          <Avatar size="lg" name="John Doe" />
          <Avatar size="xl" name="John Doe" />
          <Avatar size="2xl" name="John Doe" />
        </HStack>
      </Showcase>

      <Showcase
        title="With Images"
        code={`<Avatar
  src="https://i.pravatar.cc/150?img=1"
  name="John Doe"
/>

<Avatar
  src="https://i.pravatar.cc/150?img=2"
  name="Jane Doe"
/>`}
      >
        <HStack gap={4}>
          <Avatar src="https://i.pravatar.cc/150?img=1" name="John Doe" />
          <Avatar src="https://i.pravatar.cc/150?img=2" name="Jane Doe" />
          <Avatar src="https://i.pravatar.cc/150?img=3" name="Bob Smith" />
        </HStack>
      </Showcase>

      <Showcase
        title="Fallback Initials"
        description="Automatically generates initials from name."
        code={`<Avatar name="John Doe" color="blue" />
<Avatar name="Jane Smith" color="purple" />
<Avatar name="Bob" color="green" />
<Avatar name="Alice Johnson" color="rose" />`}
      >
        <HStack gap={4}>
          <Avatar name="John Doe" color="blue" />
          <Avatar name="Jane Smith" color="purple" />
          <Avatar name="Bob" color="green" />
          <Avatar name="Alice Johnson" color="rose" />
        </HStack>
      </Showcase>

      <Showcase
        title="Colors"
        code={`<Avatar name="User" color="primary" />
<Avatar name="User" color="success" />
<Avatar name="User" color="purple" />
<Avatar name="User" color="pink" />`}
      >
        <div className="flex flex-wrap gap-2">
          {['primary', 'secondary', 'success', 'warning', 'error',
            'blue', 'purple', 'pink', 'red', 'orange', 'teal', 'cyan'
          ].map((color) => (
            <Avatar key={color} name={color} color={color as any} />
          ))}
        </div>
      </Showcase>

      <Showcase
        title="With Status"
        code={`<Avatar
  name="Online User"
  showStatus
  status="online"
  color="blue"
/>

<Avatar
  name="Busy User"
  showStatus
  status="busy"
  color="purple"
/>

// Status options: "online" | "offline" | "busy" | "away"`}
      >
        <HStack gap={4}>
          <Avatar name="Online User" showStatus status="online" color="blue" />
          <Avatar name="Offline User" showStatus status="offline" color="gray" />
          <Avatar name="Busy User" showStatus status="busy" color="purple" />
          <Avatar name="Away User" showStatus status="away" color="teal" />
        </HStack>
      </Showcase>

      <Showcase
        title="Radius"
        code={`<Avatar name="JD" radius="none" color="blue" />
<Avatar name="JD" radius="sm" color="purple" />
<Avatar name="JD" radius="md" color="pink" />
<Avatar name="JD" radius="lg" color="teal" />
<Avatar name="JD" radius="full" color="green" />`}
      >
        <HStack gap={4}>
          <Avatar name="JD" radius="none" color="blue" />
          <Avatar name="JD" radius="sm" color="purple" />
          <Avatar name="JD" radius="md" color="pink" />
          <Avatar name="JD" radius="lg" color="teal" />
          <Avatar name="JD" radius="full" color="green" />
        </HStack>
      </Showcase>

      <Showcase
        title="Avatar Group"
        code={`import { AvatarGroup, Avatar } from 'core-ui';

<AvatarGroup max={4}>
  <Avatar src="https://i.pravatar.cc/150?img=1" name="User 1" />
  <Avatar src="https://i.pravatar.cc/150?img=2" name="User 2" />
  <Avatar src="https://i.pravatar.cc/150?img=3" name="User 3" />
  <Avatar src="https://i.pravatar.cc/150?img=4" name="User 4" />
  <Avatar src="https://i.pravatar.cc/150?img=5" name="User 5" />
  <Avatar src="https://i.pravatar.cc/150?img=6" name="User 6" />
</AvatarGroup>

// Shows +2 indicator for extra avatars`}
      >
        <VStack gap={4} align="start">
          <AvatarGroup max={4}>
            <Avatar src="https://i.pravatar.cc/150?img=1" name="User 1" />
            <Avatar src="https://i.pravatar.cc/150?img=2" name="User 2" />
            <Avatar src="https://i.pravatar.cc/150?img=3" name="User 3" />
            <Avatar src="https://i.pravatar.cc/150?img=4" name="User 4" />
            <Avatar src="https://i.pravatar.cc/150?img=5" name="User 5" />
            <Avatar src="https://i.pravatar.cc/150?img=6" name="User 6" />
          </AvatarGroup>
          <AvatarGroup max={3} size="lg">
            <Avatar name="Alice" color="blue" />
            <Avatar name="Bob" color="purple" />
            <Avatar name="Charlie" color="pink" />
            <Avatar name="David" color="teal" />
            <Avatar name="Eve" color="rose" />
          </AvatarGroup>
        </VStack>
      </Showcase>
    </div>
  );
}

// =============================================
// STACK PAGE
// =============================================

function StackPage() {
  return (
    <div className="space-y-8">
      <div>
        <Heading as="h2">Stack</Heading>
        <Text color="muted" className="mt-2">
          Flexible layout components for arranging items.
        </Text>
      </div>

      <Showcase
        title="VStack (Vertical)"
        code={`import { VStack } from 'core-ui';

<VStack gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</VStack>`}
      >
        <VStack gap="md" className="p-4 border border-dashed border-gray-300 rounded">
          <div className="bg-blue-100 p-3 rounded">Item 1</div>
          <div className="bg-blue-100 p-3 rounded">Item 2</div>
          <div className="bg-blue-100 p-3 rounded">Item 3</div>
        </VStack>
      </Showcase>

      <Showcase
        title="HStack (Horizontal)"
        code={`import { HStack } from 'core-ui';

<HStack gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</HStack>`}
      >
        <HStack gap="md" className="p-4 border border-dashed border-gray-300 rounded">
          <div className="bg-green-100 p-3 rounded">Item 1</div>
          <div className="bg-green-100 p-3 rounded">Item 2</div>
          <div className="bg-green-100 p-3 rounded">Item 3</div>
        </HStack>
      </Showcase>

      <Showcase
        title="Gap Sizes"
        description="Semantic spacing: none, 2xs, xs, sm, md, lg, xl, 2xl, 3xl, 4xl"
        code={`<HStack gap="xs">...</HStack>   // 4px
<HStack gap="sm">...</HStack>   // 8px
<HStack gap="md">...</HStack>   // 12px
<HStack gap="lg">...</HStack>   // 16px
<HStack gap="xl">...</HStack>   // 24px
<HStack gap="2xl">...</HStack>  // 32px`}
      >
        <VStack gap="lg">
          {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((gap) => (
            <div key={gap}>
              <Text size="sm" color="muted" className="mb-2">gap="{gap}"</Text>
              <HStack gap={gap} className="p-2 border border-dashed border-gray-300 rounded">
                <div className="bg-purple-100 px-3 py-2 rounded text-sm">A</div>
                <div className="bg-purple-100 px-3 py-2 rounded text-sm">B</div>
                <div className="bg-purple-100 px-3 py-2 rounded text-sm">C</div>
              </HStack>
            </div>
          ))}
        </VStack>
      </Showcase>

      <Showcase
        title="Alignment"
        code={`<HStack align="start" gap="md">...</HStack>
<HStack align="center" gap="md">...</HStack>
<HStack align="end" gap="md">...</HStack>`}
      >
        <VStack gap="lg">
          {(['start', 'center', 'end'] as const).map((align) => (
            <div key={align}>
              <Text size="sm" color="muted" className="mb-2">align="{align}"</Text>
              <HStack align={align} gap="md" className="p-4 h-24 border border-dashed border-gray-300 rounded">
                <div className="bg-amber-100 p-3 rounded">Short</div>
                <div className="bg-amber-100 p-3 rounded">Medium Item</div>
                <div className="bg-amber-100 p-3 rounded">Tall<br />Item</div>
              </HStack>
            </div>
          ))}
        </VStack>
      </Showcase>

      <Showcase
        title="Justify Content"
        code={`<HStack justify="start">...</HStack>
<HStack justify="center">...</HStack>
<HStack justify="end">...</HStack>
<HStack justify="between">...</HStack>
<HStack justify="around">...</HStack>`}
      >
        <VStack gap="lg">
          {(['start', 'center', 'end', 'between', 'around'] as const).map((justify) => (
            <div key={justify}>
              <Text size="sm" color="muted" className="mb-2">justify="{justify}"</Text>
              <HStack justify={justify} gap="md" className="p-4 border border-dashed border-gray-300 rounded">
                <div className="bg-teal-100 p-3 rounded">A</div>
                <div className="bg-teal-100 p-3 rounded">B</div>
                <div className="bg-teal-100 p-3 rounded">C</div>
              </HStack>
            </div>
          ))}
        </VStack>
      </Showcase>
    </div>
  );
}

// =============================================
// DIVIDER PAGE
// =============================================

function DividerPage() {
  return (
    <div className="space-y-8">
      <div>
        <Heading as="h2">Divider</Heading>
        <Text color="muted" className="mt-2">
          Visual separators for content.
        </Text>
      </div>

      <Showcase
        title="Basic"
        code={`import { Divider } from 'core-ui';

<Text>Content above</Text>
<Divider />
<Text>Content below</Text>`}
      >
        <VStack gap={4}>
          <Text>Content above</Text>
          <Divider />
          <Text>Content below</Text>
        </VStack>
      </Showcase>

      <Showcase
        title="Variants"
        code={`<Divider variant="solid" />
<Divider variant="dashed" />
<Divider variant="dotted" />`}
      >
        <VStack gap={6}>
          <div>
            <Text size="sm" color="muted" className="mb-2">Solid</Text>
            <Divider variant="solid" />
          </div>
          <div>
            <Text size="sm" color="muted" className="mb-2">Dashed</Text>
            <Divider variant="dashed" />
          </div>
          <div>
            <Text size="sm" color="muted" className="mb-2">Dotted</Text>
            <Divider variant="dotted" />
          </div>
        </VStack>
      </Showcase>

      <Showcase
        title="Colors"
        code={`<Divider color="light" />
<Divider color="default" />
<Divider color="dark" />`}
      >
        <VStack gap={4}>
          <Divider color="light" />
          <Divider color="default" />
          <Divider color="dark" />
        </VStack>
      </Showcase>

      <Showcase
        title="With Label"
        code={`<Divider label="OR" labelPosition="center" />
<Divider label="Section" labelPosition="left" />
<Divider label="End" labelPosition="right" />`}
      >
        <VStack gap={6}>
          <Divider label="OR" labelPosition="center" />
          <Divider label="Section" labelPosition="left" />
          <Divider label="End" labelPosition="right" />
        </VStack>
      </Showcase>

      <Showcase
        title="Vertical"
        code={`<HStack gap={4} className="h-20">
  <Text>Left</Text>
  <Divider orientation="vertical" />
  <Text>Middle</Text>
  <Divider orientation="vertical" />
  <Text>Right</Text>
</HStack>`}
      >
        <HStack gap={4} className="h-20">
          <Text>Left</Text>
          <Divider orientation="vertical" />
          <Text>Middle</Text>
          <Divider orientation="vertical" />
          <Text>Right</Text>
        </HStack>
      </Showcase>
    </div>
  );
}

// =============================================
// ALERT PAGE
// =============================================

function AlertPage() {
  return (
    <div className="space-y-8">
      <div>
        <Heading as="h2">Alert</Heading>
        <Text color="muted" className="mt-2">
          Contextual feedback messages for user actions.
        </Text>
      </div>

      <Showcase
        title="Status Types"
        code={`import { Alert } from 'core-ui';

<Alert status="info" title="Information">
  This is an informational message.
</Alert>

<Alert status="success" title="Success">
  Your changes have been saved successfully.
</Alert>

<Alert status="warning" title="Warning">
  Please review this before continuing.
</Alert>

<Alert status="error" title="Error">
  Something went wrong. Please try again.
</Alert>`}
      >
        <VStack gap={4}>
          <Alert status="info" title="Information">
            This is an informational message.
          </Alert>
          <Alert status="success" title="Success">
            Your changes have been saved successfully.
          </Alert>
          <Alert status="warning" title="Warning">
            Please review this before continuing.
          </Alert>
          <Alert status="error" title="Error">
            Something went wrong. Please try again.
          </Alert>
        </VStack>
      </Showcase>

      <Showcase
        title="Variants"
        code={`<Alert status="info" variant="subtle" title="Subtle">
  Light background variant.
</Alert>

<Alert status="info" variant="solid" title="Solid">
  Solid background variant.
</Alert>

<Alert status="info" variant="left-accent" title="Left Accent">
  With left border accent.
</Alert>

<Alert status="info" variant="top-accent" title="Top Accent">
  With top border accent.
</Alert>`}
      >
        <VStack gap={4}>
          <Alert status="info" variant="subtle" title="Subtle">
            Light background variant.
          </Alert>
          <Alert status="info" variant="solid" title="Solid">
            Solid background variant.
          </Alert>
          <Alert status="info" variant="left-accent" title="Left Accent">
            With left border accent.
          </Alert>
          <Alert status="info" variant="top-accent" title="Top Accent">
            With top border accent.
          </Alert>
        </VStack>
      </Showcase>

      <Showcase
        title="Closable"
        code={`<Alert
  status="success"
  title="Closable Alert"
  isClosable
  onClose={() => console.log('Closed!')}
>
  Click the X to close this alert.
</Alert>`}
      >
        <VStack gap={4}>
          <Alert
            status="success"
            title="Closable Alert"
            isClosable
            onClose={() => console.log('Closed!')}
          >
            Click the X to close this alert.
          </Alert>
        </VStack>
      </Showcase>

      <Showcase
        title="Without Title"
        code={`<Alert status="info">
  Just a simple informational message.
</Alert>

<Alert status="error" variant="solid">
  An error occurred during the operation.
</Alert>`}
      >
        <VStack gap={4}>
          <Alert status="info">
            Just a simple informational message without a title.
          </Alert>
          <Alert status="error" variant="solid">
            An error occurred during the operation.
          </Alert>
        </VStack>
      </Showcase>
    </div>
  );
}

// =============================================
// SPINNER PAGE
// =============================================

function SpinnerPage() {
  return (
    <div className="space-y-8">
      <div>
        <Heading as="h2">Spinner</Heading>
        <Text color="muted" className="mt-2">
          Loading indicators for async operations.
        </Text>
      </div>

      <Showcase
        title="Sizes"
        code={`import { Spinner } from 'core-ui';

<Spinner size="xs" />
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />`}
      >
        <HStack gap={6} align="center">
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
          <Spinner size="xl" />
        </HStack>
      </Showcase>

      <Showcase
        title="Colors"
        code={`<Spinner color="primary" />
<Spinner color="secondary" />

// On dark background
<div className="bg-gray-800 p-4">
  <Spinner color="white" />
</div>`}
      >
        <HStack gap={6}>
          <Spinner color="primary" />
          <Spinner color="secondary" />
          <div className="bg-gray-800 p-4 rounded">
            <Spinner color="white" />
          </div>
        </HStack>
      </Showcase>

      <Showcase
        title="In Context"
        code={`<Button loading>Loading...</Button>

<Card className="w-32 h-32 flex items-center justify-center">
  <Spinner size="lg" color="primary" />
</Card>`}
      >
        <HStack gap={8}>
          <Button loading>Loading...</Button>
          <Card variant="outline" className="w-32 h-32 flex items-center justify-center">
            <Spinner size="lg" color="primary" />
          </Card>
        </HStack>
      </Showcase>
    </div>
  );
}

// =============================================
// SKELETON PAGE
// =============================================

function SkeletonPage() {
  return (
    <div className="space-y-8">
      <div>
        <Heading as="h2">Skeleton</Heading>
        <Text color="muted" className="mt-2">
          Placeholder loading states for content.
        </Text>
      </div>

      <Showcase
        title="Basic"
        code={`import { Skeleton } from 'core-ui';

<Skeleton height={20} width="60%" />
<Skeleton height={16} width="80%" />
<Skeleton height={16} width="40%" />`}
      >
        <VStack gap={4}>
          <Skeleton height={20} width="60%" />
          <Skeleton height={16} width="80%" />
          <Skeleton height={16} width="40%" />
        </VStack>
      </Showcase>

      <Showcase
        title="Text Lines"
        code={`import { SkeletonText } from 'core-ui';

<SkeletonText lines={4} />`}
      >
        <SkeletonText lines={4} />
      </Showcase>

      <Showcase
        title="Circle"
        code={`import { SkeletonCircle } from 'core-ui';

<SkeletonCircle size={40} />
<SkeletonCircle size={60} />
<SkeletonCircle size={80} />`}
      >
        <HStack gap={4}>
          <SkeletonCircle size={40} />
          <SkeletonCircle size={60} />
          <SkeletonCircle size={80} />
        </HStack>
      </Showcase>

      <Showcase
        title="Card Loading State"
        code={`<Card variant="outline">
  <CardBody>
    <HStack gap={4} align="start">
      <SkeletonCircle size={48} />
      <VStack gap={2} className="flex-1">
        <Skeleton height={16} width="60%" />
        <Skeleton height={14} width="40%" />
      </VStack>
    </HStack>
    <div className="mt-4">
      <SkeletonText lines={3} />
    </div>
  </CardBody>
</Card>`}
      >
        <Card variant="outline" className="max-w-sm">
          <CardBody>
            <HStack gap={4} align="start">
              <SkeletonCircle size={48} />
              <VStack gap={2} className="flex-1">
                <Skeleton height={16} width="60%" />
                <Skeleton height={14} width="40%" />
              </VStack>
            </HStack>
            <div className="mt-4">
              <SkeletonText lines={3} />
            </div>
          </CardBody>
        </Card>
      </Showcase>

      <Showcase
        title="List Loading State"
        code={`{[1, 2, 3].map((i) => (
  <HStack key={i} gap={4}>
    <SkeletonCircle size={40} />
    <VStack gap={2} className="flex-1">
      <Skeleton height={14} width="70%" />
      <Skeleton height={12} width="50%" />
    </VStack>
  </HStack>
))}`}
      >
        <VStack gap={4}>
          {[1, 2, 3].map((i) => (
            <HStack key={i} gap={4}>
              <SkeletonCircle size={40} />
              <VStack gap={2} className="flex-1">
                <Skeleton height={14} width="70%" />
                <Skeleton height={12} width="50%" />
              </VStack>
            </HStack>
          ))}
        </VStack>
      </Showcase>
    </div>
  );
}

// =============================================
// MAIN APP
// =============================================

export default function App() {
  const [activeComponent, setActiveComponent] = useState('colors');

  const renderPage = () => {
    switch (activeComponent) {
      case 'colors': return <ColorsPage />;
      case 'typography': return <TypographyPage />;
      case 'button': return <ButtonPage />;
      case 'input': return <InputPage />;
      case 'card': return <CardPage />;
      case 'badge': return <BadgePage />;
      case 'avatar': return <AvatarPage />;
      case 'stack': return <StackPage />;
      case 'divider': return <DividerPage />;
      case 'alert': return <AlertPage />;
      case 'spinner': return <SpinnerPage />;
      case 'skeleton': return <SkeletonPage />;
      default: return <ColorsPage />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 overflow-y-auto flex-shrink-0">
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-xl font-bold text-gray-900">Core UI</h1>
          <p className="text-sm text-gray-500 mt-1">Design System</p>
        </div>
        <nav className="p-4">
          {componentCategories.map((category) => (
            <div key={category.name} className="mb-6">
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">
                {category.name}
              </h2>
              <ul className="space-y-1">
                {category.items.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveComponent(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeComponent === item.id
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-4xl mx-auto">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}
