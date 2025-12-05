import { useState } from 'react';
import { DatePicker, Heading, Text, VStack, HStack } from '@shawonkanji/core-ui';
import { Showcase, PropsTable } from '../components';

export function DatePickerPage() {
  const [date, setDate] = useState<Date | null>(null);
  const [rangeStart, setRangeStart] = useState<Date | null>(null);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(null);

  const today = new Date();
  const minDate = new Date(today.getFullYear(), today.getMonth(), 1);
  const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  return (
    <div className="space-y-8">
      <div>
        <Heading as="h2">DatePicker</Heading>
        <Text color="muted" className="mt-2">
          Date selection component with calendar icon and native date input support.
        </Text>
      </div>

      <Showcase
        title="Basic DatePicker"
        code={`const [date, setDate] = useState<Date | null>(null);

<DatePicker
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

      <Showcase
        title="With Min/Max Dates"
        description="Restrict date selection to a specific range."
        code={`const today = new Date();
const minDate = new Date(today.getFullYear(), today.getMonth(), 1);
const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);

<DatePicker
  selected={date}
  onChange={setDate}
  minDate={minDate}
  maxDate={maxDate}
  placeholder="Select within this month"
/>`}
      >
        <DatePicker
          selected={date}
          onChange={setDate}
          minDate={minDate}
          maxDate={maxDate}
          placeholder="Select within this month"
        />
      </Showcase>

      <Showcase
        title="Sizes"
        code={`<VStack gap="md">
  <DatePicker size="sm" placeholder="Small" />
  <DatePicker size="md" placeholder="Medium" />
  <DatePicker size="lg" placeholder="Large" />
</VStack>`}
      >
        <VStack gap="md">
          <DatePicker size="sm" placeholder="Small" />
          <DatePicker size="md" placeholder="Medium" />
          <DatePicker size="lg" placeholder="Large" />
        </VStack>
      </Showcase>

      <Showcase
        title="Variants"
        code={`<VStack gap="md">
  <DatePicker variant="outline" placeholder="Outline" />
  <DatePicker variant="filled" placeholder="Filled" />
  <DatePicker variant="flushed" placeholder="Flushed" />
</VStack>`}
      >
        <VStack gap="md">
          <DatePicker variant="outline" placeholder="Outline" />
          <DatePicker variant="filled" placeholder="Filled" />
          <DatePicker variant="flushed" placeholder="Flushed" />
        </VStack>
      </Showcase>

      <Showcase
        title="States"
        code={`<VStack gap="md">
  <DatePicker isDisabled placeholder="Disabled" />
  <DatePicker isReadOnly selected={new Date()} />
  <DatePicker isInvalid placeholder="Invalid" />
</VStack>`}
      >
        <VStack gap="md">
          <DatePicker isDisabled placeholder="Disabled" />
          <DatePicker isReadOnly selected={new Date()} />
          <DatePicker isInvalid placeholder="Invalid" />
        </VStack>
      </Showcase>

      <Showcase
        title="Date Range (Two Pickers)"
        description="Use two DatePickers for start and end date selection."
        code={`const [rangeStart, setRangeStart] = useState<Date | null>(null);
const [rangeEnd, setRangeEnd] = useState<Date | null>(null);

<HStack gap="md">
  <DatePicker
    selected={rangeStart}
    onChange={setRangeStart}
    maxDate={rangeEnd || undefined}
    placeholder="Start date"
  />
  <DatePicker
    selected={rangeEnd}
    onChange={setRangeEnd}
    minDate={rangeStart || undefined}
    placeholder="End date"
  />
</HStack>`}
      >
        <HStack gap="md">
          <DatePicker
            selected={rangeStart}
            onChange={setRangeStart}
            maxDate={rangeEnd || undefined}
            placeholder="Start date"
          />
          <DatePicker
            selected={rangeEnd}
            onChange={setRangeEnd}
            minDate={rangeStart || undefined}
            placeholder="End date"
          />
        </HStack>
      </Showcase>

      <PropsTable
        title="DatePicker Props"
        props={[
          { name: 'selected', type: 'Date | null', description: 'The currently selected date' },
          { name: 'onChange', type: '(date: Date | null) => void', description: 'Callback when date changes' },
          { name: 'placeholder', type: 'string', default: "'Select date'", description: 'Placeholder text when no date selected' },
          { name: 'minDate', type: 'Date', description: 'Minimum selectable date' },
          { name: 'maxDate', type: 'Date', description: 'Maximum selectable date' },
          { name: 'dateFormat', type: 'string', default: "'yyyy-MM-dd'", description: 'Format for displaying the date' },
          { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Size of the input' },
          { name: 'variant', type: "'outline' | 'filled' | 'flushed'", default: "'outline'", description: 'Visual variant of the input' },
          { name: 'color', type: 'DatePickerColor', default: "'primary'", description: 'Color theme for focus states' },
          { name: 'isDisabled', type: 'boolean', default: 'false', description: 'Disabled state' },
          { name: 'isReadOnly', type: 'boolean', default: 'false', description: 'Read-only state' },
          { name: 'isInvalid', type: 'boolean', default: 'false', description: 'Error state' },
        ]}
      />
    </div>
  );
}
