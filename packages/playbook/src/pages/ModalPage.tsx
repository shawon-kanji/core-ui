import { useState } from 'react';
import { Button, Modal, Text, Heading, HStack, VStack } from '@shawonkanji/core-ui';
import { Showcase } from '../components';

export function ModalPage() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [sizesOpen, setSizesOpen] = useState<'sm' | 'md' | 'lg' | null>(null);

  return (
    <div className="space-y-8">
      <div>
        <Heading as="h2">Modal</Heading>
        <Text color="muted" className="mt-2">Accessible dialog with header, body, and optional footer actions.</Text>
      </div>

      <Showcase
        title="Basic confirmation"
        code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open modal</Button>
<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm action"
  description="Modals trap focus and close on escape/click outside."
  footer={(
    <HStack justify="end" gap="md">
      <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
      <Button onClick={() => setOpen(false)}>Confirm</Button>
    </HStack>
  )}
>
  Body content here
</Modal>`}
      >
        <Button onClick={() => setBasicOpen(true)}>Open modal</Button>
        <Modal
          open={basicOpen}
          onClose={() => setBasicOpen(false)}
          title="Confirm action"
          description="Modals close on escape or backdrop click."
          footer={(
            <HStack justify="end" gap="md">
              <Button variant="ghost" onClick={() => setBasicOpen(false)}>Cancel</Button>
              <Button onClick={() => setBasicOpen(false)}>Confirm</Button>
            </HStack>
          )}
        >
          <Text size="sm" color="muted">
            Use the modal to interrupt the flow for confirmations or forms. It supports keyboard dismissal.
          </Text>
        </Modal>
      </Showcase>

      <Showcase
        title="Sizes"
        description="sm, md, lg widths"
        code={`<Button onClick={() => setSize('sm')}>Small</Button>
<Button onClick={() => setSize('md')}>Medium</Button>
<Button onClick={() => setSize('lg')}>Large</Button>

<Modal size={size} open={!!size} onClose={() => setSize(null)} title="Sized modal" />`}
      >
        <HStack gap="md" wrap>
          <Button onClick={() => setSizesOpen('sm')}>Small</Button>
          <Button onClick={() => setSizesOpen('md')}>Medium</Button>
          <Button onClick={() => setSizesOpen('lg')}>Large</Button>
        </HStack>
        {sizesOpen && (
          <Modal
            open={!!sizesOpen}
            size={sizesOpen}
            onClose={() => setSizesOpen(null)}
            title={`${sizesOpen.toUpperCase()} modal`}
            description="Try different widths for varied content density."
            footer={(
              <HStack justify="end" gap="md">
                <Button variant="ghost" onClick={() => setSizesOpen(null)}>Close</Button>
              </HStack>
            )}
          >
            <VStack gap="sm" align="start">
              <Text size="sm" color="muted">This modal renders at the selected width.</Text>
              <Text size="sm">Use lg for forms, sm for quick confirmations.</Text>
            </VStack>
          </Modal>
        )}
      </Showcase>
    </div>
  );
}
