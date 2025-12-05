import { useState } from 'react';
import { Select, MultiSelect, Heading, Text, VStack, type SelectOption } from '@shawonkanji/core-ui';
import { Showcase, PropsTable } from '../components';

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

      <Showcase
        title="SelectOption Type"
        description="The SelectOption interface defines the structure for each option in the select dropdown."
        code={`// SelectOption Type Definition
interface SelectOption {
  value: string;      // Unique identifier for the option
  label: string;      // Display text shown in the dropdown
  disabled?: boolean; // Optional: disables the option
  group?: string;     // Optional: group name for categorizing options
  description?: string; // Optional: additional description text
}

// Example usage:
const options: SelectOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2', description: 'With description' },
  { value: 'option3', label: 'Option 3', group: 'Group A' },
  { value: 'option4', label: 'Option 4', disabled: true },
];

<Select
  options={options}
  value={value}
  onChange={(val) => setValue(val)}
  placeholder="Select an option"
/>`}
      >
        <VStack gap="md" align="start">
          <Text size="sm" color="muted">
            Each option requires a <code className="bg-gray-100 px-1 rounded">value</code> and <code className="bg-gray-100 px-1 rounded">label</code>.
            Optional fields include <code className="bg-gray-100 px-1 rounded">disabled</code>, <code className="bg-gray-100 px-1 rounded">group</code>, and <code className="bg-gray-100 px-1 rounded">description</code>.
          </Text>
        </VStack>
      </Showcase>

      <PropsTable
        title="SelectOption Properties"
        props={[
          { name: 'value', type: 'string', description: 'Unique identifier for the option (required)' },
          { name: 'label', type: 'string', description: 'Display text shown in the dropdown (required)' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the option, preventing selection' },
          { name: 'group', type: 'string', description: 'Group name for categorizing options together' },
          { name: 'description', type: 'string', description: 'Additional description text for the option' },
        ]}
      />

      <PropsTable
        title="Select Props"
        props={[
          { name: 'options', type: 'SelectOption[]', description: 'Array of options to display (see SelectOption type above)' },
          { name: 'value', type: 'string', description: 'Selected value (controlled)' },
          { name: 'onChange', type: '(value: string, option: SelectOption) => void', description: 'Callback when value changes' },
          { name: 'placeholder', type: 'string', description: 'Placeholder text when no value selected' },
          { name: 'variant', type: "'outline' | 'filled' | 'flushed'", default: "'outline'", description: 'Visual variant of the select' },
          { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Size of the select' },
          { name: 'isDisabled', type: 'boolean', default: 'false', description: 'Disabled state' },
          { name: 'isInvalid', type: 'boolean', default: 'false', description: 'Error state' },
          { name: 'isSearchable', type: 'boolean', default: 'false', description: 'Enables search/filter functionality' },
          { name: 'isClearable', type: 'boolean', default: 'false', description: 'Shows clear button to reset selection' },
        ]}
      />

      <PropsTable
        title="MultiSelect Props"
        props={[
          { name: 'options', type: 'SelectOption[]', description: 'Array of options to display (see SelectOption type above)' },
          { name: 'value', type: 'string[]', description: 'Selected values (controlled)' },
          { name: 'onChange', type: '(value: string[], options: SelectOption[]) => void', description: 'Callback when values change' },
          { name: 'placeholder', type: 'string', description: 'Placeholder text when no values selected' },
          { name: 'variant', type: "'outline' | 'filled' | 'flushed'", default: "'outline'", description: 'Visual variant of the select' },
          { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Size of the select' },
          { name: 'isDisabled', type: 'boolean', default: 'false', description: 'Disabled state' },
          { name: 'isInvalid', type: 'boolean', default: 'false', description: 'Error state' },
        ]}
      />
    </div>
  );
}
