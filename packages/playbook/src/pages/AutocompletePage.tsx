import { useState } from 'react';
import { Autocomplete, Heading, Text, VStack, type AutocompleteOption } from '@shawonkanji/core-ui';
import { Showcase, PropsTable } from '../components';

export function AutocompletePage() {
  const [value, setValue] = useState('');

  const options: AutocompleteOption[] = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'date', label: 'Date' },
    { value: 'elderberry', label: 'Elderberry' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <Heading as="h2">Autocomplete</Heading>
        <Text color="muted" className="mt-2">
          Input with suggestions.
        </Text>
      </div>

      <Showcase
        title="Basic Autocomplete"
        code={`<Autocomplete
  options={options}
  value={value}
  onChange={(val) => setValue(val)}
  placeholder="Type a fruit..."
/>`}
      >
        <Autocomplete
          options={options}
          value={value}
          onChange={(val: string) => setValue(val)}
          placeholder="Type a fruit..."
        />
      </Showcase>

      <Showcase
        title="Free Solo"
        description="Allows custom values not in the list."
        code={`<Autocomplete
  options={options}
  freeSolo
  placeholder="Type anything..."
/>`}
      >
        <Autocomplete
          options={options}
          freeSolo
          placeholder="Type anything..."
        />
      </Showcase>

      <Showcase
        title="Variants"
        code={`<VStack gap="md">
  <Autocomplete variant="outline" placeholder="Outline" options={options} />
  <Autocomplete variant="filled" placeholder="Filled" options={options} />
  <Autocomplete variant="flushed" placeholder="Flushed" options={options} />
</VStack>`}
      >
        <VStack gap="md">
          <Autocomplete variant="outline" placeholder="Outline" options={options} />
          <Autocomplete variant="filled" placeholder="Filled" options={options} />
          <Autocomplete variant="flushed" placeholder="Flushed" options={options} />
        </VStack>
      </Showcase>

      <Showcase
        title="AutocompleteOption Type"
        description="The AutocompleteOption interface defines the structure for each option in the autocomplete dropdown."
        code={`// AutocompleteOption Type Definition
interface AutocompleteOption {
  value: string;        // Unique identifier for the option
  label: string;        // Display text shown in the dropdown
  disabled?: boolean;   // Optional: disables the option
  description?: string; // Optional: additional description text
}

// Example usage:
const options: AutocompleteOption[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana', description: 'Yellow fruit' },
  { value: 'cherry', label: 'Cherry', disabled: true },
];

<Autocomplete
  options={options}
  value={value}
  onChange={(val) => setValue(val)}
  placeholder="Type a fruit..."
/>`}
      >
        <VStack gap="md" align="start">
          <Text size="sm" color="muted">
            Each option requires a <code className="bg-gray-100 px-1 rounded">value</code> and <code className="bg-gray-100 px-1 rounded">label</code>.
            Optional fields include <code className="bg-gray-100 px-1 rounded">disabled</code> and <code className="bg-gray-100 px-1 rounded">description</code>.
          </Text>
        </VStack>
      </Showcase>

      <PropsTable
        title="AutocompleteOption Properties"
        props={[
          { name: 'value', type: 'string', description: 'Unique identifier for the option (required)' },
          { name: 'label', type: 'string', description: 'Display text shown in the dropdown (required)' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the option, preventing selection' },
          { name: 'description', type: 'string', description: 'Additional description text for the option' },
        ]}
      />

      <PropsTable
        title="Autocomplete Props"
        props={[
          { name: 'options', type: 'AutocompleteOption[]', description: 'Array of options to display (see AutocompleteOption type above)' },
          { name: 'value', type: 'string', description: 'Selected value (controlled)' },
          { name: 'onChange', type: '(value: string, option: AutocompleteOption | null) => void', description: 'Callback when value changes' },
          { name: 'onInputChange', type: '(inputValue: string) => void', description: 'Callback when input text changes' },
          { name: 'placeholder', type: 'string', description: 'Placeholder text when no value entered' },
          { name: 'variant', type: "'outline' | 'filled' | 'flushed'", default: "'outline'", description: 'Visual variant of the autocomplete' },
          { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Size of the autocomplete' },
          { name: 'isDisabled', type: 'boolean', default: 'false', description: 'Disabled state' },
          { name: 'isLoading', type: 'boolean', default: 'false', description: 'Shows loading indicator' },
          { name: 'isClearable', type: 'boolean', default: 'false', description: 'Shows clear button to reset value' },
          { name: 'freeSolo', type: 'boolean', default: 'false', description: 'Allows custom values not in the options list' },
          { name: 'minChars', type: 'number', description: 'Minimum characters before showing suggestions' },
          { name: 'filterOption', type: '(option, inputValue) => boolean', description: 'Custom filter function for options' },
          { name: 'noOptionsMessage', type: 'string', description: 'Message shown when no options match' },
          { name: 'loadingMessage', type: 'string', description: 'Message shown while loading' },
        ]}
      />
    </div>
  );
}
