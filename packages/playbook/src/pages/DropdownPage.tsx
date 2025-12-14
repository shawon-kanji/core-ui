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

      <Showcase
        title="Icons, Shortcuts, Disabled"
        code={`<DropdownButton
  label="Actions"
  items=[
    { id: 'new', label: 'New File', icon: '📄', shortcut: '⌘N', onClick: () => alert('New') },
    { id: 'save', label: 'Save', icon: '💾', shortcut: '⌘S', onClick: () => alert('Save') },
    { id: 'share', label: 'Share', icon: '🔗', onClick: () => alert('Share'), dividerAfter: true },
    { id: 'delete', label: 'Delete', icon: '🗑️', danger: true },
    { id: 'disabled', label: 'Disabled item', icon: '⏸️', disabled: true },
  ]
/>
`}
      >
        <DropdownButton
          label="Actions"
          items={[
            { id: 'new', label: 'New File', icon: '📄', shortcut: '⌘N', onClick: () => alert('New') },
            { id: 'save', label: 'Save', icon: '💾', shortcut: '⌘S', onClick: () => alert('Save') },
            { id: 'share', label: 'Share', icon: '🔗', onClick: () => alert('Share'), dividerAfter: true },
            { id: 'delete', label: 'Delete', icon: '🗑️', danger: true },
            { id: 'disabled', label: 'Disabled item', icon: '⏸️', disabled: true },
          ]}
        />
      </Showcase>

      <Showcase
        title="Submenu & Close Control"
        description="Nested items plus keep-open behavior until manually closed."
        code={`<DropdownButton
  label="More"
  closeOnSelect={false}
  items=[
    { id: 'profile', label: 'Profile' },
    {
      id: 'settings',
      label: 'Settings',
      items: [
        { id: 'general', label: 'General' },
        { id: 'security', label: 'Security' },
        { id: 'billing', label: 'Billing' },
      ],
    },
    { id: 'help', label: 'Help' },
  ]
/>
`}
      >
        <DropdownButton
          label="More"
          closeOnSelect={false}
          items={[
            { id: 'profile', label: 'Profile' },
            {
              id: 'settings',
              label: 'Settings',
              items: [
                { id: 'general', label: 'General' },
                { id: 'security', label: 'Security' },
                { id: 'billing', label: 'Billing' },
              ],
            },
            { id: 'help', label: 'Help' },
          ]}
        />
      </Showcase>

      <Showcase
        title="Placements"
        description="Different menu placements relative to the trigger."
        code={`<div className="flex gap-3 flex-wrap">
  <DropdownButton label="Bottom Start" placement="bottom-start" />
  <DropdownButton label="Bottom End" placement="bottom-end" />
  <DropdownButton label="Top Start" placement="top-start" />
  <DropdownButton label="Top End" placement="top-end" />
</div>
`}
      >
        <div className="flex gap-3 flex-wrap items-start">
          <DropdownButton label="Bottom Start" placement="bottom-start" items={[{ id: 'one', label: 'One' }]} />
          <DropdownButton label="Bottom End" placement="bottom-end" items={[{ id: 'one', label: 'One' }]} />
          <DropdownButton label="Top Start" placement="top-start" items={[{ id: 'one', label: 'One' }]} />
          <DropdownButton label="Top End" placement="top-end" items={[{ id: 'one', label: 'One' }]} />
        </div>
      </Showcase>
    </div>
  );
}
