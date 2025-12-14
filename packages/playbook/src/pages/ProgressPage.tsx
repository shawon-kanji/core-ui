import { useState } from 'react';
import { Progress, Input, VStack, HStack, Text, Button, Heading } from '@shawonkanji/core-ui';
import { Showcase } from '../components';

export function ProgressPage() {
  const [value, setValue] = useState(55);

  return (
    <div className="space-y-8">
      <div>
        <Heading as="h2">Progress</Heading>
        <Text color="muted" className="mt-2">Display completion of a task with semantic colors.</Text>
      </div>

      <Showcase
        title="Basic"
        code={`<Progress value={60} showLabel />`}
      >
        <Progress value={60} showLabel />
      </Showcase>

      <Showcase
        title="Colors"
        code={`<VStack gap="sm" align="start">
  <Progress value={25} color="primary" />
  <Progress value={40} color="success" />
  <Progress value={65} color="warning" />
  <Progress value={85} color="error" />
</VStack>`}
      >
        <VStack gap="sm" align="start" className="w-full max-w-md">
          <Progress value={25} color="primary" />
          <Progress value={40} color="success" />
          <Progress value={65} color="warning" />
          <Progress value={85} color="error" />
        </VStack>
      </Showcase>

      <Showcase
        title="Interactive"
        description="Adjust the value dynamically"
        code={`const [value, setValue] = useState(55);

<Progress value={value} showLabel />
<input type="range" min={0} max={100} value={value} onChange={(e) => setValue(Number(e.target.value))} />`}
      >
        <VStack gap="md" align="start" className="w-full max-w-md">
          <Progress value={value} showLabel color="info" />
          <Input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            aria-label="Progress value"
          />
          <HStack gap="sm">
            <Button size="sm" variant="ghost" onClick={() => setValue((v) => Math.max(0, v - 10))}>-10</Button>
            <Button size="sm" variant="ghost" onClick={() => setValue((v) => Math.min(100, v + 10))}>+10</Button>
          </HStack>
        </VStack>
      </Showcase>
    </div>
  );
}
