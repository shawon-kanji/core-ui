import { useState } from 'react';
import { DatePicker, Heading, Text } from '@shawonkanji/core-ui';
import { Showcase } from '../components';

export function DatePickerPage() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className="space-y-8">
      <div>
        <Heading as="h2">DatePicker</Heading>
        <Text color="muted" className="mt-2">
          Date selection component.
        </Text>
      </div>

      <Showcase
        title="Basic DatePicker"
        code={`<DatePicker
  selected={date}
  onChange={setDate}
  placeholder="Select a date"
/>`}
      >
        <DatePicker
          selected={date}
          onChange={setDate}
          placeholder="Select a date"
        />
      </Showcase>
    </div>
  );
}
