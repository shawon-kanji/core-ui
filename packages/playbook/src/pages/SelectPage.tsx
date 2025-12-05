import { useState } from 'react';
import { Select, MultiSelect, Heading, Text, VStack, type SelectOption } from '@shawonkanji/core-ui';
import { Showcase } from '../components';

export function SelectPage() {
  const [value, setValue] = useState('option1');
  const [multiValue, setMultiValue] = useState<string[]>(['option1', 'option2']);

  const options: SelectOption[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4', disabled: true },
  ];

  return (
    <div className="space-y-8">
      <div>
        <Heading as="h2">Select</Heading>
        <Text color="muted" className="mt-2">
          Select components for single and multiple value selection.
        </Text>
      </div>

      <Showcase
        title="Single Select"
        code={`<Select
  options={options}
  value={value}
  onChange={(val) => setValue(val)}
  placeholder="Select an option"
/>`}
      >
        <Select
          options={options}
          value={value}
          onChange={(val: string) => setValue(val)}
          placeholder="Select an option"
        />
      </Showcase>

      <Showcase
        title="Multi Select"
        code={`<MultiSelect
  options={options}
  value={multiValue}
  onChange={(val) => setMultiValue(val)}
  placeholder="Select options"
/>`}
      >
        <MultiSelect
          options={options}
          value={multiValue}
          onChange={(val: string[]) => setMultiValue(val)}
          placeholder="Select options"
        />
      </Showcase>

      <Showcase
        title="Variants"
        code={`<VStack gap="md">
  <Select variant="outline" placeholder="Outline" options={options} />
  <Select variant="filled" placeholder="Filled" options={options} />
  <Select variant="flushed" placeholder="Flushed" options={options} />
</VStack>`}
      >
        <VStack gap="md">
          <Select variant="outline" placeholder="Outline" options={options} />
          <Select variant="filled" placeholder="Filled" options={options} />
          <Select variant="flushed" placeholder="Flushed" options={options} />
        </VStack>
      </Showcase>
    </div>
  );
}
