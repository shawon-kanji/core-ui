import { useState } from 'react';
import { Autocomplete, Heading, Text, type AutocompleteOption } from '@shawonkanji/core-ui';
import { Showcase } from '../components';

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
    </div>
  );
}
