import { DropdownButton, Heading, Text } from '@shawonkanji/core-ui';
import { Showcase } from '../components';

export function DropdownPage() {
  return (
    <div className="space-y-8">
      <div>
        <Heading as="h2">Dropdown</Heading>
        <Text color="muted" className="mt-2">
          Menu for displaying a list of actions or options.
        </Text>
      </div>

      <Showcase
        title="Basic Dropdown"
        code={`<DropdownButton
  label="Open Menu"
  items={[
    { id: 'edit', label: 'Edit', onClick: () => alert('Edit') },
    { id: 'delete', label: 'Delete', onClick: () => alert('Delete'), danger: true },
  ]}
/>`}
      >
        <DropdownButton
          label="Open Menu"
          items={[
            { id: 'edit', label: 'Edit', onClick: () => alert('Edit') },
            { id: 'delete', label: 'Delete', onClick: () => alert('Delete'), danger: true },
          ]}
        />
      </Showcase>
    </div>
  );
}
