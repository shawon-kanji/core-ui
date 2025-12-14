import { Button, Tooltip, HStack, Text, Heading } from '@shawonkanji/core-ui';
import { Showcase } from '../components';

export function TooltipPage() {
  return (
    <div className="space-y-8">
      <div>
        <Heading as="h2">Tooltip</Heading>
        <Text color="muted" className="mt-2">Hover or focus to reveal contextual help.</Text>
      </div>

      <Showcase
        title="Basic"
        code={`<Tooltip label="Edit">
  <Button variant="ghost">Hover me</Button>
</Tooltip>`}
      >
        <Tooltip label="Edit item">
          <Button variant="ghost">Hover me</Button>
        </Tooltip>
      </Showcase>

      <Showcase
        title="Placements"
        description="top / right / bottom / left"
        code={`<HStack gap="md" wrap>
  <Tooltip placement="top" label="Top"><Button variant="ghost">Top</Button></Tooltip>
  <Tooltip placement="right" label="Right"><Button variant="ghost">Right</Button></Tooltip>
  <Tooltip placement="bottom" label="Bottom"><Button variant="ghost">Bottom</Button></Tooltip>
  <Tooltip placement="left" label="Left"><Button variant="ghost">Left</Button></Tooltip>
</HStack>`}
      >
        <HStack gap="md" wrap>
          <Tooltip placement="top" label="Top"><Button variant="ghost">Top</Button></Tooltip>
          <Tooltip placement="right" label="Right"><Button variant="ghost">Right</Button></Tooltip>
          <Tooltip placement="bottom" label="Bottom"><Button variant="ghost">Bottom</Button></Tooltip>
          <Tooltip placement="left" label="Left"><Button variant="ghost">Left</Button></Tooltip>
        </HStack>
      </Showcase>

      <Showcase
        title="Icon-only trigger"
        description="Focusable icon button with aria-label"
        code={`<Tooltip label="Delete">
  <Button variant="ghost" color="error" isIconOnly aria-label="Delete">🗑️</Button>
</Tooltip>`}
      >
        <Tooltip label="Delete">
          <Button variant="ghost" color="error" isIconOnly aria-label="Delete">🗑️</Button>
        </Tooltip>
      </Showcase>
    </div>
  );
}
