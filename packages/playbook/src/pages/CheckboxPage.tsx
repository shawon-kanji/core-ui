import { useState } from 'react';
import {
  Checkbox,
  CheckboxGroup,
  Text,
  Heading,
  VStack,
  HStack,
} from '@shawonkanji/core-ui';
import { Showcase, PropsTable } from '../components';

export function CheckboxPage() {
  const [checked, setChecked] = useState(false);
  const [groupValue, setGroupValue] = useState<string[]>(['option1']);

  return (
    <div className="space-y-8">
      <div>
        <Heading as="h2">Checkbox</Heading>
        <Text color="muted" className="mt-2">
          Checkbox inputs for selecting options.
        </Text>
      </div>

      <Showcase
        title="Basic Checkbox"
        code={`<Checkbox
  label="Accept terms and conditions"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>`}
      >
        <Checkbox
          label="Accept terms and conditions"
          checked={checked}
          onChange={(checked) => setChecked(checked)}
        />
      </Showcase>

      <Showcase
        title="With Helper Text"
        code={`<Checkbox
  label="Subscribe to newsletter"
  helperText="We'll send you weekly updates"
/>`}
      >
        <Checkbox
          label="Subscribe to newsletter"
          helperText="We'll send you weekly updates"
        />
      </Showcase>

      <Showcase
        title="Sizes"
        code={`<Checkbox size="sm" label="Small" />
<Checkbox size="md" label="Medium" />
<Checkbox size="lg" label="Large" />`}
      >
        <VStack gap="md" align="start">
          <Checkbox size="sm" label="Small checkbox" />
          <Checkbox size="md" label="Medium checkbox" />
          <Checkbox size="lg" label="Large checkbox" />
        </VStack>
      </Showcase>

      <Showcase
        title="Colors"
        code={`<Checkbox color="primary" label="Primary" defaultChecked />
<Checkbox color="secondary" label="Secondary" defaultChecked />
<Checkbox color="success" label="Success" defaultChecked />`}
      >
        <HStack gap="xl" wrap>
          <Checkbox color="primary" label="Primary" defaultChecked />
          <Checkbox color="secondary" label="Secondary" defaultChecked />
          <Checkbox color="success" label="Success" defaultChecked />
          <Checkbox color="warning" label="Warning" defaultChecked />
          <Checkbox color="error" label="Error" defaultChecked />
        </HStack>
      </Showcase>

      <Showcase
        title="States"
        code={`<Checkbox label="Disabled" isDisabled />
<Checkbox label="Disabled Checked" isDisabled defaultChecked />
<Checkbox label="Invalid" isInvalid />
<Checkbox label="Indeterminate" isIndeterminate />`}
      >
        <VStack gap="md" align="start">
          <Checkbox label="Disabled" isDisabled />
          <Checkbox label="Disabled Checked" isDisabled defaultChecked />
          <Checkbox label="Invalid" isInvalid helperText="This field is required" />
          <Checkbox label="Indeterminate" isIndeterminate />
        </VStack>
      </Showcase>

      <Showcase
        title="Checkbox Group"
        code={`<CheckboxGroup
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]}
  value={values}
  onChange={setValues}
/>`}
      >
        <VStack gap="md" align="start">
          <CheckboxGroup
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3', helperText: 'With helper text' },
            ]}
            value={groupValue}
            onChange={setGroupValue}
            color="primary"
          />
          <Text size="sm" color="muted">
            Selected: {groupValue.join(', ') || 'none'}
          </Text>
        </VStack>
      </Showcase>

      <Showcase
        title="Horizontal Group"
        code={`<CheckboxGroup
  direction="horizontal"
  options={options}
/>`}
      >
        <CheckboxGroup
          direction="horizontal"
          options={[
            { value: 'react', label: 'React' },
            { value: 'vue', label: 'Vue' },
            { value: 'angular', label: 'Angular' },
            { value: 'svelte', label: 'Svelte' },
          ]}
          color="secondary"
        />
      </Showcase>

      <PropsTable
        title="Checkbox Props"
        props={[
          { name: 'label', type: 'ReactNode', description: 'Checkbox label' },
          { name: 'helperText', type: 'string', description: 'Helper text below label' },
          { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Checkbox size' },
          { name: 'color', type: 'CheckboxColor', default: "'primary'", description: 'Checkbox color' },
          { name: 'isIndeterminate', type: 'boolean', default: 'false', description: 'Indeterminate state' },
          { name: 'isDisabled', type: 'boolean', default: 'false', description: 'Disabled state' },
          { name: 'isInvalid', type: 'boolean', default: 'false', description: 'Error state' },
        ]}
      />
    </div>
  );
}
